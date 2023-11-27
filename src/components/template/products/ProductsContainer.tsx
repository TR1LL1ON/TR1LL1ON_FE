import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import ProductsFacility from './ProductsFacility';
import GuestModal from './GuestModal/guestModal';
import { useState } from 'react';
import { GuestCount } from '@/interfaces/interface';
import Review from './Review';

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

  return (
    <>
      <ImageContainer />
      <AccommodationInfo
        onOpen={handleGuestModal}
        guestCount={guestCount}
        totalGuestCount={totalGuestCount}
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
      <ProductsFacility />
      <Review />
    </>
  );
};

export default ProductsContainer;
