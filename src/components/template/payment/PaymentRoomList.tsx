import { SummaryData } from '@/api/service';
import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import PaymentRoomItem from './PaymentRoomItem';

interface Props {
  reservationData: SummaryData | undefined;
}

const PaymentRoomList = ({ reservationData }: Props) => {
  return (
    <>
      <StyledSubTitle>숙소 정보</StyledSubTitle>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        {reservationData?.products.map((reservation, index) => (
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
