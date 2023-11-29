import { useState, useEffect } from 'react';
import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import { AccommodationData, Facility, Room } from '@/interfaces/interface';
import Review from './Review';
import { getAccommodation } from '@/api/service';
import Map from './Map';
import { useQuery } from '@tanstack/react-query';
import AllFacility from './AllFacility';

interface ProductsContainerProps {
  accommodationID: string;
}

const ProductsContainer = ({ accommodationID }: ProductsContainerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accommodation', accommodationID],
    queryFn: () => getAccommodation(accommodationID),
    enabled: !!accommodationID,
  });

  const roomData: Room[] = data?.data.rooms || [];

  console.log(roomData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const [accommodationData, setAccommodationData] = useState<
    AccommodationData | any
  >(null);

  const [roomsFacilityData, setRoomsFacilityData] = useState<
    (keyof Facility)[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      if (accommodationID) {
        try {
          const res = await getAccommodation(accommodationID);

          setAccommodationData(res.data.accommodationData);
          const facilities = res.data.accommodationData.rooms.flatMap(
            (room: any) => room.facility,
          );

          const uniqueFacilities: (keyof Facility)[] = Array.from(
            facilities.reduce((acc: any, facility: any) => {
              Object.entries(facility).forEach(([key, value]) => {
                if (value) acc.add(key as keyof Facility);
              });
              return acc;
            }, new Set<keyof Facility>()),
          );

          setRoomsFacilityData(uniqueFacilities);
        } catch (err) {
          console.log('에러');
        }
      }
    };

    fetchData();
  }, [accommodationID]);

  return (
    <>
      <ImageContainer imgData={accommodationData.image} />
      <AccommodationInfo
        infoData={accommodationData}
        productsFacility={accommodationData.facility}
      />

      {roomData.map((room) => (
        <RoomCard key={room.roomId} roomData={room} />
      ))}

      <AllFacility
        productsFacility={accommodationData.facility}
        roomsFacility={roomsFacilityData}
      />
      <Map lat={37.5649867} lng={126.985575} />
      <Review />
    </>
  );
};

export default ProductsContainer;
