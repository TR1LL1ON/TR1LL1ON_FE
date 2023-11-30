import { getCarts } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const useFilteredReservation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productIds = params.getAll('productId').map((e) => Number(e)) ?? [];

  const {
    data: rooms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['reservations', productIds],
    queryFn: () => getCarts(),
  });

  const filteredRooms = rooms?.filter((room) =>
    productIds.includes(room.productId),
  );

  return { filteredRooms, isLoading, error };
};

export default useFilteredReservation;
