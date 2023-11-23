import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
} from '../../../style/payment/paymentStyle';

const CartDetail = () => {
  return (
    <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
      <StyledSubTitle $mt="0" $mb="0">
        요금 세부정보
      </StyledSubTitle>
      <StyledFlexContainer
        style={{ width: '100%' }}
        $flexDirection="column"
        $alignItems="flex-start">
        <StyledFlexContainer style={{ width: '100%', padding: '10px 0' }}>
          <StyledText>180,000 x 1박 - OO펜션</StyledText>
          <StyledText>180,000원</StyledText>
        </StyledFlexContainer>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText>180,000 x 1박 - OO펜션</StyledText>
          <StyledText>180,000원</StyledText>
        </StyledFlexContainer>
      </StyledFlexContainer>
      <StyledHLine $mBlock="1rem" />
      <StyledFlexContainer style={{ width: '100%' }}>
        <StyledSubTitle $mt="0">총합계</StyledSubTitle>
        <StyledSubTitle $mt="0">360,000원</StyledSubTitle>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default CartDetail;
