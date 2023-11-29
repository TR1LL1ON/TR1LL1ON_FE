import { client } from '@/api/service';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const useProducts = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', params.get('category'), params.get('region')],
    queryFn: async () => {
      const response = await client.get('products', {
        params: {
          category: params.get('category'),
          region: params.get('region'),
        },
      });
      return response.data;
    },
  });

  return { data, isLoading, error };
};

export default useProducts;
