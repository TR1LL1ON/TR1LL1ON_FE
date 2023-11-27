import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import ProductsFacility from './ProductsFacility';
import GuestModal from './GuestModal/guestModal';
import { useState, useEffect } from 'react';
import { AccommodationData, GuestCount } from '@/interfaces/interface';
import Review from './Review';
import { postAccomodation } from '@/api/service';

interface ProductsContainerProps {
  accomodationID: string;
}
const ProductsContainer = ({ accomodationID }: ProductsContainerProps) => {
  console.log(accomodationID);
  const [guestCount, setGuestCount] = useState<GuestCount>({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [totalGuestCount, setTotalGuestCount] = useState(0);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const handleGuestModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGuestModal(true);
  };
  const handleSaveGuestCount = (newGuestCount: number) => {
    setTotalGuestCount(newGuestCount); //게스트 수 상태 업데이트
    setShowGuestModal(false);
  };

  const [accommodationData, setAccommodationData] =
    useState<AccommodationData | null>(null);
  useEffect(() => {
    const fetchAccommodationData = async () => {
      try {
        const res = await postAccomodation(accomodationID);
        console.log('응답 데이터:', res.accomodationData);
        setAccommodationData(res.accomodationData);
      } catch (error) {
        console.error('객실 상세 정보를 불러오는데 실패했습니다', error);
      }
    };
    fetchAccommodationData();
  }, [accomodationID]);
  return (
    <>
      {accommodationData && (
        <>
          <ImageContainer imgData={accommodationData.image} />
          <AccommodationInfo
            onOpen={handleGuestModal}
            guestCount={guestCount}
            totalGuestCount={totalGuestCount}
            infoData={accommodationData}
          />
          {showGuestModal && (
            <GuestModal
              guestCount={guestCount}
              setGuestCount={setGuestCount}
              onClose={() => setShowGuestModal(false)}
              onSave={handleSaveGuestCount}
            />
          )}
          <RoomCard accomodationID={accomodationID} />
          {/* <RoomCard accomodationID={accommodationData.accomodation_id} /> */}
          <ProductsFacility />
          <Review />
        </>
      )}
      {!accommodationData && <div>loading...</div>}
    </>
  );
};

export default ProductsContainer;
