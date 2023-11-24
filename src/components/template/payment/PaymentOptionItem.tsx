import { paymentOption } from '../../../constants';
import {
  KakaoPayLogo,
  NaverPayLogo,
  MastercardLogo,
  StyledDropdownItem,
  StyledText,
  StyledImageContainer,
} from '../../../style/payment/paymentStyle';
import { useRecoilState } from 'recoil';
import { orderState } from '../../../states/atom';

export type PaymentOptionType = 'kakaopay' | 'naverpay' | 'card' | 'cash';

interface Props {
  type: PaymentOptionType;
}

export const getPayLogo = (type: PaymentOptionType) => {
  switch (type) {
    case 'kakaopay':
      return <KakaoPayLogo />;
    case 'naverpay':
      return <NaverPayLogo />;
    case 'card':
      return <MastercardLogo />;
    case 'cash':
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
