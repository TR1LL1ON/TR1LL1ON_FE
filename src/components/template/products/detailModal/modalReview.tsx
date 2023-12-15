import { StyledSubTitle, StyledText } from '@/style/payment/paymentStyle';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledPageBtn,
  StyledPagination,
  StyledStar,
} from '../Review';
import { calculateAverageScore, reviewStar } from '@/util/reviewUtilities';
import { StyledBold } from '@/style/products/productsStyle';
import { useState } from 'react';
import useRoomReviews from '@/hooks/useRoomReviews';

interface ModalReviewProps {
  name: string;
  roomName: string;
  roomId: number;
}

const ModalReview = ({ name, roomName, roomId }: ModalReviewProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;
  const { data, isLoading, isError } = useRoomReviews(
    roomId,
    currentPage,
    pageSize,
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading reviews</div>;

  const reviews = data || [];
  const averageScore = calculateAverageScore(reviews);
  const formattedAverageScore = averageScore.toFixed(1);

  return (
    <>
      <StyledSubTitle $mt="2rem" $mb=".5rem">
        {name} {roomName} 후기 ★ {formattedAverageScore}
      </StyledSubTitle>
      <StyledText>&nbsp; 총 {reviews.length}개의 후기</StyledText>
      <StyleReviewContainer
        $justifyContent="flex-stat"
        $alignItems="center"
        $flexDirection="column">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <StyleReviewItem $mb="0" key={review.reviewId}>
              <p>
                <span>
                  <StyledBold> {review.userDetails.userName}</StyledBold>
                  <StyledStar> {reviewStar(review.score)}</StyledStar>
                </span>
                <span>{review.reviewDate}</span>
              </p>
              <p>{review.content}</p>
            </StyleReviewItem>
          ))
        ) : (
          <StyleReviewItem $mt="0" $mb="0" $padding=".5rem" $textAlign="center">
            {name} {roomName}에 대한 리뷰가 없습니다. <br />
            방문 후 리뷰를 남겨주세요 😊
          </StyleReviewItem>
        )}

        <StyledPagination>
          {Array.from(
            { length: Math.ceil(reviews.length / pageSize) },
            (_, i) => (
              <StyledPageBtn
                className={currentPage === i ? 'active' : ''}
                key={i}
                onClick={() => setCurrentPage(i)}
                style={{ margin: '10px 5px' }}>
                {i + 1}
              </StyledPageBtn>
            ),
          )}
        </StyledPagination>
      </StyleReviewContainer>
    </>
  );
};

export default ModalReview;
