import { ProductReview } from '@/interfaces/interface';
import { StyledSubTitle } from '@/style/payment/paymentStyle';
import { v4 as uuidv4 } from 'uuid';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledReviewButton,
  noReviewMessage,
  reviewStar,
} from '../Review';
import useDisplayedReview from '@/hooks/useDisplayedReview';

interface ModalReviewProps {
  ProductReview: ProductReview[] | undefined;
  name: string | undefined;
  roomId: number;
}

const ModalReview = ({ ProductReview, name, roomId }: ModalReviewProps) => {
  const filteredReview = ProductReview?.filter(
    (review) => review.productId === roomId,
  );
  // 표시 할 리뷰 개수 / 전체보기 버튼 관리 hook
  const { displayedReview, showAllReview } = useDisplayedReview(filteredReview);

  return (
    <>
      <StyledSubTitle $mt="3rem">{name} 후기</StyledSubTitle>
      <StyleReviewContainer
        $justifyContent="flex-stat"
        $alignItems="center"
        $flexDirection="column">
        {displayedReview.length > 0 ? (
          displayedReview.map((review) => (
            <StyleReviewItem key={uuidv4()}>
              <p>
                <span> {reviewStar(review.score)}</span>
                <span>{review.reviewDate}</span>
              </p>
              <p>{review.content}</p>
            </StyleReviewItem>
          ))
        ) : (
          <StyleReviewItem $mt="0" $mb="0" $padding=".5rem" $textAlign="center">
            {noReviewMessage}
          </StyleReviewItem>
        )}
      </StyleReviewContainer>
      {filteredReview && filteredReview.length > 3 && (
        <StyledReviewButton onClick={showAllReview}>
          객실 후기 모두 보기
        </StyledReviewButton>
      )}
    </>
  );
};

export default ModalReview;
