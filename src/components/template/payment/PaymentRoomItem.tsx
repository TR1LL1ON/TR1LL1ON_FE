import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { CATEGORY_CODE } from '@/constants';
import { Cart } from '@/interfaces/interface';

interface Props {
  productData: Cart;
}

const PaymentRoomItem = ({ productData }: Props) => {
  const { imageUrl, accommodationCategory, productName } = productData;

  return (
    <StyledFlexContainer
      $justifyContent="flex-start"
      $alignItems="flex-start"
      $gap="0.5rem">
      <StyledImageContainer>
        <img src={imageUrl} />
      </StyledImageContainer>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledText $fontSize="0.7rem" $opacity={0.7}>
          {CATEGORY_CODE[accommodationCategory]}
        </StyledText>
        <StyledText>{productName}</StyledText>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default PaymentRoomItem;
