import styled from 'styled-components';

import { ModalProps, Review } from '@/interfaces/interface';
import { StyledButton } from '@/style/payment/paymentStyle';
import { StyledTitle, StyledSubTitle } from '@/style/payment/paymentStyle';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { postReviews } from '@/api/service';
const ReviewWriteModal: React.FC<ModalProps> = ({ setShowModal }) => {
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    setShowModal(false);
  };

  const submitReview = async () => {
    try {
      const response = await postReviews(reviewData);
      console.log('리뷰가 성공적으로 제출되었습니다.', response);
    } catch (error) {
      console.error('리뷰 제출 중 에러가 발생했습니다.', error);
    }
  };

  const reviewData: Review = {
    order_item_id: 5, // 예시 ID
    score: 5, // 예시 점수
    content: '테스트 리뷰', // 예시 리뷰 내용
  };

  const [rating, setRating] = useState(0); // 선택된 별점
  const [hover, setHover] = useState(0); // 호버된 별점

  return (
    <StyledModal onClick={closeModal}>
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $heigh="40rem">
        <StyledModalBody>
          <StyledTitle>리뷰작성</StyledTitle>
          <StyledSubTitle $mt="3rem">리뷰 내용</StyledSubTitle>
          {/* <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="리뷰를 작성하세요"
          /> */}

          <StyledSubTitle $mt="3rem">별점</StyledSubTitle>
          <div>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 0.5;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    style={{ display: 'none' }}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(rating)}
                    size={50}
                  />
                </label>
              );
            })}
          </div>
        </StyledModalBody>
        <StyledButton $variant="primary" onClick={submitReview}>
          리뷰 제출
        </StyledButton>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ReviewWriteModal;

// const StyledModalText = styled(StyledText)`
//   display: flex;
//   width: 40%;
//   align-items: center;
//   gap: 0.1rem;
// `;

// const StyledModalFlexContainer = styled(StyledFlexContainer)`
//   border: 1px solid #d8d8d8;
//   border-radius: 0.5rem;
//   flex-wrap: wrap;
//   padding: 1rem;
//   margin-bottom: 1rem;
// `;
// const StyledReviewButton = styled.button`
//   background-color: #fff;
//   border: 1px solid #d8d8d8;
//   width: 100%;

//   padding: 0.7rem;
//   color: #444;
//   font-size: ${(props) => props.theme.fontSizes.md};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   border-radius: 0.5rem;
//   &:hover {
//     background-color: #eeeeee;
//   }
// `;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const StyledTh = styled.th`
//   border: 1px solid #ddd;
//   padding: 0.5rem;
//   background-color: #f2f2f2;
//   text-align: start;
//   font-size: ${(props) => props.theme.fontSizes.sm};
//   font-weight: ${(props) => props.theme.fontWeights.bold};
// `;

// const StyledTd = styled.td`
//   border: 1px solid #ddd;
//   padding: 0.5rem;
//   text-align: left;
//   font-size: ${(props) => props.theme.fontSizes.sm};
// `;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
`;

// const StyledModalFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-top: 1px solid #ddd;
//   box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px 0px;
// `;

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
  $heigh?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$heigh || 'auto'};
  max-height: 80vh;
  overflow-y: auto;
`;

// const CarouselWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   overflow: hidden;
// `;
