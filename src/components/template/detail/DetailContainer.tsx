// import ImageContainer from './ImageContainer';
import DetailImageContainer from './DetailImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import DetailService from './DetailService';
import GuestModal from './GuestModal/guestModal';
import { useEffect, useState } from 'react';
import { GuestCount } from '@/interfaces/interface';
import Review from './Review';

import { postAccomodation } from '@/api/service';
import useGetQuery from '@/hooks/useGetQuery';

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

  const accomodationID = useGetQuery('accomodationID');
  console.log(accomodationID);

  useEffect(() => {
    const fetchData = async () => {
      if (accomodationID) {
        try {
          const res = await postAccomodation(accomodationID);
          console.log(res);
        } catch (err) {
          console.log('에러');
        }
      }
    };

    fetchData();
  }, []); // accomodationID가 변경될 때마다 fetchData를 다시 실행
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
      <RoomCard />
      <DetailService />
      <Review />
    </>
  );
};

export default DetailContainer;
