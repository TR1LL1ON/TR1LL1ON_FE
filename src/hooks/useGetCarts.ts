import { getCarts } from '@/api/service';
import { Cart } from '@/interfaces/interface';

const useGetCarts = () => {
  const fetchCarts = async (): Promise<Cart[]> => {
    try {
      const res = await getCarts();

      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return fetchCarts;
};

export default useGetCarts;
