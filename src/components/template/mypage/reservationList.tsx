import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';
import ReservationCard from './reservationCard';
import { Reservation } from '@/interfaces/interface';
import { getUser } from '@/api/service';
import { useQuery } from '@tanstack/react-query';

const ReservationList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ReservationData'],
    queryFn: () => getUser(),
  });
  console.log();
  const ReservationData: Reservation[] = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
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
          height: '50vh',
        }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          {ReservationData.map((order) => (
            <div
              key={order.orderId}
              style={{
                minWidth: '33%', // 한 줄에 4개의 카드가 오도록 너비 설정
                boxSizing: 'border-box', // 패딩과 테두리를 너비에 포함
                padding: '10px', // 카드 사이의 간격 조정
              }}>
              <ReservationCard key={order.orderId} data={order} />
            </div>
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

export default ReservationList;
