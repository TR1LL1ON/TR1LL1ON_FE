// import ImageContainer from './ImageContainer';
import DetailImageContainer from './DetailImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import DetailService from './DetailService';
import GuestModal from './GuestModal/guestModal';
import { useEffect, useState } from 'react';
import { GuestCount, Room } from '@/interfaces/interface';
import Review from './Review';

import { postAccomodation } from '@/api/service';
import useGetParam from '@/hooks/useGetParams ';

interface DetailContainerProps {}
const DetailContainer = ({}: DetailContainerProps) => {
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

  const accomodationID = useGetParam('accomodationID');
  const [roomData, setRoomData] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (accomodationID) {
        setIsLoading(true); // 데이터 로딩 시작
        try {
          const res = await postAccomodation(accomodationID);
          setRoomData(res.accomodationData.rooms);
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
  console.log(roomData);

  return (
    <>
      {/* <ImageContainer />  기존 */}
      <DetailImageContainer /> {/* 슬라이드 */}
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
      {roomData.map((room) => (
        <RoomCard key={room.room_id} roomData={room} />
      ))}
      <DetailService />
      <Review />
    </>
  );
};

export default DetailContainer;
