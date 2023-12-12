import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, ProductReview, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation, getProductsReview } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './AllFacility';
import { StyledImageContainer } from '@/style/products/productsStyle';
import { useRef, useCallback } from 'react';

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

  const { data: productReview, isLoading: isLoadingReview } = useQuery<
    ProductReview[]
  >({
    queryKey: ['productReview', accommodationID],
    queryFn: () => getProductsReview(accommodationID),
    enabled: !!accommodationID,
  });

  //리뷰 스크롤 이벤트
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = useCallback(() => {
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

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
        productReview={productReview}
        scrollToReview={scrollToReview}
      />
      {roomData.map((room) => (
        <RoomCard
          key={room.roomId}
          roomData={room}
          productReview={productReview}
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
      {!isLoadingReview && productReview && (
        <div ref={reviewRef}>
          <Review productReview={productReview} name={accommodationData.name} />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
