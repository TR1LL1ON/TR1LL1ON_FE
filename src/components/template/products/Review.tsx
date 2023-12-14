import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
  StyledBold,
} from '@/style/products/productsStyle';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ProductReviewResponse } from '@/interfaces/interface';
import { calculateAverageScore, reviewStar } from '@/util/reviewUtilities';

interface ReviewProps {
  productReview: ProductReviewResponse | undefined;
  name: string;
  onPageChange: (newPage: number) => void;
  currentPage: number;
}

const Review = ({
  productReview,
  name,
  onPageChange,
  currentPage,
}: ReviewProps) => {
  // 해당 숙소 리뷰 데이터
  const reviews = productReview?.content || [];
  const totalElements = productReview?.totalElements || 0;
  const totalPages = productReview?.totalPages || 0;
  const noReviewMessage = ` ${name}에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊`;
  console.log(reviews);
  console.log(productReview);

  // 평균 평점 계산
  const averageScore = calculateAverageScore(reviews);
  const formattedAverageScore = averageScore.toFixed(1);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber - 1);
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <StyledWrap>
      <StyledH2Text $mt="1rem" $mb="0rem">
        '{name}' 의 방문 후기 ★ {formattedAverageScore}
      </StyledH2Text>
      <StyledTextBox> 총 {productReview?.totalElements}개의 후기</StyledTextBox>

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
      <StyledPagination>
        {pageNumbers.map((number) => (
          <StyledPageBtn
            className={currentPage === number - 1 ? 'active' : ''}
            key={number}
            onClick={() => handlePageChange(number)}
            style={{ margin: '0 5px' }}>
            {number}
          </StyledPageBtn>
        ))}
      </StyledPagination>
    </StyledWrap>
  );
};

export default Review;

export const StyleReviewContainer = styled(StyledFlexContainer)`
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;
export const StyleReviewItem = styled(StyledTextBox)<{
  $fontSize?: string;
  $mt?: string;
  $mb?: string;
  $textAlign?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.md};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.regular};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: ${(props) => props.$textAlign};
  width: 100%;
  border-radius: 1rem;
  & p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledStar = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  margin-top: 0.4rem;
  margin-left: 1rem;
`;
const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPageBtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.sm};
  border: none;
  background-color: #f0f0f0;
  padding: 0 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }

  &.active {
    background-color: #de2f5f;
    color: white;
  }
`;
