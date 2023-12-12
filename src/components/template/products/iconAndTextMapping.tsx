import {
  LuCar,
  LuSoup,
  LuBath,
  LuAirVent,
  LuTv,
  LuWifi,
  LuSofa,
  LuSatelliteDish,
  LuRefrigerator,
} from 'react-icons/lu';
import {
  MdOutlineSportsTennis,
  MdOutlineHotTub,
  MdOutlineDinnerDining,
  MdOutlineTableBar,
} from 'react-icons/md';
import { BsBagHeart } from 'react-icons/bs';
import {
  PiHeadlightsBold,
  PiDesktopBold,
  PiHandSoapBold,
} from 'react-icons/pi';

export const productsIconMapping: { [key: string]: JSX.Element } = {
  hasBeauty: <BsBagHeart />,
  hasCooking: <LuSoup />,
  hasSauna: <MdOutlineHotTub />,
  hasParking: <LuCar />,
  hasSports: <MdOutlineSportsTennis />,
};

export const productsTextMapping: { [key: string]: string } = {
  hasBeauty: '파우더 룸',
  hasCooking: '취사 가능',
  hasSauna: '사우나',
  hasParking: '주차 가능',
  hasSports: '스포츠 시설',
};

export const roomsIconMapping: { [key: string]: JSX.Element } = {
  canCook: <MdOutlineDinnerDining />,
  hasAirConditioner: <LuAirVent />,
  hasBath: <LuBath />,
  hasCable: <LuSatelliteDish />,
  hasHairDryer: <PiHeadlightsBold />,
  hasInternet: <LuWifi />,
  hasPc: <PiDesktopBold />,
  hasRefrigerator: <LuRefrigerator />,
  hasSofa: <LuSofa />,
  hasTv: <LuTv />,
  hasTable: <MdOutlineTableBar />,
  hasToiletries: <PiHandSoapBold />,
};

export const roomsTextMapping: { [key: string]: string } = {
  hasBath: '욕조',
  hasAirConditioner: '에어컨',
  hasTv: 'TV',
  hasPc: 'PC',
  hasCable: '케이블 TV',
  hasHairDryer: '헤어드라이어',
  hasInternet: '인터넷',
  hasRefrigerator: '냉장고',
  hasToiletries: '세면도구',
  hasSofa: '소파',
  hasTable: '테이블',
  canCook: '요리 가능',
};
