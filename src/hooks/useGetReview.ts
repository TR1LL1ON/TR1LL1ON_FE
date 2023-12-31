import { useSuspenseQuery } from '@tanstack/react-query';
import { getReviews } from '@/api/service';

export const useGetReview = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['accommodation'],
    queryFn: () => getReviews(),
    staleTime: 60000,
  });

  return data.data;
};
