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
// import { useState } from 'react';

interface ReviewProps {
  productReview: ProductReviewResponse | undefined;
  name: string;
}

const Review = ({ productReview, name }: ReviewProps) => {
  // 해당 숙소 리뷰 데이터
  const reviews = productReview?.content || [];
  const totalElements = productReview?.totalElements || 0;
  const noReviewMessage = ` ${name}에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊`;
  console.log(reviews);
  console.log(productReview);

  // 평균 평점 계산
  const averageScore = calculateAverageScore(reviews);
  const formattedAverageScore = averageScore.toFixed(1);

  return (
    <StyledWrap>
      <StyledH2Text $mt="1rem" $mb="2rem">
        '{name}' 방문 후기 ★{formattedAverageScore}
      </StyledH2Text>
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
                  <StyledStar>{reviewStar(review.score)}</StyledStar>
                  <StyledBold>{review.userDetails.userName}</StyledBold>
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
      <StyledReviewButton>
        후기 {productReview?.totalElements}개 모두 보기
      </StyledReviewButton>
      {/*       {productReview && productReview.length > 3 && (
        <StyledReviewButton onClick={showAllReview}>
          후기 {productReview.length}개 모두 보기
        </StyledReviewButton>
      )} */}
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
export const StyledReviewButton = styled.button`
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

export const StyledStar = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-top: 0.4rem;
  margin-right: 1rem;
`;
