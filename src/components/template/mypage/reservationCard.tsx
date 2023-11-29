import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import styled from 'styled-components';
import { useState } from 'react';
import ReviewWriteModal from './reviewWriteModal';
import { Reservation } from '@/interfaces/interface';
import { StyledOnClick } from '@/style/products/productsStyle';
interface ReservationCardProps {
  data: Reservation; // 단일 Reservation 객체
}

const ReservationCard: React.FC<ReservationCardProps> = ({ data }) => {
  const [showReviewWriteModal, setShowReviewWriteModal] = useState(false);

  const handleReviewWriteModal = () => {
    setShowReviewWriteModal(true);
  };

  // console.log(data);

  return (
    <>
      <StyledReservationContainer
        onClick={handleReviewWriteModal}
        $alignItems="flex-start"
        $gap="0.75rem">
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
              <ReviewWriteModal setShowModal={setShowReviewWriteModal} />
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
