import { atom } from 'recoil';
import { OrderRequest } from '../interfaces/interface';

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
