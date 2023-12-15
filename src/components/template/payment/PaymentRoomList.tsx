import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import PaymentRoomItem from './PaymentRoomItem';
import { Cart } from '@/interfaces/interface';

const PaymentRoomList = ({ filteredRooms }: { filteredRooms: Cart[] }) => {
  if (filteredRooms?.length === 0) {
    return <div>예약 정보가 없습니다.</div>;
  }

  return (
    <>
      <StyledSubTitle>숙소 정보</StyledSubTitle>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        {filteredRooms?.map((reservation, index) => (
          <PaymentRoomItem
            key={`${index}-${reservation.accommodationName}`}
            productData={reservation}
          />
        ))}
      </StyledFlexContainer>
    </>
  );
};

export default PaymentRoomList;
