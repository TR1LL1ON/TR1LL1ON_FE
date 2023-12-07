export interface mainData {
  accommodationId: number;
  address: string;
  areaCode: string;
  imageUrl: string;
  name: string;
  price: number;
  score: number;
}

export interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  roomData?: Room;
  imageUrls?: string[];
  orderID?: number;
  ProductReview?: ProductReview[] | undefined;
  name?: string;
  orderDetailData?: ReservationDetail;
  infoData?: AccommodationData;
}

export interface OrderDetailsAccordionProps {
  isOpen: boolean;
  orderID: number;
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

export interface ReviewDetail {
  reviewId: string;
  reviewDate: string;
  score: number;
  content: string;
  orderItemId: number;
  accommodationDetails: {
    accommodationId: number;
    accommodationName: string;
  };
  productDetails: {
    productId: number;
    productImage: string;
    productName: string;
  };
}

export interface ReviewMutationParams {
  reviewId?: string;
  content: string;
  score: number;
}

// 객실 리뷰
export interface ProductReview {
  reviewId: number;
  reviewDate: string;
  score: number;
  userId: number;
  productId: number;
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
  accommodation: {
    accommodationImages: string[];
    accommodationNames: string[];
    productNames: string[];
  };
  orderCreateDate: string;
  orderId: number;
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

export interface Position {
  latitude: number;
  longitude: number;
}
