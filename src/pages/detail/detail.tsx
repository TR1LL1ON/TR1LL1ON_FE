import DetailContainer from '@/components/template/detail/DetailContainer';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { accomodationID } = useParams<{ accomodationID: string }>();
  console.log(accomodationID);

  return (
    <div>
      <DetailContainer accomodationID={accomodationID} />
    </div>
  );
};

export default Detail;
