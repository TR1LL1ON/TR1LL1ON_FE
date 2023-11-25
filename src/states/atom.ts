import { atom } from 'recoil';
import { OrderRequest } from '../interfaces/interface';
import { CardInfoValues } from '../components/template/payment/AddCreditCard';

export const allUserState = atom<string[]>({
  key: 'allUserState',
  default: [],
});

// 숙소 상세 페이지에서 예약 누를 시, 예약 정보를 담는 state
// orders: 예약 정보
export const orderState = atom<OrderRequest>({
  key: 'orderState',
  default: {
    orders: [],
    payment: 'kakaopay',
    total_price: 0,
  },
});

export const cardState = atom<CardInfoValues>({
  key: 'cardState',
  default: {
    cardNumber: { first: '', second: '', third: '', fourth: '' },
    cardPassword: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    isSaveCard: false,
  },
});
