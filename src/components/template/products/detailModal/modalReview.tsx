import { ProductReview } from '@/interfaces/interface';
import { StyledSubTitle } from '@/style/payment/paymentStyle';
import { v4 as uuidv4 } from 'uuid';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledReviewButton,
} from '../Review';
import useDisplayedReview from '@/hooks/useDisplayedReview';
import { reviewStar } from '@/util/reviewUtilities';

interface ModalReviewProps {
  productReview: ProductReview[] | undefined;
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
  const filteredReview = productReview?.filter(
    (review) => review.productId === roomId,
  );
  // 표시 할 리뷰 개수 / 전체보기 버튼 관리 hook
  const { displayedReview, showAllReview } = useDisplayedReview(filteredReview);

  return (
    <>
      <StyledSubTitle $mt="3rem">
        {name} {''} {roomName} 후기
      </StyledSubTitle>
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
            {name} {roomName}에 대한 리뷰가 없습니다. <br />
            방문 후 리뷰를 남겨주세요 😊
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
