import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import ProductsFacility from './ProductsFacility';
import GuestModal from './GuestModal/guestModal';
import { useState, useEffect } from 'react';
import { GuestCount, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation } from '@/api/service';
import Map from './Map';

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

  const [roomData, setRoomData] = useState<Room[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (accomodationID) {
        setIsLoading(true); // 데이터 로딩 시작
        try {
          const res = await getAccommodation(accomodationID);
          console.log(res);
          setRoomData(res?.rooms);
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message);
          }
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
      {roomData?.map((room) => (
        <RoomCard
          key={room.roomId}
          roomData={room}
          accomodationID={accomodationID}
        />
      ))}
      <ProductsFacility />
      <Map lat={37.5649867} lng={126.985575} />
      <Review />
    </>
  );
};

export default ProductsContainer;
