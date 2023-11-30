import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getUserDetail } from '@/api/service';
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
  const [showReviewWriteModal, setShowReviewWriteModal] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ReservationDetailData', orderID],
    queryFn: () => getUserDetail(orderID as number),
    enabled: orderID !== undefined,
  });

  const orderDetailData = data?.data.orderItemList;

  console.log(data?.data);
  const handleReviewWriteModal = () => {
    setShowReviewWriteModal(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>상세내역 불러오기 실패</div>;
  }

  return (
    <AccordionContainer>
      <AccordionContent className={isOpen ? 'active' : ''}>
        <StyledSubTitle>상세조회</StyledSubTitle>

        {orderDetailData.map((item: ReservationDetail) => (
          <div key={item.orderItemId}>
            {/* <StyledTitle>{orderID}</StyledTitle> */}
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
                  <StyledButton onClick={handleReviewWriteModal}>
                    리뷰작성
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
            {showReviewWriteModal && (
              <ReviewWriteModal
                setShowModal={setShowReviewWriteModal}
                orderDetailData={orderDetailData}
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
