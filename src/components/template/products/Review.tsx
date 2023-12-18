import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
  StyledBold,
} from '@/style/products/productsStyle';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ProductReviewResponse } from '@/interfaces/interface';
import { reviewStar } from '@/util/reviewUtilities';
import Pagination from './Pagination';

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
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-left: 1rem;
`;
export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPageBtn = styled.button`
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
