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
  orderID?: number;
  orderDetailData?: string[];
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

export interface ReviewData {
  review: Review[];
  order_id: number; // 주문 id
  accomodation_id: number; // 숙소 id
}

export interface Review {
  order_item_id: number;
  score: number;
  content: string;
}

export interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

export interface AccommodationImage {
  imageUrl: string;
}

export interface Facility {
  canCook?: boolean;
  hasAiConditioner?: boolean;
  hasBath?: boolean;
  hasCable?: boolean;
  hasHairDryer?: boolean;
  hasInternet?: boolean;
  hasPc?: boolean;
  hasRefrigerator?: boolean;
  hasSofa?: boolean;
  hasTv?: boolean;
  hasTable?: boolean;
  hasToiletries?: boolean;
  hasParking?: boolean;
  hasCooking?: boolean;
  hasSports?: boolean;
  hasSauna?: boolean;
  hasBeauty?: boolean;
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
  accommodationName: string;
  accommodationAddress: string;
  accommodationCategory: string;
  productId: number;
  productName: string;
  checkIn: string;
  checkOut: string;
  personNumber: number;
  price: number;
  imageUrl: string;
}

export interface Reservation {
  accommodationImages: string[];
  accommodationNames: string[];
  productNames: string[];
  orderId: number;
  orderCreateDate: string;
  payment: string;
  totalPrice: number;
}

export interface ReservationDetail {
  checkIn: string;
  checkOut: string;
  orderItemDetail: {
    accommodationAddress: string;
    accommodationName: string;
    productImage: string;
    productName: string;
  };
  orderItemId: number;
  personNumber: number;
  price: number;
  productId: number;
  reviewWritten: boolean;
}
