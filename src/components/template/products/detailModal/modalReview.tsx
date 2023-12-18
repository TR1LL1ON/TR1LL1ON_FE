import {
  StyledFlexContainer,
  StyledSubTitle,
  StyledText,
} from '@/style/payment/paymentStyle';
import { StyleReviewContainer, StyleReviewItem, StyledStar } from '../Review';
import { calculateAverageScore, reviewStar } from '@/util/reviewUtilities';
import { StyledBold } from '@/style/products/productsStyle';
import React, { useEffect, useState } from 'react';
import useRoomReviews from '@/hooks/useRoomReviews';
import Pagination from '../Pagination';
import sortReviews from '@/util/sortReviews';
import { ProductReview } from '@/interfaces/interface';

interface ModalReviewProps {
  name: string;
  roomName: string;
  roomId: number;
}

const ModalReview = ({ name, roomName, roomId }: ModalReviewProps) => {
  const [sort, setSort] = useState('reviewDate,DESC');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortedReviews, setSortedReviews] = useState<ProductReview[]>([]);

  const { data, isLoading, isError } = useRoomReviews(roomId);

  useEffect(() => {
    if (isLoading || isError) return;
    const reviews = data || [];
    setSortedReviews(sortReviews(reviews, sort));
  }, [data, isLoading, isError, sort]);

  const averageScore = data ? calculateAverageScore(data) : 0;
  const formattedAverageScore = averageScore.toFixed(1);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading reviews</div>;

  const pageSize = 3;
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleReviews = sortedReviews.slice(startIndex, endIndex);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    setCurrentPage(0);
  };

  return (
    <>
      <StyledSubTitle $mt="2rem" $mb=".5rem">
        {name} {roomName} 후기 ★ {formattedAverageScore}
      </StyledSubTitle>
      <StyledFlexContainer>
        <StyledText>&nbsp; 총 {data?.length || 0}개의 후기</StyledText>
        <StyledText>
          <select value={sort} onChange={handleSortChange}>
            <option value="reviewDate,DESC">최신순</option>
            <option value="reviewDate,ASC">오래된순</option>
            <option value="score,DESC">평점 높은순</option>
            <option value="score,ASC">평점 낮은순</option>
          </select>
        </StyledText>
      </StyledFlexContainer>
      <StyleReviewContainer
        $justifyContent="flex-stat"
        $alignItems="center"
        $flexDirection="column">
        {visibleReviews.length > 0 ? (
          visibleReviews.map((review) => (
            <StyleReviewItem $mb="0" key={review.reviewId}>
              <p>
                <span>
                  <StyledBold> {review.userDetails.userName}</StyledBold>
                  <StyledStar> {reviewStar(review.score)}</StyledStar>
                </span>
                <span>{review.reviewDate}</span>
              </p>
              <p>{review.content}</p>
            </StyleReviewItem>
          ))
        ) : (
          <StyleReviewItem
            $mt="1rem"
            $mb="0"
            $padding=".5rem"
            $textAlign="center">
            {name} {roomName}에 대한 리뷰가 없습니다. <br />
            방문 후 리뷰를 남겨주세요 😊
          </StyleReviewItem>
        )}

        <Pagination
          totalItems={sortedReviews.length}
          itemsPerPage={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </StyleReviewContainer>
    </>
  );
};

export default ModalReview;
