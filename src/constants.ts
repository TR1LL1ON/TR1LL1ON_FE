import { PaymentOptionType } from './components/template/payment/PaymentOptionItem';

export const paymentOption = {
  KAKAOPAY: '카카오페이',
  NAVERPAY: '네이버페이',
  CARD: '신용카드',
  CASH: '현장 결제',
};

export const paymentOptionList: PaymentOptionType[] = [
  'KAKAOPAY',
  'NAVERPAY',
  'CARD',
  'CASH',
];

export const CATEGORY_CODE: { [key: string]: string } = {
  B02010100: '관광호텔',
  B02010500: '콘도미니엄',
  B02010600: '유스호스텔',
  B02010700: '펜션',
  B02010900: '모텔',
  B02011000: '민박',
  B02011100: '게스트하우스',
  B02011200: '홈스테이',
  B02011300: '서비스드레지던스',
  B02011600: '한옥',
};

export const REGION_CODE = {
  서울: 1,
  인천: 2,
  대전: 3,
  대구: 4,
  광주: 5,
  부산: 6,
  울산: 7,
  세종: 8,
  경기: 31,
  강원: 32,
  충북: 33,
  충남: 34,
  경북: 35,
  경남: 36,
  전북: 37,
  전남: 38,
  제주: 39,
};
