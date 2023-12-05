import { FaStar } from 'react-icons/fa';
import { ProductReview } from '@/interfaces/interface';

export const reviewStar = (score: number) => {
  const totalStars = 5;
  return Array.from({ length: totalStars }, (_, i) => (
    <FaStar key={i} style={{ color: i < score ? '#ffc107' : '#e4e5e9' }} />
  ));
};

export const calculateAverageScore = (reviews: ProductReview[] | undefined) => {
  if (!reviews || reviews.length === 0) {
    return 0;
  }
  const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
  return totalScore / reviews.length;
};
