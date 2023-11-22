import { Dispatch, SetStateAction } from 'react';
import { paymentOption } from '../../../constants';
import {
  KakaoPayLogo,
  NaverPayLogo,
  MastercardLogo,
  StyledDropdownItem,
  StyledText,
  StyledImageContainer,
} from '../../../style/payment/paymentStyle';

export type PaymentOptionType = 'kakaopay' | 'naverpay' | 'card' | 'cash';

interface Props {
  type: PaymentOptionType;
  setSelectedOption: Dispatch<SetStateAction<PaymentOptionType>>;
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

const PaymentOptionItem = ({ type, setSelectedOption }: Props) => {
  return (
    <StyledDropdownItem onClick={() => setSelectedOption(type)}>
      <StyledImageContainer $w="2.5rem" $h="2rem">
        {getPayLogo(type)}
      </StyledImageContainer>
      <StyledText>{paymentOption[type]}</StyledText>
    </StyledDropdownItem>
  );
};

export default PaymentOptionItem;
