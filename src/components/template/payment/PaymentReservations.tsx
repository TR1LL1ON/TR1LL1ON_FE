import useReservations from '@/hooks/useReservations';
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
  // recoil로 받아온 ids
  // const accommodationIds = ['1', '2'];
  const reservations = useReservations(['1', '2']);

  return (
    <>
      <StyledSubTitle>예약 정보</StyledSubTitle>
      <StyledLabel>날짜</StyledLabel>
      <StyledFlexContainer>
        <StyledWrapper>
          {reservations.map((reservation, index) => {
            const { data, isLoading, error } = reservation;

            if (isLoading) {
              return <div key={index}>Loading...</div>;
            }
            if (error) {
              return <div key={index}>Error: {error.message}</div>;
            }
            return (
              <StyledFlexContainer $gap="0.5rem" key={index}>
                <StyledText>{data?.accomodationData.name}</StyledText>
                <StyledText $fontWeight={600}>
                  {data?.accomodationData.check_in} -{' '}
                  {data?.accomodationData.check_out}
                </StyledText>
              </StyledFlexContainer>
            );
          })}
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
