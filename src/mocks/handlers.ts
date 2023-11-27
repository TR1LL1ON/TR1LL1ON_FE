import { SignupRequestBody } from '@/interfaces/interface';
import { rest } from 'msw';
import { SERVER_URL } from '@/constant';

export const handlers = [
  // 회원가입
  rest.post(`${SERVER_URL}/auth/signup`, (req, res, ctx) => {
    const { name, email, password } = req.body as SignupRequestBody;

    return res(
      ctx.status(200),
      ctx.json({
        message: 'Signup successful',
        user: { name, email, password },
      }),
    );
  }),

  // 로그인
  rest.post(`${SERVER_URL}/auth/login`, (req, res, ctx) => {
    const { email, password } = req.body as SignupRequestBody;
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Login successful',
        user: { email, password },
      }),
    );
  }),

  // 로그아웃
  rest.get(`${SERVER_URL}/logout`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'Logout successful' }));
  }),

  // 전체 숙소조회(비로그인) <=> 개인화 숙소조회(로그인)
  rest.get(`${SERVER_URL}/products`, (_, res, ctx) => {
    const products = [
      // 더미 데이터
      {
        accomodation_id: 1, //
        image_url: 'http://example.com/image1.jpg',
        name: '숙소 1',
        address: '주소 1',
        area_code: '001',
        price: 100000,
        score: 4.5,
      },
    ];
    return res(ctx.status(200), ctx.json({ items: products }));
  }),

  // 카테고리별 숙소 조회
  rest.get(`${SERVER_URL}/products`, (req, res, ctx) => {
    const categoryCode = req.url.searchParams.get('category');
    const products = [
      // 더미 데이터
      {
        accomodation_id: 1, //
        image_url: 'http://example.com/image1.jpg',
        name: '숙소 1',
        address: '주소 1',
        area_code: '001',
        price: 100000,
        score: 4.5,
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ category: categoryCode, items: products }),
    );
  }),

  // 지역별 숙소 조회
  rest.get(`${SERVER_URL}/products`, (req, res, ctx) => {
    const regionCode = req.url.searchParams.get('region');

    const products = [
      // 더미 데이터
      {
        accomodation_id: 1, //
        image_url: 'http://example.com/image1.jpg',
        name: '숙소 1',
        address: '주소 1',
        area_code: '001',
        price: 100000,
        score: 4.5,
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ region: regionCode, items: products }),
    );
  }),

  // 지역별 & 카테고리별 숙소 조회
  rest.get(`${SERVER_URL}/products`, (req, res, ctx) => {
    const categoryCode = req.url.searchParams.get('category');
    const regionCode = req.url.searchParams.get('region');

    const products = [
      // 더미 데이터
      {
        accomodation_id: 1, //
        image_url: 'http://example.com/image1.jpg',
        name: '숙소 1',
        address: '주소 1',
        area_code: '001',
        price: 100000,
        score: 4.5,
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ category: categoryCode, region: regionCode, items: products }),
    );
  }),

  // 개별 상품 조회
  rest.post(`${SERVER_URL}/products/:accomodationID/`, (req, res, ctx) => {
    const { accomodationID } = req.params;

    const accomodationData = {
      accommodation_id: 11,
      name: '오월의 푸른하늘',
      address: '경기도 이천시 마장면 덕평로877번길 16',
      area_code: '31',
      phone: '정보 없음',
      category: 'B02010700',
      check_in: '2023-11-26',
      check_out: '2023-11-27',
      person_number: 2,
      score: 5.0,
      image: [
        {
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/45/3023445_image2_1.jpg',
        },
        {
          imageUrl:
            'http://tong.visitkorea.or.kr/cms/resource/45/3023445_image3_1.jpg',
        },
      ],
      rooms: [
        {
          room_id: 32,
          room_name: '디럭스',
          check_in: '15:00',
          check_out: '11:00',
          count: 12,
          aver_price: 70000.0,
          total_price: 70000,
          max_number: 9,
          standard_number: 1,
          facility: {
            can_cook: false,
            has_air_conditioner: false,
            has_bath: true,
            has_cable: true,
            has_hair_dryer: true,
            has_internet: false,
            has_pc: false,
            has_refrigerator: true,
            has_sofa: true,
            has_tv: false,
            has_table: true,
            has_toiletries: true,
          },
          image: [
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/50/2705650_image2_1.jpg',
            },
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/51/2705651_image2_1.jpg',
            },
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/35/2705635_image2_1.jpg',
            },
          ],
          sold: true,
        },
        {
          room_id: 34,
          room_name: '스탠다드',
          check_in: '15:00',
          check_out: '11:00',
          count: 8,
          aver_price: 80000.0,
          total_price: 80000,
          max_number: 10,
          standard_number: 2,
          facility: {
            can_cook: true,
            has_air_conditioner: true,
            has_bath: true,
            has_cable: true,
            has_hair_dryer: true,
            has_internet: false,
            has_pc: false,
            has_refrigerator: false,
            has_sofa: true,
            has_tv: false,
            has_table: false,
            has_toiletries: false,
          },
          image: [
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/50/2705650_image2_1.jpg',
            },
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/51/2705651_image2_1.jpg',
            },
            {
              image_url:
                'http://tong.visitkorea.or.kr/cms/resource/35/2705635_image2_1.jpg',
            },
          ],
          sold: true,
        },
      ],
      facility: {
        has_beauty: false,
        has_cooking: false,
        has_sauna: false,
        has_parking: false,
        has_sports: false,
      },
      latitude: '37.2361078310',
      longitude: '127.3639953703',
    };

    return res(ctx.status(200), ctx.json({ accomodationID, accomodationData }));
  }),

  // 개별 상품 상세페이지 조회
  rest.post(
    `${SERVER_URL}/products/:accomodationID/:productID`,
    (req, res, ctx) => {
      const { accomodationID, productID } = req.params;

      const roomData = {
        room_id: 34,
        room_name: '스탠다드',
        check_in: '15:00',
        check_out: '11:00',
        count: 8,
        aver_price: 80000.0,
        total_price: 80000,
        max_number: 10,
        standard_number: 2,
        facility: {
          can_cook: true,
          has_air_conditioner: true,
          has_bath: true,
          has_cable: true,
          has_hair_dryer: true,
          has_internet: false,
          has_pc: false,
          has_refrigerator: false,
          has_sofa: true,
          has_tv: false,
          has_table: false,
          has_toiletries: false,
        },
        image: [
          {
            image_url:
              'http://tong.visitkorea.or.kr/cms/resource/50/2705650_image2_1.jpg',
          },
          {
            image_url:
              'http://tong.visitkorea.or.kr/cms/resource/51/2705651_image2_1.jpg',
          },
          {
            image_url:
              'http://tong.visitkorea.or.kr/cms/resource/35/2705635_image2_1.jpg',
          },
        ],
        sold: true,
      };

      return res(
        ctx.status(200),
        ctx.json({ accomodationID, productID, roomData }),
      );
    },
  ),

  // 상품 주문하기
  rest.post(`${SERVER_URL}/orders`, (req, res, ctx) => {
    const orderData = req.body;

    const orderResponse = {
      // 더미데이터
      orders: [
        {
          check_in: '2023-11-21',
          check_out: '2023-11-22',
          person_number: 2,
          product_id: 2,
          price: 20000,
        },
        {
          check_in: '2023-11-21',
          check_out: '2023-11-22',
          person_number: 2,
          product_id: 1,
          price: 20000,
        },
        // 더 많은 주문 추가 가능
      ],
      payment: 'card',
      total_price: 40000,
    };

    return res(
      ctx.status(200),
      ctx.json({ message: 'Order placed', orderData, orderResponse }),
    );
  }),

  // 장바구니 상품 전체 조회
  rest.get(`${SERVER_URL}/carts`, (_, res, ctx) => {
    const cartData = {
      // 더미 데이터
      items: [
        {
          accomodation_name: '신라호텔',
          accomodation_address: '제주특별자치도 서귀포시 중문관광로72번길 75',
          accomodation_category: 'B02010100',
          product_name: '더블 스탠다드룸',
          check_in: '2023-11-21',
          check_out: '2023-11-22',
          person_number: 2,
          price: 20000,
        },
        // 더 많은 장바구니 아이템 추가 가능
      ],
    };

    return res(ctx.status(200), ctx.json(cartData));
  }),

  // 장바구니 상품 추가
  rest.post(`${SERVER_URL}/carts/:productID`, (req, res, ctx) => {
    const { productID } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: 'Product added to cart', productID }),
    );
  }),

  // 장바구니 상품 삭제
  rest.delete(`${SERVER_URL}/carts/:cartID`, (req, res, ctx) => {
    const { cartID } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: 'Product removed from cart', cartID }),
    );
  }),

  // 내 리뷰 조회
  rest.get(`${SERVER_URL}/reviews`, (_, res, ctx) => {
    const reviewData = {
      reviews: [
        {
          created_at: '2023-11-21',
          user_name: 'test',
          order_item_id: 1,
          order_id: 1,
          review_id: 1,
          accomodation_id: 1,
          content: '좋은 숙소입니다.',
          score: 4.5,
        },
        // 더 많은 리뷰 아이템 추가 가능
      ],
    };

    return res(ctx.status(200), ctx.json(reviewData));
  }),

  // 리뷰 작성
  rest.post(`${SERVER_URL}/reviews`, (req, res, ctx) => {
    const reviewData = req.body; // 요청 바디에서 리뷰 데이터 추출

    return res(
      ctx.status(200),
      ctx.json({ message: 'Review posted', reviewData }),
    );
  }),

  // 리뷰 수정
  rest.put(`${SERVER_URL}/reviews/:reviewID`, (req, res, ctx) => {
    const { reviewID } = req.params;
    const reviewData = req.body; // 요청 바디에서 리뷰 데이터 추출

    return res(
      ctx.status(200),
      ctx.json({ message: 'Review updated', reviewID, reviewData }),
    );
  }),

  // 리뷰 삭제
  rest.delete(`${SERVER_URL}/reviews/:reviewID`, (req, res, ctx) => {
    const { reviewID } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: 'Review deleted', reviewID }),
    );
  }),

  // 숙소 찜 조회
  rest.get(`${SERVER_URL}/likes`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ likes: [] }));
  }),

  // 숙소 찜 누르기
  rest.post(`${SERVER_URL}/likes/:accomodationID`, (req, res, ctx) => {
    const { accomodationID } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: 'Accomodation liked', accomodationID }),
    );
  }),

  // 숙소 찜 삭제
  rest.delete(`${SERVER_URL}/likes/:accomodationID`, (req, res, ctx) => {
    const { accomodationID } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ message: 'Accomodation unliked', accomodationID }),
    );
  }),
];

// 📚레퍼런스 : https://www.notion.so/API-556c8b2ec73a460c9132ccc9a0a2dbc1
