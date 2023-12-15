import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';
import ReservationCard from './reservationCard';
import { getUser } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Suspense } from 'react';
import { SkeletonCard } from './skeletonCard';
import DelayedFallback from './delayedFallback';

interface StyledReservationListProps {
  isFadingOut: boolean;
}

const itemsPerPage = 3;

const ReservationList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

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

  const handlerPageChange = (pageNumber: number) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsFadingOut(false);
    }, 300);
  };

  return (
    <StyledReservationList isFadingOut={isFadingOut}>
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
              minHeight: '200px',
            }}>
            <Suspense
              fallback={
                <DelayedFallback delay={200} fallback={<SkeletonCard />} />
              }>
              <ReservationCard data={order} />
            </Suspense>
          </div>
        ))}

        <PaginationContainer>
          {pageNumbers.map((number) => (
            <PageButton
              key={number}
              className={number === currentPage ? 'active' : ''}
              onClick={() => handlerPageChange(number)}>
              {number}
            </PageButton>
          ))}
        </PaginationContainer>
      </StyledWrapper>
    </StyledReservationList>
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

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const StyledReservationList = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isFadingOut'].includes(prop),
})<StyledReservationListProps>`
  // 스타일 정의
  animation: ${(props) => (props.isFadingOut ? fadeOut : fadeIn)} 300ms
    ease-in-out;
`;
