import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import DetailService from './DetailService';

interface DetailContainerProps {
  onOpen: (e: React.MouseEvent) => void;
}
const DetailContainer = ({ onOpen }: DetailContainerProps) => {
  return (
    <>
      <ImageContainer />
      <AccommodationInfo onOpen={onOpen} />
      <RoomCard />
      <DetailService />
    </>
  );
};

export default DetailContainer;
