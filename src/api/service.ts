import axios from 'axios';
import {
  OrderRequest,
  AccommodationData,
  Cart,
  ProductReviewResponse,
} from '../interfaces/interface';
import { getCookie, removeCookie } from '@/util/util';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

client.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response.status === 401) {
    //   alert('로그인이 필요합니다.');
    //   window.location.href = '/';
    // }
    if (error.response.status === 500) {
      alert('세션이 만료되었습니다. 다시 로그인 후 시도해 주세요.');
      removeCookie();
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

// 회원가입
export const postSignUp = async (
  email: string,
  name: string,
  password: string,
) => {
  await client.post('auth/signup', {
    email,
    name,
    password,
  });
};

// 로그인
export const postLogin = async (email: string, password: string) => {
  const res = await client.post('auth/login', {
    email,
    password,
  });
  return res;
};

// 로그아웃
export const postLogout = async () => {
  await client.post('auth/logout');
};

//getProducts 통합 - 기본 20개
export const getProducts = async (
  options: {
    checkIn?: string;
    checkOut?: string;
    personNumber?: string;
    categoryCode?: string;
    RegionCode?: string;
    accommodationData?: AccommodationData;
    pageSize?: number;
    maxId?: string;
  } = {},
) => {
  const { pageSize, maxId, ...params } = options;

  let endpoint = '/products';

  if (pageSize && maxId) {
    endpoint += `?pageSize=${pageSize}&maxId=${maxId}`;
  } else if (maxId) {
    endpoint += `?maxId=${maxId}`;
  }

  if (options.categoryCode || options.RegionCode) {
    endpoint += '&';

    if (options.categoryCode) {
      endpoint += `category=${options.categoryCode}`;
    }

    if (options.RegionCode) {
      if (options.categoryCode) {
        endpoint += '&';
      }
      endpoint += `region=${options.RegionCode}`;
    }
  }

  const res = await client.get(endpoint, { params });
  return res;
};

// 전체 숙소 조회
export const getAllProducts = async () => {
  const res = await client.get(`products/map`);
  return res;
};

// 개별 상품조회(숙소전체)
export const getAccommodation = async (accommodationID: string) => {
  const res = await client.get(`products/${accommodationID}`);
  return res;
};

// 개별 상품 상세페이지 조회
export const getAccommodationProduct = async (
  accommodationID: string,
  productID: string,
) => {
  const res = await client.get(`products/${accommodationID}/${productID}`);
  return res;
};

// 상품 주문하기
export const postOrders = async (orderData: OrderRequest) => {
  const res = await client.post(`order`, orderData);
  return res;
};

// 장바구니 상품 전체 조회
export const getCarts = async () => {
  const res = await client.get<Cart[]>(`carts`);
  return res.data;
};

// 장바구니 상품 추가
export const postCart = async ({ productId, ...payload }: AddCart) => {
  await client.post(`carts/${productId}`, payload);
};

// 장바구니 상품 삭제
export const deleteCart = async (cartID: number) => {
  await client.delete(`carts/${cartID}`);
};

// 내 리뷰 조회
export const getReviews = async () => {
  const res = await client.get(`reviews`);
  return res;
};

// 리뷰작성
export const postReviews = async (
  orderItemId: number,
  score: number,
  content: string,
) => {
  const res = await client.post(`/reviews`, {
    orderItemId: orderItemId,
    score: score,
    content: content,
  });
  return res;
};

// 리뷰수정
export const putReviews = async (
  reviewID: string,
  content: string,
  score: number,
) => {
  const res = await client.put(`reviews/${reviewID}`, {
    content: content,
    score: score,
  });
  return res;
};

// 리뷰삭제
export const deleteReviews = async (reviewID: string) => {
  const res = await client.delete(`reviews/${reviewID}`);
  return res;
};

//숙소 리뷰 조회
export const getProductsReview = async (
  accommodationID: string,
  page: number,
  size: number,
): Promise<ProductReviewResponse> => {
  const res = await client.get(
    `reviews/${accommodationID}?page=${page}&size=${size}`,
  );
  return res.data;
};

//객실 리뷰 조회
export const getRoomReview = async (
  productId: number,
  page: number,
  size: number,
) => {
  console.log('Request parameters:', { productId, page, size });

  const res = await client.get(
    `/reviews/products/${productId}?page=${page}&size=${size}`,
  );
  return res.data;
};
// 숙소 찜 조회
export const getLikes = async () => {
  const res = await client.get(`likes`);
  return res;
};

// 숙소 찜 누르기
export const postLikes = async (accommodationID: string) => {
  const res = await client.post(`likes/${accommodationID}`);
  return res;
};

// 숙소 찜 삭제
export const deleteLikes = async (accommodationID: string) => {
  const res = await client.delete(`likes/${accommodationID}`);
  return res;
};

// 전제 주문목록 조회(마이페이지)
export const getUser = async () => {
  const res = await client.get(`user`);
  return res;
};

// 전제 주문목록 상세조회(마이페이지)
export const getUserDetail = async (orderID: number) => {
  const res = await client.get(`user/details/${orderID}`);
  return res;
};
export interface SummaryData {
  products: Product[];
}

export interface Product {
  accommodationName: string;
  roomName: string;
  imageUrl: string;
  category: string;
}

export const getReservedRooms = async (productIds: number[]) => {
  try {
    const res = await client.post<SummaryData>(`products/summary`, productIds);

    return res.data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

// 📚레퍼런스 : https://www.notion.so/API-556c8b2ec73a460c9132ccc9a0a2dbc1
