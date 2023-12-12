import { useState, useEffect } from 'react';
import { ProductReview } from '@/interfaces/interface';

const useDisplayedReview = (productReview: ProductReview[] | undefined) => {
  const [displayedReview, setDisplayedReview] = useState<ProductReview[]>([]);

  useEffect(() => {
    if (Array.isArray(productReview)) {
      setDisplayedReview(productReview.slice(0, 3));
    }
  }, [productReview]);

  const showAllReview = () => {
    if (Array.isArray(productReview)) {
      setDisplayedReview(productReview);
    }
  };

  return { displayedReview, showAllReview };
};

export default useDisplayedReview;
