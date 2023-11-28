import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
} from '@/style/products/productsStyle';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';

const Review = () => {
  return (
    <StyledWrap>
      <StyledH2Text $mt="0rem" $mb="2rem">
        리뷰는 추후 구현
      </StyledH2Text>
      <StyleReviewContainer
        $justifyContent="flex-start"
        $alignItems="left"
        $flexDirection="row"
        $gap="1rem">
        <StyleReviewItem $padding="1.2rem 1rem">
          ⭐⭐⭐⭐⭐ 평점 / 작성자 / 날짜 / 내용
          <br />
          야놀자에는 리뷰 항목 가로 슬라이드로 구현
        </StyleReviewItem>
        <StyleReviewItem $padding="1.2rem 1rem">
          ⭐⭐⭐⭐⭐ 평점 / 작성자 / 날짜 / 내용
          <br />
          콘텐츠 클릭 시 리뷰 페이지로 이동
        </StyleReviewItem>
        <StyleReviewItem $padding="1.2rem 1rem">
          ⭐⭐⭐⭐⭐ 평점 / 작성자 / 날짜 / 내용 좋아용
          <br /> 슬라이드에 최대 10개? 노출
        </StyleReviewItem>
      </StyleReviewContainer>
      <StyledReviewButton>168개 후기 전체보기</StyledReviewButton>
    </StyledWrap>
  );
};

export default Review;
const StyleReviewContainer = styled(StyledFlexContainer)`
  flex-wrap: nowrap;
  margin-bottom: 1rem;
  width: 120%;
  overflow: hidden;
`;
const StyleReviewItem = styled(StyledTextBox)`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 40%;
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
