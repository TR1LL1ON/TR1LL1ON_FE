import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation, getProductsReview } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './AllFacility';
import { StyledImageContainer } from '@/style/products/productsStyle';
import { useRef, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [sort, setSort] = useState('reviewDate,DESC');

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],

    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  const roomData: Room[] = data?.data.rooms || [];
  const accommodationData: AccommodationData = data?.data;

  const { data: productReview, isLoading: isLoadingReview } = useQuery({
    queryKey: ['productReview', accommodationID, currentPage, sort],
    queryFn: () => fetchReviews(currentPage, pageSize, sort),
    enabled: !!accommodationID,
  });

  const fetchReviews = async (page: number, size: number, sort: string) => {
    return await getProductsReview(accommodationID, page, size, sort);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  //리뷰 스크롤 이동
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
            sort={sort}
            handleSortChange={handleSortChange}
          />
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
