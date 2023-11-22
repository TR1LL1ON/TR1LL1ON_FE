import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
} from '../../../style/payment/paymentStyle';

const PaymentDetail = () => {
  return (
    <>
      <StyledSubTitle>요금 세부정보</StyledSubTitle>
      <StyledFlexContainer>
        <StyledText>180,000 x 1박 - 포시즌스 호텔 서울</StyledText>
        <StyledText>180,000원</StyledText>
      </StyledFlexContainer>
      <StyledFlexContainer>
        <StyledText>200,000 x 1박 - 시그니엘 서울</StyledText>
        <StyledText>200,000원</StyledText>
      </StyledFlexContainer>
      <StyledHLine $mBlock="1rem" />
      <StyledFlexContainer>
        <StyledText $fontSize="1.25rem" $fontWeight={600}>
          총 합계
        </StyledText>
        <StyledText $fontSize="1.25rem" $fontWeight={600}>
          380,000원
        </StyledText>
      </StyledFlexContainer>
    </>
  );
};

export default PaymentDetail;
