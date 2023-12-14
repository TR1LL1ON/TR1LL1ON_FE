import { ProductReviewResponse } from '@/interfaces/interface';
import { StyledSubTitle } from '@/style/payment/paymentStyle';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledReviewButton,
  StyledStar,
} from '../Review';
import { calculateAverageScore, reviewStar } from '@/util/reviewUtilities';
import { StyledBold } from '@/style/products/productsStyle';

interface ModalReviewProps {
  productReview: ProductReviewResponse | undefined;
  name: string | undefined;
  roomName: string;
  roomId: number;
}

const ModalReview = ({
  productReview,
  name,
  roomName,
  roomId,
}: ModalReviewProps) => {
  // 객실 리뷰만 필터링
  const filteredReview =
    productReview?.content.filter(
      (review) => review.productDetails.productId === roomId,
    ) || [];

  // 객실 리뷰 평균 평점
  const averageScore = calculateAverageScore(filteredReview);
  const formattedAverageScore = averageScore.toFixed(1);

  return (
    <>
      <StyledSubTitle $mt="3rem">
        {name} {roomName} 후기 ★ {formattedAverageScore}
      </StyledSubTitle>
      <StyleReviewContainer
        $justifyContent="flex-stat"
        $alignItems="center"
        $flexDirection="column">
        {filteredReview.length > 0 ? (
          filteredReview.map((review) => (
            <StyleReviewItem key={review.reviewId}>
              <p>
                <p>
                  <StyledStar> {reviewStar(review.score)}</StyledStar>
                  <StyledBold> {review.userDetails.userName}</StyledBold>
                </p>
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
      </StyleReviewContainer>

      <StyledReviewButton>
        객실 후기 {filteredReview.length}개 모두 보기
      </StyledReviewButton>
    </>
  );
};

export default ModalReview;
