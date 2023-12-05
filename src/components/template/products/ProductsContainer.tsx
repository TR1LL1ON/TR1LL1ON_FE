import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, ProductReview, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation, getProductsReview } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './AllFacility';
import { StyledImageContainer } from '@/style/products/productsStyle';


interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],

    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  const roomData: Room[] = data?.data.rooms || [];
  const accommodationData: AccommodationData = data?.data;

  const { data: ProductReview, isLoading: isLoadingReview } = useQuery<
    ProductReview[]
  >({
    queryKey: ['ProductReview', accommodationID],
    queryFn: () => getProductsReview(accommodationID),
    enabled: !!accommodationID,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <StyledImageContainer
        backgroundImage={accommodationData.image[0].imageUrl}
      />
      <AccommodationInfo
        infoData={accommodationData}
        productsFacility={accommodationData.facility}
      />
      {roomData.map((room) => (
        <RoomCard
          key={room.roomId}
          roomData={room}
          ProductReview={ProductReview}
          name={accommodationData.name}
          infoData={accommodationData}
        />
      ))}
      <AllFacility
        productsFacility={accommodationData.facility}
        roomsFacility={roomData}
      />

      <Map
        lat={Number(accommodationData.latitude)}
        lng={Number(accommodationData.longitude)}
      />
      {!isLoadingReview && ProductReview && (
        <Review ProductReview={ProductReview} name={accommodationData.name} />
      )}
    </>
  );
};

export default ProductsContainer;
