import { useQuery } from '@tanstack/react-query';
import { getRoomReview } from '@/api/service';
import { ProductReview } from '@/interfaces/interface';

const useRoomReviews = (productId: number, page = 0, pageSize = 4) => {
  return useQuery<ProductReview[]>({
    queryKey: ['roomReviews', productId, page],
    queryFn: () => getRoomReview(productId, page, pageSize),
  });
};

export default useRoomReviews;
