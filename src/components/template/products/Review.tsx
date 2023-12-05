import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
} from '@/style/products/productsStyle';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ProductReview } from '@/interfaces/interface';
import { v4 as uuidv4 } from 'uuid';
import useDisplayedReview from '@/hooks/useDisplayedReview';
import { calculateAverageScore, reviewStar } from '@/util/reviewUtilities';

interface ReviewProps {
  productReview: ProductReview[] | undefined;
  name: string;
}

const Review = ({ productReview, name }: ReviewProps) => {
  // 표시 할 리뷰 개수 / 전체보기 버튼 관리 hook
  const { displayedReview, showAllReview } = useDisplayedReview(productReview);

  //숙소 리뷰 평균 평점
  const averageScore = calculateAverageScore(productReview);
  const formattedAverageScore = averageScore.toFixed(1);

  const noReviewMessage = ` ${name}에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊`;
  console.log(productReview);
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
        {!displayedReview || displayedReview.length === 0 ? (
          <StyleReviewItem $mt="0" $mb="0" $padding="1.2rem 1rem">
            {noReviewMessage}
          </StyleReviewItem>
        ) : (
          displayedReview.map((review) => (
            <StyleReviewItem $mt="0" $mb="0" key={uuidv4()}>
              <p>
                <StyledStar>{reviewStar(review.score)}</StyledStar>
                <span>{review.reviewDate}</span>
              </p>
              <p>{review.content}</p>
            </StyleReviewItem>
          ))
        )}
      </StyleReviewContainer>

      {productReview && productReview.length > 3 && (
        <StyledReviewButton onClick={showAllReview}>
          후기 {productReview.length}개 모두 보기
        </StyledReviewButton>
      )}
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
  margin-top: ${(props) => props.$mb || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: ${(props) => props.$textAlign};

  width: 100%;
  border-radius: 1rem;
  & > p {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
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
`;
