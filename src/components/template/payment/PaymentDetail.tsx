import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
  StyledText,
} from '@/style/payment/paymentStyle';
import { Cart } from '@/interfaces/interface';
import { calculateNights } from './utils';

const PaymentDetail = ({ filteredRooms }: { filteredRooms: Cart[] }) => {
  const totalPrice = filteredRooms.reduce(
    (acc, cur) => acc + cur.price * calculateNights(cur.checkIn, cur.checkOut),
    0,
  );

  return (
    <>
      <StyledSubTitle>요금 세부정보</StyledSubTitle>
      {filteredRooms.map((room) => (
        <StyledFlexContainer
          key={`${room.productId}-${room.accommodationCategory}`}>
          <StyledText>
            ₩{room.price.toLocaleString()} x{' '}
            {calculateNights(room.checkIn, room.checkOut)} - {room.productName}
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
