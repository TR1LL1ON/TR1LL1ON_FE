import DetailContainer from '@/components/template/detail/DetailContainer';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { accomodationID } = useParams<{ accomodationID: string }>();
  console.log(accomodationID);

  return (
    <div>
      {accomodationID && <DetailContainer accomodationID={accomodationID} />}
    </div>
  );
};

export default Detail;
