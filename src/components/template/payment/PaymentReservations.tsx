import useFilteredReservation from '@/hooks/useFilteredReservation';

import {
  StyledFlexContainer,
  StyledLabel,
  StyledSpacer,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';

const PaymentReservations = () => {
  const { filteredRooms } = useFilteredReservation();

  return (
    <>
      <StyledSubTitle>예약 정보</StyledSubTitle>
      <StyledLabel>날짜</StyledLabel>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="start"
        $gap="0.5rem">
        {filteredRooms?.map((room, index) => (
          <StyledWrapper key={`${room.productId}-${index}`}>
            <StyledFlexContainer $flexDirection="column" $alignItems="start">
              <StyledText $fontWeight={600}>
                {room.checkIn} - {room.checkOut}
              </StyledText>
              <StyledText>{room.accommodationName}</StyledText>
            </StyledFlexContainer>
          </StyledWrapper>
        ))}
      </StyledFlexContainer>

      <StyledSpacer $height="1rem" />

      <StyledLabel>게스트</StyledLabel>
      {filteredRooms?.map((room, index) => (
        <StyledFlexContainer key={`${room.productId}-${index}`}>
          <StyledWrapper>
            <StyledText>{room.personNumber} 명</StyledText>
          </StyledWrapper>
        </StyledFlexContainer>
      ))}
    </>
  );
};

export default PaymentReservations;
