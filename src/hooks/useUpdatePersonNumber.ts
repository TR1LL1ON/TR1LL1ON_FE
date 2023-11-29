import { orderState } from '@/states/atom';
import { useSetRecoilState } from 'recoil';

const useUpdatePersonNumber = () => {
  const setOrdersData = useSetRecoilState(orderState);

  const updatePersonNumber = (productId: number, person: number) => {
    setOrdersData((prevOrdersData) => {
      const updatedOrdersData = prevOrdersData.orders.map((order) => {
        if (order.product_id === productId) {
          return { ...order, person_number: person };
        }

        return order;
      });

      return { ...prevOrdersData, orders: updatedOrdersData };
    });
  };

  return { updatePersonNumber };
};

export default useUpdatePersonNumber;
