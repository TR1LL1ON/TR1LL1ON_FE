import { GuestCount } from '@/interfaces/interface';
import { atom } from 'recoil';

export const allUserState = atom<string[]>({
  key: 'allUserState',
  default: [],
});

export const guestCountState = atom<GuestCount>({
  key: 'guestCountState',
  default: {
    adults: 0,
    children: 0,
    infants: 0,
  },
});

export const totalGuestCountState = atom<number>({
  key: 'totalGuestCountState',
  default: 0,
});
