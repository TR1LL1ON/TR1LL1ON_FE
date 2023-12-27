import { useQuery } from '@tanstack/react-query';
import { getRoomReview } from '@/api/service';
import { ProductReview } from '@/interfaces/interface';

const useRoomReviews = (productId: number) => {
  return useQuery<ProductReview[]>({
    queryKey: ['roomReviews', productId],
    queryFn: () => getRoomReview(productId),
  });
};

export default useRoomReviews;
