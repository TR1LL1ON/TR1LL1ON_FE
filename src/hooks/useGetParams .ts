import { useParams } from 'react-router-dom';

function useGetParam(param: string) {
  const params = useParams();
  
  return params[param];
}

export default useGetParam;
