import { getReservedRooms } from '@/api/service';
import { useQuery } from '@tanstack/react-query';

const useReservations = (productIds: number[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reservations', productIds],
    queryFn: () => getReservedRooms(productIds),
  });

  return { data, isLoading, error };
};

export default useReservations;
