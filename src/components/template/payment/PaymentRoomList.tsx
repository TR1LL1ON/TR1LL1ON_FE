import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import PaymentRoomItem from './PaymentRoomItem';
import { Cart } from '@/interfaces/interface';

interface Props {
  reservationData: Cart[] | undefined;
}

const PaymentRoomList = ({ reservationData }: Props) => {
  return (
    <>
      <StyledSubTitle>숙소 정보</StyledSubTitle>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        {reservationData?.map((reservation, index) => (
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
