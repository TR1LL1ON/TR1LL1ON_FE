import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getUserDetail, getReviews } from '@/api/service';
import {
  StyledSubTitle,
  StyledText,
  StyledFlexContainer,
  StyledImageContainer,
  StyledHLine,
  StyledButton,
} from '@/style/payment/paymentStyle';
import { ReservationDetail } from '@/interfaces/interface';
import ReviewWriteModal from './reviewWriteModal';

interface OrderDetailsAccordionProps {
  isOpen: boolean;
  orderID: number;
}

const ReservationAccordion: React.FC<OrderDetailsAccordionProps> = ({
  isOpen,
  orderID,
}) => {
  const {
    data: reservationData, // 쿼리의 결과 데이터. 'reservationData'로 이름이 재정의되었습니다.
    isLoading: isReservationLoading, // 쿼리가 로딩 중인지 여부를 나타내는 플래그.
    isError: isReservationError, // 쿼리가 에러를 반환했는지 여부를 나타내는 플래그.
  } = useQuery({
    queryKey: ['ReservationDetailData', orderID], // 쿼리 키. 'ReservationDetailData'와 orderID를 포함합니다. 이 배열은 쿼리의 고유 식별자 역할을 합니다.
    queryFn: () => getUserDetail(orderID as number), // 쿼리 함수. orderID를 사용하여 getUserDetail 함수를 호출합니다. 이 함수는 비동기적으로 데이터를 가져옵니다.
    enabled: orderID !== undefined, // 쿼리 활성화 상태. orderID가 undefined가 아닐 경우에만 쿼리가 실행됩니다.
  });

  // const {
  //   data: reviewsData, // 쿼리의 결과 데이터. 'reviewsData'로 이름이 재정의되었습니다.
  //   isLoading: isReviewsLoading, // 쿼리가 로딩 중인지 여부를 나타내는 플래그.
  //   isError: isReviewsError, // 쿼리가 에러를 반환했는지 여부를 나타내는 플래그.
  // } = useQuery({
  //   queryKey: ['reviews'], // 쿼리 키. 'reviews'를 포함합니다. 이 키는 쿼리의 고유 식별자 역할을 합니다.
  //   queryFn: getReviews, // 쿼리 함수. getReviews 함수는 비동기적으로 데이터를 가져옵니다.
  // });

  // console.log('리뷰데이터:', reviewsData?.data);

  const orderDetailData = reservationData?.data.orderItemList;

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );

  const handleReviewWriteModal = (index: number) => {
    setSelectedItemIndex(index);
  };

  // if (isReviewsLoading) {
  //   return <div>Loading reviews...</div>;
  // }

  // if (isReviewsError) {
  //   return <div>Error loading reviews</div>;
  // }

  if (isReservationLoading) {
    return <div>Loading...</div>;
  }

  if (isReservationError) {
    return <div>상세내역 불러오기 실패</div>;
  }

  return (
    <AccordionContainer>
      <AccordionContent className={isOpen ? 'active' : ''}>
        <StyledSubTitle>상세조회</StyledSubTitle>

        {orderDetailData.map((item: ReservationDetail, index: number) => (
          <div key={item.orderItemId}>
            <StyledFlexContainer
              style={{
                width: '100%',
                padding: '15px 0',
              }}
              $alignItems="flex-start"
              $gap="0.75rem">
              <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
                <img
                  src={`${item.orderItemDetail.productImage}`}
                  style={{
                    width: '124px',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                  }}
                />
              </StyledImageContainer>
              <StyledFlexContainer
                style={{ width: '100%', height: '100%' }}
                $flexDirection="column"
                $alignItems="flex-start">
                <StyledText $fontSize="0.75rem" $opacity={0.7}>
                  호텔
                </StyledText>
                <StyledFlexContainer style={{ width: '100%' }}>
                  <StyledText $fontWeight={700}>
                    {item.orderItemDetail.accommodationName}
                  </StyledText>
                  <StyledButton
                    onClick={() => handleReviewWriteModal(index)}
                    style={{ color: item.reviewWritten ? 'green' : 'red' }}>
                    {item.reviewWritten ? '리뷰수정' : '리뷰작성'}
                  </StyledButton>
                </StyledFlexContainer>
                <StyledText $fontSize="0.75rem">
                  {item.orderItemDetail.accommodationAddress}
                </StyledText>
                <StyledText $fontSize="0.75rem">
                  {item.orderItemDetail.productName} | {item.personNumber}인
                </StyledText>

                <StyledFlexContainer style={{ width: '100%' }}>
                  <StyledText $fontSize="0.75rem">
                    {item.checkIn} ~ {item.checkOut}
                  </StyledText>
                  <StyledText $fontSize="1rem" $fontWeight={700}>
                    {item.price.toLocaleString()}원
                  </StyledText>
                </StyledFlexContainer>
              </StyledFlexContainer>
            </StyledFlexContainer>
            {selectedItemIndex === index && (
              <ReviewWriteModal
                setShowModal={() => setSelectedItemIndex(null)}
                orderDetailData={orderDetailData[index]}
              />
            )}
            <StyledHLine />
          </div>
        ))}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default ReservationAccordion;

const AccordionContainer = styled.div`
  border-radius: 5px;
  margin: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const AccordionContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
  padding: 0 1rem;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease;

  &.active {
    padding: 1rem;
    max-height: 1000px;
  }
`;
