import { FaStar, FaStarHalf } from 'react-icons/fa';
import { ProductReview } from '@/interfaces/interface';
import styled from 'styled-components';

export const reviewStar = (score: number) => {
  const totalStars = 5;
  return Array.from({ length: totalStars }, (_, i) => {
    const index = i + 1;
    if (index <= Math.floor(score)) {
      // 정수 부분에 대한 별
      return <FaStar key={index} style={{ color: '#ffc107' }} />;
    } else if (index === Math.ceil(score) && !Number.isInteger(score)) {
      // 별점 반 개
      return (
        <span style={{ position: 'relative' }}>
          <FaStarHalf key={'half' + index} style={{ color: '#ffc107' }} />
          <StyledGrayHalfStar key={'gray-half' + index} />
        </span>
      );
    } else {
      // 회색 별
      return <FaStar key={index} style={{ color: '#e4e5e9' }} />;
    }
  });
};

export const calculateAverageScore = (reviews: ProductReview[] | undefined) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return 0;
  }
  const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
  return totalScore / reviews.length;
};

const StyledGrayHalfStar = styled(FaStarHalf)`
  color: #e4e5e9;
  transform: scaleX(-1);
  position: absolute;
  left: 0px;
  top: -1px;
`;
