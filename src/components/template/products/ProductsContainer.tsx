import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import AllFacility from './AllFacility';
import GuestModal from './GuestModal/guestModal';
import { useState, useEffect } from 'react';
import {
  GuestCount,
  Room,
  AccommodationData,
  Facility,
} from '@/interfaces/interface';
import Review from './Review';
import { postAccomodation } from '@/api/service';
import Map from './Map';

interface ProductsContainerProps {
  accomodationID: string;
}
const ProductsContainer = ({ accomodationID }: ProductsContainerProps) => {
  // console.log(accomodationID);
  const [guestCount, setGuestCount] = useState<GuestCount>({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [totalGuestCount, setTotalGuestCount] = useState(0);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [accommodationData, setAccommodationData] =
    useState<AccommodationData | null>(null);
  const [roomsFacilityData, setRoomsFacilityData] = useState<
    (keyof Facility)[]
  >([]);
  const handleGuestModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGuestModal(true);
  };
  const handleSaveGuestCount = (newGuestCount: number) => {
    setTotalGuestCount(newGuestCount); //게스트 수 상태 업데이트
    setShowGuestModal(false);
  };

  const [roomData, setRoomData] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (accomodationID) {
        setIsLoading(true); // 데이터 로딩 시작
        try {
          const res = await postAccomodation(accomodationID);
          setAccommodationData(res.accomodationData);
          setRoomData(res.accomodationData.rooms);

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
        } catch (err) {
          console.log('에러');
        } finally {
          setIsLoading(false); // 데이터 로딩 완료
        }
      }
    };

    fetchData();
  }, [accomodationID]);

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중인 경우 로딩 표시
  }

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
          {roomData.map((room) => (
            <RoomCard
              key={room.room_id}
              roomData={room}
              accomodationID={accomodationID}
            />
          ))}
          <AllFacility
            productsFacility={accommodationData.facility}
            roomsFacility={roomsFacilityData}
          />
          <Map lat={37.5649867} lng={126.985575} />
          <Review />
        </>
      )}
    </>
  );
};

export default ProductsContainer;
