import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';
import ReservationCard from './reservationCard';
import { getUser } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import { useState, useTransition } from 'react';
import styled from 'styled-components';
import { Suspense } from 'react';
import { SkeletonCard } from './skeletonCard';

const itemsPerPage = 3; // 예를 들어, 페이지당 5개의 아이템

const ReservationList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: reservationData = [] } = useQuery({
    queryKey: ['ReservationData'],
    queryFn: () => getUser(),
    staleTime: 60000,
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reservationData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(reservationData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [isPending, startTransition] = useTransition();
  const [timeoutReached, setTimeoutReached] = useState<boolean>(false);

  const handlePageChange = (newPage: number) => {
    setTimeoutReached(false); // 타임아웃 상태 초기화
    let timeoutId: NodeJS.Timeout;

    startTransition(() => {
      setCurrentPage(newPage);

      // 3초 타이머 설정
      timeoutId = setTimeout(() => {
        setTimeoutReached(true); // 3초 후에 상태 변경
      }, 3000);
    });

    return () => {
      clearTimeout(timeoutId); // 컴포넌트 정리 시 타이머 제거
    };
  };

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
          height: '100vh',
        }}>
        {currentItems.map((order) => (
          <div
            key={order.orderId}
            style={{
              boxSizing: 'border-box',
            }}>
            <Suspense fallback={<SkeletonCard />}>
              <ReservationCard data={order} />
            </Suspense>
          </div>
        ))}

        <PaginationContainer>
          {pageNumbers.map((number) => (
            <PageButton
              key={number}
              className={number === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(number)}>
              {number}
            </PageButton>
          ))}
        </PaginationContainer>
      </StyledWrapper>
    </>
  );
};

export default ReservationList;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const PageButton = styled.button`
  border: none;
  background-color: #f0f0f0;
  margin: 0 5px;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }

  &.active {
    background-color: #de2f5f;
    color: white;
  }
`;
