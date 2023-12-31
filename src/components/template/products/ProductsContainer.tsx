import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation, getProductsReview } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './Facility/AllFacility';
import {
  StyledImageContainer,
  StyledProductsContainer,
} from '@/style/products/productsStyle';
import { useRef, useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const Map = React.lazy(() => import('./Map'));

interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const location = useLocation();
  const { formattedScore } = location.state || {};
  const [sort, setSort] = useState('reviewDate,DESC');
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 4;

  const fetchReviews = async (page: number, size: number, sort: string) => {
    return await getProductsReview(accommodationID, page, size, sort);
  };

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

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
    setCurrentPage(0);
  };

  //리뷰 스크롤 이동
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
    <StyledProductsContainer>
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

      <Suspense fallback={<LoadingSpinner />}>
        <Map
          lat={Number(accommodationData.latitude)}
          lng={Number(accommodationData.longitude)}
        />
      </Suspense>

      {!isLoadingReview && productReview && (
        <div ref={reviewRef}>
          <Review
            productReview={productReview}
            name={accommodationData.name}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            score={formattedScore}
            sort={sort}
            handleSortChange={handleSortChange}
          />
        </div>
      )}
    </StyledProductsContainer>
  );
};

export default ProductsContainer;
