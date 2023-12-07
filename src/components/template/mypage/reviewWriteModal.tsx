import styled from 'styled-components';
import { ModalProps } from '@/interfaces/interface';
import { StyledButton } from '@/style/payment/paymentStyle';
import { StyledTitle, StyledFlexContainer } from '@/style/payment/paymentStyle';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { postReviews, getReviews } from '@/api/service';
import { useQuery } from '@tanstack/react-query';

const ReviewWriteModal = ({
  setShowModal,
  orderDetailData,
}: Pick<ModalProps, 'setShowModal' | 'orderDetailData'>) => {
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowModal(false);
  };

  const [reviewText, setReviewText] = useState('');
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(0);

  const submitReview = async () => {
    if (orderDetailData && orderDetailData.orderItemId) {
      try {
        const res = await postReviews(
          orderDetailData.orderItemId,
          score,
          reviewText,
        );
        console.log('리뷰가 성공적으로 제출되었습니다.', res);
        setShowModal(false);
      } catch (error) {
        console.error('리뷰 제출 중 에러가 발생했습니다.', error);
        setShowModal(false);
      }
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation'],
    queryFn: () => getReviews(),
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $height="25rem">
        <StyledModalBody>
          <StyledTitle $mt="0">리뷰작성</StyledTitle>
          <StyledFlexContainer $justifyContent="flex-strat">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;

              const handleClick = () => {
                if (ratingValue === score) {
                  setScore((prevScore) => Math.max(prevScore - 1, 0));
                } else {
                  setScore(ratingValue);
                }
              };

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={handleClick}
                    style={{ display: 'none' }}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || score) ? '#ffc107' : '#e4e5e9'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(score)}
                    size={'2rem'}
                  />
                </label>
              );
            })}
            <span
              style={{
                marginLeft: '10px',
                fontSize: '2rem',
                color: '#ffc107',
              }}>
              {score}
            </span>
          </StyledFlexContainer>
          <StyledTextArea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="리뷰를 입력해주세요."
            style={{ marginTop: '1rem' }}
          />
          <StyledFlexContainer
            $justifyContent="center"
            $gap="3rem"
            style={{ marginTop: '1rem' }}>
            <StyledButton
              $variant="primary"
              onClick={closeModal}
              style={{
                width: '40%',
                backgroundColor: '#ddd',
                color: 'black',
              }}>
              취소하기
            </StyledButton>
            <StyledButton
              $variant="primary"
              onClick={submitReview}
              style={{ width: '40%' }}>
              등록하기
            </StyledButton>
          </StyledFlexContainer>
        </StyledModalBody>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ReviewWriteModal;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $height?: string; // Fixed the typo in height
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'}; // Fixed the typo in height
  max-height: 80vh;
  overflow-y: auto;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  resize: none;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;
