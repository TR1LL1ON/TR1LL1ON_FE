import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
  StyledBold,
} from '@/style/products/productsStyle';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ProductReviewResponse } from '@/interfaces/interface';
import { reviewStar } from '@/util/reviewUtilities';
import Pagination from './Pagination';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledStar,
} from '@/style/products/reviewStyle';

interface ReviewProps {
  productReview: ProductReviewResponse | undefined;
  name: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  score: number;
  sort: string;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Review = ({
  productReview,
  name,
  currentPage,
  setCurrentPage,
  score,
  sort,
  handleSortChange,
}: ReviewProps) => {
  const reviews = productReview?.content || [];
  const totalElements = productReview?.totalElements || 0;
  const noReviewMessage = ` ${name}에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊`;

  return (
    <StyledWrap>
      <StyledH2Text $mt="1rem" $mb="0rem">
        '{name}' 의 방문 후기 ★ {score}
      </StyledH2Text>
      <StyledFlexContainer>
        <StyledTextBox>
          총 {productReview?.totalElements}개의 후기
        </StyledTextBox>
        <StyledTextBox>
          <select value={sort} onChange={handleSortChange}>
            <option value="reviewDate,DESC">최신순</option>
            <option value="reviewDate,ASC">오래된순</option>
            <option value="score,DESC">평점 높은순</option>
            <option value="score,ASC">평점 낮은순</option>
          </select>
        </StyledTextBox>
      </StyledFlexContainer>

      <StyleReviewContainer
        $justifyContent="flex-start"
        $alignItems="center"
        $flexDirection="column"
        $gap="1rem">
        {totalElements > 0 ? (
          reviews.map((review) => (
            <StyleReviewItem $mt="0" $mb="0" key={review.reviewId}>
              <p>
                <span>
                  <StyledBold>{review.userDetails.userName}</StyledBold>
                  <StyledStar>{reviewStar(review.score)}</StyledStar>
                </span>
                <span>{review.reviewDate}</span>
              </p>
              <p>{review.content}</p>
            </StyleReviewItem>
          ))
        ) : (
          <StyleReviewItem $mt="0" $mb="0" $padding="1.2rem 1rem">
            {noReviewMessage}
          </StyleReviewItem>
        )}
      </StyleReviewContainer>
      <Pagination
        totalItems={totalElements}
        itemsPerPage={4}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </StyledWrap>
  );
};

export default Review;
