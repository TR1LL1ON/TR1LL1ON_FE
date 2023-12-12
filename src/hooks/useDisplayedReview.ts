import { useState, useEffect } from 'react';
import { ProductReview } from '@/interfaces/interface';

const useDisplayedReview = (productReview: ProductReview[] | undefined) => {
  const [displayedReview, setDisplayedReview] = useState<ProductReview[]>([]);

  useEffect(() => {
    if (productReview) {
      setDisplayedReview(productReview.slice(0, 3));
    }
  }, []);

  const showAllReview = () => {
    if (productReview) {
      setDisplayedReview(productReview);
    }
  };

  return { displayedReview, showAllReview };
};

export default useDisplayedReview;
