import { postCarts } from '@/api/service';

const useAddCart = (
  checkIn: string | undefined,
  checkOut: string | undefined,
  personNumber: number,
  price: number,
  productId: number,
) => {
  const addCart = async (): Promise<unknown> => {
    try {
      const res = await postCarts(
        checkIn,
        checkOut,
        personNumber,
        price,
        productId,
      );

      return res;
    } catch (err) {
      return err;
    }
  };

  return addCart;
};

export default useAddCart;
