import { AccommodationData } from '@/interfaces/interface';
import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';

interface Props {
  accommodationData: AccommodationData;
}

const PaymentRoomItem = ({ accommodationData }: Props) => {
  const { name, category } = accommodationData;

  return (
    <StyledFlexContainer
      $justifyContent="flex-start"
      $alignItems="flex-start"
      $gap="0.5rem">
      <StyledImageContainer>
        <img src={accommodationData.image[0].imageUrl} />
      </StyledImageContainer>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledText $fontSize="0.7rem" $opacity={0.7}>
          {category}
        </StyledText>
        <StyledText>{name}</StyledText>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default PaymentRoomItem;
