import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import AllFacility from './AllFacility';
import GuestModal from './GuestModal/guestModal';
import { useState, useEffect } from 'react';
import {
  AccommodationData,
  Facility,
  GuestCount,
} from '@/interfaces/interface';
import Review from './Review';
import { postAccomodation } from '@/api/service';

interface ProductsContainerProps {
  accomodationID: string;
}
const ProductsContainer = ({ accomodationID }: ProductsContainerProps) => {
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

  const [roomsFacilityData, setRoomsFacilityData] = useState<
    (keyof Facility)[]
  >([]);

  useEffect(() => {
    const fetchAccommodationData = async () => {
      try {
        const res = await postAccomodation(accomodationID);
        setAccommodationData(res.accomodationData);

        const facilities = res.accomodationData.rooms.flatMap(
          (room) => room.facility,
        );

        const uniqueFacilities: (keyof Facility)[] = Array.from(
          facilities.reduce((acc, facility) => {
            Object.entries(facility).forEach(([key, value]) => {
              if (value) acc.add(key as keyof Facility);
            });
            return acc;
          }, new Set<keyof Facility>()),
        );

        setRoomsFacilityData(uniqueFacilities);
      } catch (error) {
        console.error('객실 상세 정보를 불러오는데 실패했습니다', error);
      }
    };

    if (accomodationID) {
      fetchAccommodationData();
    }
  }, [accomodationID]);

  // console.log('roomsFacilityData', roomsFacilityData);
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
            productsFacility={accommodationData.facility}
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
          <AllFacility
            productsFacility={accommodationData.facility}
            roomsFacility={roomsFacilityData}
          />
          <Review />
        </>
      )}
      {!accommodationData && <div>loading...</div>}
    </>
  );
};

export default ProductsContainer;
