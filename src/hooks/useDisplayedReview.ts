import { useState, useEffect } from 'react';
import { ProductReview } from '@/interfaces/interface';

const useDisplayedReview = (ProductReview: ProductReview[] | undefined) => {
  const [displayedReview, setDisplayedReview] = useState<ProductReview[]>([]);

  useEffect(() => {
    if (ProductReview) {
      setDisplayedReview(ProductReview.slice(0, 3));
    }
  }, []);

  const showAllReview = () => {
    if (ProductReview) {
      setDisplayedReview(ProductReview);
    }
  };

  return { displayedReview, showAllReview };
};

export default useDisplayedReview;
