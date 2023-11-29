export interface JoinData {
  id: string;
  password: string;
  name: string;
  phone: number;
}

export interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  roomData?: Room;
  imageUrls?: string[];
}

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
  totals: number;
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
  payment: 'CARD' | 'KAKAOPAY' | 'NAVERPAY' | 'CASH';
  total_price: number;
}

// 변수명 명시적으로 바꿔야함
export interface AccommodationData {
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

export interface AccommodationImage {
  image_url: string;
}

export interface Facility {
  canCook: boolean;
  hasAirConditioner: boolean;
  hasBath: boolean;
  hasCable: boolean;
  hasHair_dryer: boolean;
  hasInternet: boolean;
  hasPc: boolean;
  hasRefrigerator: boolean;
  hasSofa: boolean;
  hasTv: boolean;
  hasTable: boolean;
  hasToiletries: boolean;
}

export interface Room {
  roomId: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  count: number;
  averPrice: number;
  totalPrice: number;
  maxNumber: number;
  standardNumber: number;
  sold: boolean;
  facility: Facility;
  image: { imageUrl: string }[];
}

// export interface Room {
//   room_id: number;
//   room_name: string;
//   check_in: string;
//   check_out: string;
//   count: number;
//   // Add other properties of the room here if needed
// }

export interface AccommodationData {
  accomodation_id: string;
  address: string;
  address_code: string;
  breakfest: boolean;
  category: string;
  check_in: string;
  check_out: string;
  cooking: boolean;
  image: AccommodationImage[];
  latitude: string;
  longitude: string;
  name: string;
  parking: boolean;
  party: boolean;
  person_number: number;
  rooms: Room[];
  score: number;
  swimming_pool: boolean;
}

export interface AccommodationResponse {
  accomodationID: string;
  accomodationData: AccommodationData;
}

export interface Cart {
  cartItemId: number;
  accommodationId: number;
  accomodationName: string;
  accomodationAddress: string;
  accomodationCategory: string;
  productId: number;
  productName: string;
  checkIn: string;
  checkOut: string;
  personNumber: number;
  price: number;
}
