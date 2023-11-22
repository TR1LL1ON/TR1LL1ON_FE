import {
  StyledFlexContainer,
  StyledImage,
  StyledImageContainer,
  StyledText,
} from '../../../style/payment/paymentStyle';

interface Props {
  type: string;
  name: string;
}

const PaymentRoomItem = ({ type, name }: Props) => {
  return (
    <StyledFlexContainer
      $justifyContent="flex-start"
      $alignItems="flex-start"
      $gap="0.5rem">
      <StyledImageContainer>
        <StyledImage />
      </StyledImageContainer>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledText $fontSize="0.7rem" $opacity={0.7}>
          {type}
        </StyledText>
        <StyledText>{name}</StyledText>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default PaymentRoomItem;
