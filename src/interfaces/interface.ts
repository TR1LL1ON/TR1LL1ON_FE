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

export interface AccommodationImage {
  image_url: string;
}

export interface Facility {
  can_cook?: boolean;
  has_air_conditioner?: boolean;
  has_bath?: boolean;
  has_cable?: boolean;
  has_hair_dryer?: boolean;
  has_internet?: boolean;
  has_pc?: boolean;
  has_refrigerator?: boolean;
  has_sofa?: boolean;
  has_tv?: boolean;
  has_table?: boolean;
  has_toiletries?: boolean;
  has_parking?: boolean;
  has_cooking?: boolean;
  has_sports?: boolean;
  has_sauna?: boolean;
  has_beauty?: boolean;
}

export interface Room {
  room_id: number;
  room_name: string;
  check_in: string;
  check_out: string;
  count: number;
  aver_price: number;
  total_price: number;
  max_number: number;
  standard_number: number;
  sold: boolean;
  facility: Facility;
  image: { image_url: string }[];
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
  name: string;
  address: string;
  address_code: string;
  category: string;
  check_in: string;
  check_out: string;
  person_number: number;
  score: number;
  image: AccommodationImage[];
  rooms: Room[];
  facility: Facility;
  latitude: string;
  longitude: string;
  /*   breakfest: boolean;
  cooking: boolean;
  parking: boolean;
  party: boolean;
  swimming_pool: boolean; */
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
