import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import PaymentRoomItem from './PaymentRoomItem';
import useReservations from '@/hooks/useReservations';

const PaymentRoomList = () => {
  const reservations = useReservations(['1', '2']);

  return (
    <>
      <StyledSubTitle>숙소 정보</StyledSubTitle>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        {reservations.map((reservation, index) => {
          const { data, isLoading, error } = reservation;

          if (isLoading || !data) {
            return <div key={index}>Loading...</div>;
          }
          if (error) {
            return <div key={index}>Error: {error.message}</div>;
          }
          return (
            <PaymentRoomItem
              key={`index-${data.accommodationId}`}
              accommodationData={data}
            />
          );
        })}
      </StyledFlexContainer>
    </>
  );
};

export default PaymentRoomList;
