import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';
import ReservationCard from './reservationCard';
import { getUser } from '@/api/service';
import { useState, useEffect } from 'react';

const ReservationList = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // 데이터 로딩 시작
      try {
        const res = await getUser();
        console.log(res.data);
      } catch (err) {
        console.log('에러');
      } finally {
        setIsLoading(false); // 데이터 로딩 완료
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
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
          height: '30vh',
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
