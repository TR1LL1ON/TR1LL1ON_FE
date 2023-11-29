import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import styled from 'styled-components';
import { useState } from 'react';
import ReviewWriteModal from './reviewWriteModal';
import { Reservation } from '@/interfaces/interface';
import ReservationAccordion from './reservationAccordion';

interface ReservationCardProps {
  data: Reservation; // 단일 Reservation 객체
}

const ReservationCard: React.FC<ReservationCardProps> = ({ data }) => {
  const [showReviewWriteModal, setShowReviewWriteModal] = useState(false);

  // const handleReviewWriteModal = () => {
  //   setShowReviewWriteModal(true);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledReservationContainer
        $alignItems="flex-start"
        $gap="0.75rem"
        onClick={toggleAccordion}>
        <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
          <img
            src="https://source.unsplash.com/random"
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
            {`에약번호 : ${data.orderId}`}
          </StyledText>
          <StyledFlexContainer style={{ width: '100%' }}>
            <StyledText $fontWeight={700}>{`${
              data.orderCreateDate.split('T')[0]
            }`}</StyledText>

            {showReviewWriteModal && (
              <ReviewWriteModal
                setShowModal={setShowReviewWriteModal}
                orderID={data.orderId}
              />
            )}
          </StyledFlexContainer>
          <StyledFlexContainer style={{ width: '100%' }}>
            <StyledText $fontSize="0.75rem">{`${data.payment}`}</StyledText>
          </StyledFlexContainer>
          <StyledText $fontSize="1rem" $fontWeight={700}>
            {`${data.totalPrice}원`}
          </StyledText>
        </StyledFlexContainer>
      </StyledReservationContainer>
      <ReservationAccordion isOpen={isOpen} orderID={data.orderId} />
    </>
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
