import { Product } from '@/api/service';
import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { CATEGORY_CODE } from '@/constants';

interface Props {
  productData: Product;
}

const PaymentRoomItem = ({ productData }: Props) => {
  const { roomName, imageUrl, category } = productData;

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
          {CATEGORY_CODE[category]}
        </StyledText>
        <StyledText>{roomName}</StyledText>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default PaymentRoomItem;
