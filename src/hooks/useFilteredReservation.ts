import { getCarts } from '@/api/service';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const useFilteredReservation = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productIds = params.getAll('productId').map((e) => Number(e)) ?? [];

  const { data: rooms, error } = useSuspenseQuery({
    queryKey: ['reservations', productIds],
    queryFn: getCarts,
  });

  console.log(rooms);

  if (error) throw error;

  const filteredRooms = rooms.filter((room) =>
    productIds.includes(room.productId),
  );

  return { filteredRooms };
};

export default useFilteredReservation;
