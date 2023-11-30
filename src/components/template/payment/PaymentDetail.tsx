import useFilteredReservation from '@/hooks/useFilteredReservation';
import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
} from '@/style/payment/paymentStyle';

const PaymentDetail = () => {
  const { filteredRooms } = useFilteredReservation();
  const totalPrice = filteredRooms?.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <>
      <StyledSubTitle>요금 세부정보</StyledSubTitle>
      {filteredRooms?.map((room) => (
        <StyledFlexContainer
          key={`${room.productId}-${room.accommodationCategory}`}>
          <StyledText>
            ₩{room.price.toLocaleString()} - {room.productName}
          </StyledText>
        </StyledFlexContainer>
      ))}

      <StyledHLine $mBlock="1rem" />
      <StyledFlexContainer>
        <StyledText $fontSize="1.25rem" $fontWeight={600}>
          총 합계
        </StyledText>
        <StyledText $fontSize="1.25rem" $fontWeight={600}>
          {`₩${totalPrice?.toLocaleString()}`}
        </StyledText>
      </StyledFlexContainer>
    </>
  );
};

export default PaymentDetail;
