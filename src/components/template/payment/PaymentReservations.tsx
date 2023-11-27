import {
  StyledButton,
  StyledFlexContainer,
  StyledLabel,
  StyledSpacer,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';

const PaymentReservations = () => {
  return (
    <>
      <StyledSubTitle>예약 정보</StyledSubTitle>
      <StyledLabel>날짜</StyledLabel>
      <StyledFlexContainer>
        <StyledWrapper>
          <StyledText>포시즌스 호텔 서울 11.12 - 11.13</StyledText>
          <StyledText>시그니엘 서울 11.13 - 11.14</StyledText>
        </StyledWrapper>
        <StyledWrapper>
          <StyledButton>수정</StyledButton>
        </StyledWrapper>
      </StyledFlexContainer>

      <StyledSpacer $height="1rem" />

      <StyledLabel>게스트</StyledLabel>
      <StyledFlexContainer>
        <StyledWrapper>
          <StyledText>성인 2명</StyledText>
        </StyledWrapper>
        <StyledWrapper>
          <StyledButton>수정</StyledButton>
        </StyledWrapper>
      </StyledFlexContainer>
    </>
  );
};

export default PaymentReservations;
