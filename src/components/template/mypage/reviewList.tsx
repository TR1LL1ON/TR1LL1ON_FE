import {
  StyledWrap,
  StyledH2Text,
  StyledTextBox,
  StyledBold,
} from '@/style/products/productsStyle';
import {
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
  StyledTitle,
  StyledSubTitle,
  StyledWrapper,
} from '@/style/payment/paymentStyle';
import { ProductReviewResponse } from '@/interfaces/interface';
import { reviewStar } from '@/util/reviewUtilities';
import {
  StyleReviewContainer,
  StyleReviewItem,
  StyledStar,
} from '@/style/products/reviewStyle';
import { useState } from 'react';
import {
  PaginationContainer,
  PageButton,
  StyledReservationList,
} from './reservationList';

import { useGetReview } from '@/hooks/useGetReview';

const itemsPerPage = 5;

const ReviewList = () => {
  const data = useGetReview();
  const reviews = data?.content || [];
  const totalElements = data?.totalElements || 0;
  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviews.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(reviews.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlerPageChange = (pageNumber: number) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsFadingOut(false);
    }, 300);
  };

  const noReviewMessage = ` 에 대한 리뷰가 없습니다. 방문 후 리뷰를 남겨주세요 😊`;

  return (
    <>
      {/* <StyledFlexContainer>
        <StyledTextBox>
          <select value={sort} onChange={handleSortChange}>
            <option value="reviewDate,DESC">최신순</option>
            <option value="reviewDate,ASC">오래된순</option>
            <option value="score,DESC">평점 높은순</option>
            <option value="score,ASC">평점 낮은순</option>
          </select>
        </StyledTextBox>
      </StyledFlexContainer> */}
      <StyledSubTitle
        $mt="2rem"
        style={{ paddingInline: '5rem', fontSize: '1.2rem' }}>
        총 {data?.numberOfElements}개의 리뷰
      </StyledSubTitle>
      <StyledWrapper
        style={{
          paddingInline: '5rem',
          fontFamily:
            'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
          overflowY: 'auto',
          height: '60vh',
        }}>
        <StyledReservationList isFadingOut={isFadingOut}>
          {totalElements > 0 ? (
            currentItems.map((review) => (
              <StyleReviewItem
                $mt="0"
                $mb="1rem"
                key={review.reviewId}
                style={{ display: 'flex' }}>
                <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
                  <img
                    src={`${review.productDetails.productImage}`}
                    style={{
                      width: '124px',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                    }}
                  />
                </StyledImageContainer>
                <StyledFlexContainer
                  style={{ width: '100%', height: '100%' }}
                  $flexDirection="column"
                  $alignItems="flex-start">
                  <StyledTitle $mt="0" $mb="0">
                    {`${review.accommodationDetails.accommodationName}`}
                  </StyledTitle>
                  <StyledSubTitle>
                    {`${review.productDetails.productName}`}
                  </StyledSubTitle>
                  <div style={{ display: 'flex' }}>
                    <StyledStar>{reviewStar(review.score)}</StyledStar>
                    {review.reviewDate}
                    {review.content}
                  </div>
                </StyledFlexContainer>
              </StyleReviewItem>
            ))
          ) : (
            <StyleReviewItem $mt="0" $mb="0" $padding="1.2rem 1rem">
              {noReviewMessage}
            </StyleReviewItem>
          )}
        </StyledReservationList>
        <PaginationContainer>
          {pageNumbers.map((number) => (
            <PageButton
              key={number}
              className={number === currentPage ? 'active' : ''}
              onClick={() => handlerPageChange(number)}>
              {number}
            </PageButton>
          ))}
        </PaginationContainer>
      </StyledWrapper>
    </>
  );
};

export default ReviewList;
