import { ProductReview } from '@/interfaces/interface';

const sortReviews = (
  reviews: ProductReview[],
  sortType: string,
): ProductReview[] => {
  switch (sortType) {
    case 'reviewDate,DESC':
      return [...reviews].sort(
        (a, b) =>
          new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime(),
      );
    case 'reviewDate,ASC':
      return [...reviews].sort(
        (a, b) =>
          new Date(a.reviewDate).getTime() - new Date(b.reviewDate).getTime(),
      );
    case 'score,DESC':
      return [...reviews].sort((a, b) => b.score - a.score);
    case 'score,ASC':
      return [...reviews].sort((a, b) => a.score - b.score);
    default:
      return reviews;
  }
};

export default sortReviews;
