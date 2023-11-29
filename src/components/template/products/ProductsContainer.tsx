import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import AllFacility from './AllFacility';
import { useState, useEffect } from 'react';
import { AccommodationData, Facility, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation } from '@/api/service';
import Map from './Map';

interface ProductsContainerProps {
  accommodationID: string;
}
const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const [accommodationData, setAccommodationData] =
    useState<AccommodationData | null>(null);
  const [roomsFacilityData, setRoomsFacilityData] = useState<
    (keyof Facility)[]
  >([]);
  const [roomData, setRoomData] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (accommodationID) {
        setIsLoading(true); // 데이터 로딩 시작
        try {
          const res = await getAccommodation(accommodationID);
          console.log(res);
          setRoomData(res.data.accomodationData.rooms);
          setAccommodationData(res.data.accomodationData);
          const facilities = res.data.accomodationData.rooms.flatMap(
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
  }, [accommodationID]);

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중인 경우 로딩 표시
  }

  return (
    <>
      {accommodationData && (
        <>
          <ImageContainer imgData={accommodationData.image} />
          <AccommodationInfo
            infoData={accommodationData}
            productsFacility={accommodationData.facility}
          />
          {roomData.map((room) => (
            <RoomCard key={room.room_id} roomData={room} />
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
