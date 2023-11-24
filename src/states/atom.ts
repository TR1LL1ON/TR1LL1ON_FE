import { atom } from 'recoil';
import { OrderRequest } from '../interfaces/interface';

export const allUserState = atom<string[]>({
  key: 'allUserState',
  default: [],
});

export const orderState = atom<OrderRequest>({
  key: 'orderState',
  default: {
    orders: [],
    payment: 'kakaopay',
    total_price: 0,
  },
});
