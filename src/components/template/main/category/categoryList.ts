import { LuHotel } from 'react-icons/lu';
import { LiaHotelSolid } from 'react-icons/lia';
import { RiHotelLine, RiHotelFill } from 'react-icons/ri';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { BiHotel } from 'react-icons/bi';
import { TbHomeStar, TbHomeInfinity, TbBrandGoogleHome } from 'react-icons/tb';
import { HiOutlineHomeModern } from 'react-icons/hi2';

export interface Category {
  code: string;
  name: string;
  rnum: number;
}

export interface CategoryIcon {
  [key: string]: any;
}

export const categoryList: Category[] = [
  {
    code: 'B02010100',
    name: '관광호텔',
    rnum: 1,
  },
  {
    code: 'B02010500',
    name: '콘도미니엄',
    rnum: 2,
  },
  {
    code: 'B02010600',
    name: '유스호스텔',
    rnum: 3,
  },
  {
    code: 'B02010700',
    name: '펜션',
    rnum: 4,
  },
  {
    code: 'B02010900',
    name: '모텔',
    rnum: 5,
  },
  {
    code: 'B02011000',
    name: '민박',
    rnum: 6,
  },
  {
    code: 'B02011100',
    name: '게스트하우스',
    rnum: 7,
  },
  {
    code: 'B02011200',
    name: '홈스테이',
    rnum: 8,
  },
  {
    code: 'B02011300',
    name: '서비스드레지던스',
    rnum: 9,
  },
  {
    code: 'B02011600',
    name: '한옥',
    rnum: 10,
  },
];

export const iconMap: CategoryIcon = {
  B02010100: LuHotel,
  B02010500: LiaHotelSolid,
  B02010600: RiHotelLine,
  B02010700: HiOutlineHomeModern,
  B02010900: RiHotelFill,
  B02011000: BiHotel,
  B02011100: MdOutlineBedroomParent,
  B02011200: TbHomeInfinity,
  B02011300: TbHomeStar,
  B02011600: TbBrandGoogleHome,
};
