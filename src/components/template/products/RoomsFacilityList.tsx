import { roomsIconMapping, roomsTextMapping } from './iconAndTextMapping';

interface RoomsFacilityListProps {
  roomsFacility: string[];
}

const RoomsFacilityList: React.FC<RoomsFacilityListProps> = ({
  roomsFacility,
}) => {
  console.log('roomFacility', roomsFacility);
  // 아이콘과 텍스트 매핑
  const facilityElements = roomsFacility.map((facilityKey, index) => (
    <p className="mapping" key={`room-facility-${index}`}>
      {roomsIconMapping[facilityKey as keyof typeof roomsIconMapping]}
      {roomsTextMapping[facilityKey as keyof typeof roomsTextMapping]}
    </p>
  ));

  return <>{facilityElements}</>;
};
export default RoomsFacilityList;
