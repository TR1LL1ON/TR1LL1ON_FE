import {
  StyledSubTitle,
  StyledWrapper,
} from '../../../style/payment/paymentStyle';

import ReservationCard from './reservationCard';

const ReservationList = () => {
  return (
    <>
      <StyledSubTitle
        $mt="2rem"
        style={{ paddingInline: '5rem', fontSize: '1.2rem' }}>
        예약내역
      </StyledSubTitle>
      <StyledWrapper
        style={{
          paddingInline: '5rem',
          fontFamily:
            'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
          overflowY: 'auto',
          height: '40vh',
        }}>
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
        <ReservationCard />
      </StyledWrapper>
    </>
  );
};

export default ReservationList;
