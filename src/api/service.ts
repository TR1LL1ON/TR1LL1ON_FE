import axios from 'axios';
import { CONTENT_TYPE, SERVER_URL } from '@/constant';
import {
  OrderData,
  AccomodationData,
  ReviewData,
} from '@/interfaces/interface';

const client = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'content-type': CONTENT_TYPE,
  },
});

// 회원가입
export const postSignUp = async (
  name: string,
  email: string,
  password: string,
) => {
  const res = await client.post('auth/signup', {
    name: name,
    email: email,
    password: password,
  });
  return res;
};

// 로그인
export const postLogin = async (email: string, password: string) => {
  const res = await client.post('auth/login', {
    email: email,
    password: password,
  });
  return res;
};

// 로그아웃
export const getLogout = async () => {
  const res = await client.get('logout');
  return res;
};

// 전체 숙소조회(비로그인) <=> 개인화 숙소조회(로그인)
export const getProducts = async (accomodationData: AccomodationData) => {
  const res = await client.get('products', { params: accomodationData });
  return res;
};

// 카테고리별 숙소조회
export const getProductsCategory = async (
  categoryCode: string,
  accomodationData: AccomodationData,
) => {
  const res = await client.get(`products?category=${categoryCode}`, {
    params: accomodationData,
  });
  return res;
};

// 지역별 숙소조회
export const getProductsRegion = async (
  RegionCode: string,
  accomodationData: AccomodationData,
) => {
  const res = await client.get(`products?region=${RegionCode}`, {
    params: accomodationData,
  });
  return res;
};

// 지역별 & 카테고리별 숙소조회
export const getProductsCategoryRegion = async (
  categoryCode: string,
  RegionCode: string,
  accomodationData: AccomodationData,
) => {
  const res = await client.get(
    `products?category=${categoryCode}&region=${RegionCode}`,
    { params: accomodationData },
  );
  return res;
};

// 개별 상품조회
export const postAccomodation = async (accomodationID: string) => {
  const res = await client.post(`products/${accomodationID}/`);
  return res;
};

// 개별 상품 상세페이지 조회
export const postAccomodationProduct = async (
  accomodationID: string,
  productID: string,
) => {
  const res = await client.post(`products/${accomodationID}/${productID}`);
  return res;
};

// 상품 주문하기
export const postOrders = async (orderData: OrderData) => {
  const res = await client.post(`orders`, orderData);
  return res;
};

// 장바구니 상품 전체 조회
export const getCarts = async () => {
  const res = await client.get(`carts`);
  return res;
};

// 장바구니 상품 추가
export const postCarts = async (productID: string) => {
  const res = await client.post(`carts/${productID}`);
  return res;
};

// 장바구니 상품 삭제
export const deleteCarts = async (cartID: string) => {
  const res = await client.delete(`carts/${cartID}`);
  return res;
};

// 내 리뷰 조회
export const getReviews = async () => {
  const res = await client.get(`reviews`);
  return res;
};

// 리뷰작성
export const postReviews = async (ReviewData: ReviewData) => {
  const res = await client.post(`reviews`, {
    ReviewData,
  });
  return res;
};

// 리뷰수정
export const putReviews = async (reviewID: string, ReviewData: ReviewData) => {
  const res = await client.put(`reviews/${reviewID}`, {
    ReviewData,
  });
  return res;
};

// 리뷰삭제
export const deleteReviews = async (reviewID: string) => {
  const res = await client.delete(`reviews/${reviewID}`);
  return res;
};

// 숙소 찜 조회
export const getLikes = async () => {
  const res = await client.get(`likes`);
  return res;
};

// 숙소 찜 누르기
export const postLikes = async (accomodationID: string) => {
  const res = await client.post(`likes/${accomodationID}`);
  return res;
};

// 숙소 찜 삭제
export const deleteLikes = async (accomodationID: string) => {
  const res = await client.delete(`likes/${accomodationID}`);
  return res;
};

// 📚레퍼런스 : https://www.notion.so/API-556c8b2ec73a460c9132ccc9a0a2dbc1
