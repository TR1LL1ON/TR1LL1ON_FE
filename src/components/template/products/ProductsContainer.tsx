import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
<<<<<<< HEAD
import AllFacility from './AllFacility';
import { useState, useEffect } from 'react';
import { AccommodationData, Facility, Room } from '@/interfaces/interface';
=======
import ProductsFacility from './ProductsFacility';
import { Room } from '@/interfaces/interface';
>>>>>>> 4e0cdb720d69740ba8a4f06c37f727d385ba4c5f
import Review from './Review';
import { getAccommodation } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';

interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
<<<<<<< HEAD
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
=======
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],
    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  const roomData: Room[] = data?.data.rooms || [];
  console.log(roomData);
>>>>>>> 4e0cdb720d69740ba8a4f06c37f727d385ba4c5f

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
<<<<<<< HEAD
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
=======
      <ImageContainer />
      {roomData.map((room) => (
        <RoomCard key={room.roomId} roomData={room} />
      <ProductsFacility />
      <Map lat={37.5649867} lng={126.985575} />
      <Review />
>>>>>>> 4e0cdb720d69740ba8a4f06c37f727d385ba4c5f
    </>
  );
};

export default ProductsContainer;
