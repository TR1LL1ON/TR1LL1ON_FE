import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation, getProductsReview } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './AllFacility';
import { StyledImageContainer } from '@/style/products/productsStyle';
import { useRef, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';
import Map from './Map';

interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const [reviewCurrentPage, setReviewCurrentPage] = useState(0);
  const handleReviewPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setReviewCurrentPage(newPage);
  };
  const location = useLocation();
  const { formattedScore } = location.state || {};

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;

  const fetchReviews = async (page: number, size: number) => {
    return await getProductsReview(accommodationID, page, size);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],

    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  const roomData: Room[] = data?.data.rooms || [];
  const accommodationData: AccommodationData = data?.data;

  const { data: productReview, isLoading: isLoadingReview } = useQuery({
    queryKey: ['productReview', accommodationID, currentPage],
    queryFn: () => fetchReviews(currentPage, pageSize),
    // keepPreviousData: true,
    enabled: !!accommodationID,
  });

  //리뷰 스크롤 이벤트
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = useCallback(() => {
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <StyledImageContainer
        backgroundImage={accommodationData?.image[0].imageUrl}
      />
      <AccommodationInfo
        infoData={accommodationData}
        productsFacility={accommodationData.facility}
        productReview={productReview?.totalElements}
        scrollToReview={scrollToReview}
        score={formattedScore}
      />
      {roomData.map((room) => (
        <RoomCard
          key={room.roomId}
          roomData={room}
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
          <Review
            productReview={productReview}
            name={accommodationData.name}
            currentPage={reviewCurrentPage}
            onPageChange={handleReviewPageChange}
            score={formattedScore}
          />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
