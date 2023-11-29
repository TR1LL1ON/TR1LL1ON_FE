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
  has_beauty: <BsBagHeart />,
  has_cooking: <LuSoup />,
  has_sauna: <MdOutlineHotTub />,
  has_parking: <LuCar />,
  has_sports: <MdOutlineSportsTennis />,
};

export const productsTextMapping: { [key: string]: string } = {
  has_beauty: '파우더 룸',
  has_cooking: '취사 가능',
  has_sauna: '사우나',
  has_parking: '주차 가능',
  has_sports: '스포츠 시설',
};

export const roomsIconMapping: { [key: string]: JSX.Element } = {
  can_cook: <MdOutlineDinnerDining />,
  has_air_conditioner: <LuAirVent />,
  has_bath: <LuBath />,
  has_cable: <LuSatelliteDish />,
  has_hair_dryer: <PiHeadlightsBold />,
  has_internet: <LuWifi />,
  has_pc: <PiDesktopBold />,
  has_refrigerator: <LuRefrigerator />,
  has_sofa: <LuSofa />,
  has_tv: <LuTv />,
  has_table: <MdOutlineTableBar />,
  has_toiletries: <PiHandSoapBold />,
};

export const roomsTextMapping: { [key: string]: string } = {
  has_bath: '욕조',
  has_air_conditioner: '에어컨',
  has_tv: 'TV',
  has_pc: 'PC',
  has_cable: '케이블 TV',
  has_hair_dryer: '헤어드라이어',

  has_internet: '인터넷',
  has_refrigerator: '냉장고',
  has_toiletries: '세면도구',
  has_sofa: '소파',
  has_table: '테이블',
  can_cook: '요리 가능',
};

// 숙박 편의시설 조식/파티/수영장 사용 여부에 따라 이후 삭제
// import { LuCar, LuPartyPopper, LuSoup, LuUtensils } from 'react-icons/lu';
// import { FaSwimmingPool } from 'react-icons/fa';
// import { TbPig } from 'react-icons/tb';

// has_breakfast: <LuUtensils />,
// party: <LuPartyPopper />,
// has_swimming_pool: <FaSwimmingPool />,

// breakfast: '조식 제공',
// party: '파티',
// swimming_pool: '수영장',
