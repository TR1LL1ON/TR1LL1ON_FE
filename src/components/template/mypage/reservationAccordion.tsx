import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getUserDetail } from '@/api/service';
import {
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledFlexContainer,
  StyledImageContainer,
  StyledHLine,
} from '@/style/payment/paymentStyle';
import { ReservationDetail } from '@/interfaces/interface';

interface OrderDetailsAccordionProps {
  isOpen: boolean;
  orderID: number;
}

const ReservationAccordion: React.FC<OrderDetailsAccordionProps> = ({
  isOpen,
  orderID,
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['ReservationDetailData'],
    queryFn: () => getUserDetail(orderID as number),
    enabled: orderID !== undefined,
  });
  console.log(data?.data);
  const orderDetailData = data?.data.orderItemList;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <AccordionContainer>
      <AccordionContent className={isOpen ? 'active' : ''}>
        <StyledTitle>리뷰작성</StyledTitle>
        <StyledTitle>{orderID}</StyledTitle>

        {orderDetailData.map((item: ReservationDetail) => (
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
                    {item.price}원
                  </StyledText>
                </StyledFlexContainer>
              </StyledFlexContainer>
            </StyledFlexContainer>
            <StyledHLine />
          </div>
        ))}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default ReservationAccordion;

const AccordionContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const AccordionHeader = styled.button`
  background-color: #f7f7f7;
  color: #333;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const AccordionContent = styled.div`
  padding: 0;
  max-height: 0;
  overflow: hidden;
  /* transition: max-height 0.3s ease; */

  &.active {
    padding: 1rem;
    max-height: 1000px; // 이 값은 내용에 따라 조절 필요
  }
`;
