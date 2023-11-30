import { StyledSubTitle, StyledWrapper } from '@/style/payment/paymentStyle';
import ReservationCard from './reservationCard';
import { Reservation } from '@/interfaces/interface';
import { getUser, postReviews } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

const ReservationList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 예를 들어, 페이지당 5개의 아이템

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ReservationData'],
    queryFn: () => getUser(),
  });

  const ReservationData: Reservation[] = data?.data || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ReservationData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ReservationData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
          height: '100vh',
        }}>
        {currentItems.map((order) => (
          <div
            key={order.orderId}
            style={{
              boxSizing: 'border-box',
              padding: '1rem',
            }}>
            <ReservationCard data={order} />
          </div>
        ))}
        <PaginationContainer>
          {pageNumbers.map((number) => (
            <PageButton
              key={number}
              className={number === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(number)}>
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
