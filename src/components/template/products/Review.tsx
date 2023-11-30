import { useState, useEffect } from 'react';
import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
} from '@/style/products/productsStyle';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ProductReview } from '@/interfaces/interface';
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

interface ReviewProps {
  ProductReview: ProductReview[] | undefined;
  name: string;
}
const Review = ({ ProductReview, name }: ReviewProps) => {
  const [displayedReviews, setDisplayedReviews] = useState<ProductReview[]>([]);
  const noReviewsMessage =
    '이 숙박 시설에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊';

  useEffect(() => {
    if (ProductReview) {
      setDisplayedReviews(ProductReview.slice(0, 3));
    }
  }, [ProductReview]);

  const showAllReviews = () => {
    if (ProductReview) {
      setDisplayedReviews(ProductReview);
    }
  };

  const reviewStar = (score: number) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{ color: i <= score ? '#ffc107' : '#e4e5e9' }}
        />,
      );
    }

    return stars;
  };

  return (
    <StyledWrap>
      <StyledH2Text $mt="1rem" $mb="2rem">
        '{name}' 방문 리뷰
      </StyledH2Text>
      <StyleReviewContainer
        $justifyContent="flex-start"
        $alignItems="left"
        $flexDirection="column"
        $gap="1rem">
        {!displayedReviews || displayedReviews.length === 0 ? (
          <StyleReviewItem $padding="1.2rem 1rem">
            {noReviewsMessage}
          </StyleReviewItem>
        ) : (
          displayedReviews.map((review) => (
            <StyleReviewItem key={uuidv4()}>
              <div>
                <span>{reviewStar(review.score)}</span>
                <span>{review.user_id}</span>
                <span>{review.review_date}</span>
                <p>{review.content}</p>
              </div>
            </StyleReviewItem>
          ))
        )}
      </StyleReviewContainer>

      {ProductReview && ProductReview.length > 3 && (
        <StyledReviewButton onClick={showAllReviews}>
          후기 전체보기
        </StyledReviewButton>
      )}
    </StyledWrap>
  );
};

export default Review;
const StyleReviewContainer = styled(StyledFlexContainer)`
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;
const StyleReviewItem = styled(StyledTextBox)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  border-radius: 1rem;
`;
const StyledReviewButton = styled.button`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 0.7rem;
  color: #444;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border-radius: 0.5rem;
  &:hover {
    background-color: #eeeeee;
  }
`;
