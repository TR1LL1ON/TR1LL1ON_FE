import { paymentOption } from '@/constants';
import {
  KakaoPayLogo,
  NaverPayLogo,
  MastercardLogo,
  StyledDropdownItem,
  StyledText,
  StyledImageContainer,
} from '@/style/payment/paymentStyle';
import { useRecoilState } from 'recoil';
import { orderState } from '../../../states/atom';

export type PaymentOptionType = 'KAKAOPAY' | 'NAVERPAY' | 'CARD' | 'CASH';

interface Props {
  type: PaymentOptionType;
}

export const getPayLogo = (type: PaymentOptionType) => {
  switch (type) {
    case 'KAKAOPAY':
      return <KakaoPayLogo />;
    case 'NAVERPAY':
      return <NaverPayLogo />;
    case 'CARD':
      return <MastercardLogo />;
    case 'CASH':
      return;
  }
};

const PaymentOptionItem = ({ type }: Props) => {
  const [payment, setPayment] = useRecoilState(orderState);

  return (
    <StyledDropdownItem
      onClick={() => setPayment({ ...payment, payment: type })}
      tabIndex={0}>
      <StyledImageContainer $w="2.5rem" $h="2rem">
        {getPayLogo(type)}
      </StyledImageContainer>
      <StyledText>{paymentOption[type]}</StyledText>
    </StyledDropdownItem>
  );
};

export default PaymentOptionItem;
