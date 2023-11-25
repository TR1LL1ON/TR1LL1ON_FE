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
  check_in: string; // 체크인 날짜
  check_out: string; // 체크아웃 날짜
  person_number: number; // 인원 수
  product_id: number; // 상품 ID (객실 ID)
  price: number; // 가격
}

export interface OrderData {
  orders: Order[]; // 주문 목록
  payment: string; // 결제 수단
  total_price: number; // 총 가격
}

export interface AccomodationData {
  checkIn: string; // 체크인 날짜
  checkOut: string; // 체크아웃 날짜
  personNumber: number; // 인원 수
}

export interface ReviewData {
  order_item_id: number; // 주문상품 Id
  order_id: number; // 주문 id
  accomodation_id: number; // 숙소 id
  content: string; // 리뷰내용
  score: number; // 평점
}

export interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}
