import { useLocation } from 'react-router-dom';

function useGetQuery(params: string) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return query.get(params);
}

export default useGetQuery;
