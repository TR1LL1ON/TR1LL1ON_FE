import { Cart } from '@/interfaces/interface';
import {
  StyledFlexContainer,
  StyledLabel,
  StyledSpacer,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';
import { calculateNights } from './utils';

const PaymentReservations = ({ filteredRooms }: { filteredRooms: Cart[] }) => {
  if (filteredRooms.length === 0) {
    return <div>예약 정보가 없습니다.</div>;
  }

  return (
    <>
      <StyledSubTitle>예약 정보</StyledSubTitle>
      <StyledLabel>날짜</StyledLabel>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="start"
        $gap="0.5rem">
        {filteredRooms.map((room, index) => (
          <StyledWrapper key={`${room.productId}-${index}`}>
            <StyledFlexContainer $flexDirection="column" $alignItems="start">
              <StyledText $fontWeight={600}>
                {room.checkIn} - {room.checkOut} (
                {calculateNights(room.checkIn, room.checkOut)}박)
              </StyledText>
              <StyledText>{room.accommodationName}</StyledText>
            </StyledFlexContainer>
          </StyledWrapper>
        ))}
      </StyledFlexContainer>

      <StyledSpacer $height="1rem" />

      <StyledLabel>게스트</StyledLabel>
      {filteredRooms.map((room, index) => (
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
