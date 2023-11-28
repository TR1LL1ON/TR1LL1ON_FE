import { postAccommodation } from '@/api/service';
import { useQueries } from '@tanstack/react-query';

const useReservations = (accommodationId: string[]) => {
  const results = useQueries({
    queries: accommodationId.map((id) => ({
      queryKey: ['accommodation', id],
      queryFn: () => postAccommodation(id),
    })),
  });

  return results;
};

export default useReservations;
