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
  checkIn: string;
  checkOut: string;
  personNumber: number;
  productId: number;
  cartId?: number;
}

export interface OrderRequest {
  orders: Order[];
  payment: 'CARD' | 'KAKAOPAY' | 'NAVERPAY' | 'CASH';
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

export interface AccommodationFacility {
  hasBeauty: boolean;
  hasCooking: boolean;
  hasSauna: boolean;
  hasParking: boolean;
  hasSports: boolean;
}

export interface RoomFacility {
  canCook: boolean;
  hasAirConditioner: boolean;
  hasBath: boolean;
  hasCable: boolean;
  hasHairDryer: boolean;
  hasInternet: boolean;
  hasPC: boolean;
  hasRefrigerator: boolean;
  hasSofa: boolean;
  hasTV: boolean;
  hasTable: boolean;
  hasToiletries: boolean;
}

export interface Room {
  averPrice: number;
  checkIn: string;
  checkOut: string;
  count: number;
  facility: RoomFacility;
  image: AccommodationImage[];
  maxNumber: number;
  roomId: number;
  roomName: string;
  sold: boolean;
  standardNumber: number;
  totalPrice: number;
}

export interface AccommodationData {
  accommodationId: number;
  address: string;
  areaCode: string;
  category: string;
  checkIn: string;
  checkOut: string;
  facility: AccommodationFacility;
  image: AccommodationImage[];
  latitude: string;
  longitude: string;
  name: string;
  personNumber: number;
  phone: string;
  rooms: Room[];
  score: number;
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
