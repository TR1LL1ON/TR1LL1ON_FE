import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import ProductsFacility from './ProductsFacility';
import { Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';

interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],
    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  console.log(accommodationID);

  console.log(data);

  const roomData: Room[] = data?.data.rooms || [];
  console.log(roomData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <ImageContainer />
      {roomData.map((room) => (
        <RoomCard key={room.roomId} roomData={room} />
      ))}
      <ProductsFacility />
      <Map lat={37.5649867} lng={126.985575} />
      <Review />
    </>
  );
};

export default ProductsContainer;
