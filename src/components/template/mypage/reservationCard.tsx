import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
  StyledTitle,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import styled from 'styled-components';
import { useState } from 'react';

import { Reservation } from '@/interfaces/interface';
import ReservationAccordion from './reservationAccordion';
import { FaChevronDown } from 'react-icons/fa';

interface ReservationCardProps {
  data: Reservation;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  console.log(data);

  return (
    <div style={{ padding: '0' }}>
      <StyledReservationContainer
        $alignItems="flex-start"
        $gap="0.75rem"
        onClick={toggleAccordion}>
        <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
          <img
            src={`${data.accommodationImages[0]}`}
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
          <StyledTitle $mb="0">{`${data.accommodationNames[0]} 등 ${data.accommodationNames.length}개 숙소 `}</StyledTitle>

          <StyledSubTitle $mb="0.5rem">{`총 ${data.productNames.length}건의 객실예약`}</StyledSubTitle>

          <StyledFlexContainer style={{ width: '100%' }}>
            <StyledText $fontWeight={700}>{`${
              data.orderCreateDate.split('T')[0]
            }`}</StyledText>
          </StyledFlexContainer>
          <StyledFlexContainer style={{ width: '100%' }}>
            <StyledText $fontSize="0.75rem">{`${data.payment}`}</StyledText>
            <ArrowIcon
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </StyledFlexContainer>

          <StyledText $fontSize="1rem" $fontWeight={700}>
            {`${data.totalPrice.toLocaleString()}원`}
          </StyledText>
        </StyledFlexContainer>
      </StyledReservationContainer>
      <ReservationAccordion isOpen={isOpen} orderID={data.orderId} />
    </div>
  );
};

export default ReservationCard;

const StyledReservationContainer = styled(StyledFlexContainer)`
  &:hover {
    background-color: #eeeeee;
  }

  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ArrowIcon = styled(FaChevronDown)`
  transition: transform 0.5s ease;
`;
