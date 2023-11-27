import DetailImageContainer from './DetailImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import DetailService from './DetailService';
import GuestModal from './GuestModal/guestModal';
import { useState } from 'react';
import { GuestCount } from '@/interfaces/interface';
import Review from './Review';

interface DetailContainerProps {
  accomodationID: string;
}
const DetailContainer = ({ accomodationID }: DetailContainerProps) => {
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
      <DetailImageContainer />
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
      <DetailService />
      <Review />
    </>
  );
};

export default DetailContainer;
