import { ProductReview } from '@/interfaces/interface';
import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import styled from 'styled-components';

interface ModalReviewProps {
  ProductReview: ProductReview[] | undefined;
  name: string;
  roomId: number;
}

const ModalReview = ({ ProductReview, name, roomId }: ModalReviewProps) => {
  const filteredReviews = ProductReview?.filter(
    (review) => review.productId === roomData.roomId,
  );
  console.log(roomId);
  console.log(ProductReview);
  console.log(name);
  return (
    <>
      <StyledSubTitle $mt="3rem">{name} 후기</StyledSubTitle>
      <StyledModalFlexContainer
        $justifyContent="flex-stat"
        $alignItems="left"
        $flexDirection="column">
        {/*  {filteredReviews?.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.review_id}>
         
              <p>{review.content}</p>
          
            </div>
          ))
        ) : (
          <p>이 방에 대한 리뷰가 없습니다.</p>
        )} */}
      </StyledModalFlexContainer>
      <StyledReviewButton>168개 객실후기 보기</StyledReviewButton>
    </>
  );
};

export default ModalReview;
export const StyledModalFlexContainer = styled(StyledFlexContainer)`
  border: 1px solid #d8d8d8;
  border-radius: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 1rem;
`;
export const StyledReviewButton = styled.button`
  background-color: #fff;
  border: 1px solid #d8d8d8;
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
