export interface JoinData {
  id: string;
  password: string;
  name: string;
  phone: number;
}

export interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}

export interface Order {
  check_in: string;
  check_out: string;
  person_number: number;
  product_id: number;
  price: number;
}

export interface OrderRequest {
  orders: Order[];
  payment: 'card' | 'kakaopay' | 'naverpay' | 'cash';
  total_price: number;
}
