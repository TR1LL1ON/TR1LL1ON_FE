import { StyledDeleteButton } from '@/style/cart/cartStyle';
import {
  StyledCheckboxInput,
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';

const CartCard = () => {
  return (
    <StyledFlexContainer
      style={{
        width: '100%',
        padding: '15px 0',
      }}
      $alignItems="flex-start"
      $gap="0.75rem">
      <StyledWrapper style={{ width: 'auto', height: '24px' }}>
        <StyledCheckboxInput type="checkbox" />
      </StyledWrapper>
      <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
        <img
          src="https://source.unsplash.com/random"
          style={{
            width: '124px',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </StyledImageContainer>

      <StyledFlexContainer
        style={{ width: '100%', height: '100%' }}
        $flexDirection="column"
        $alignItems="flex-start">
        <StyledText $fontSize="0.75rem" $opacity={0.7}>
          호텔
        </StyledText>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText $fontWeight={700}>리한셀렉트 경주</StyledText>
          <StyledDeleteButton>삭제</StyledDeleteButton>
        </StyledFlexContainer>
        <StyledText $fontSize="0.75rem">더블 스탠다드룸 | 2인</StyledText>
        <StyledText $fontSize="0.75rem">경상북도 경주시 보문로 338</StyledText>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText $fontSize="0.75rem">11.12 - 11.13 1박</StyledText>
          <StyledText $fontSize="1rem" $fontWeight={700}>
            100,000원
          </StyledText>
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default CartCard;
