import { StyledCartList } from '@/style/cart/cartStyle';
import CartCard from './CartCard';
import { Cart } from '@/interfaces/interface';
import { useRecoilValue } from 'recoil';
import { cartsDataState } from '@/states/atom';

interface ICartListProps {
  checkedCartsData: Cart[];
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
  fetchData: () => void;
}

const CartList = ({
  checkedCartsData,
  setCheckedCartsData,
  fetchData,
}: ICartListProps) => {
  const cartsData = useRecoilValue(cartsDataState);
  return (
    <StyledCartList $flexDirection="column" $justifyContent="flex-start">
      {cartsData.map((cart, index) => (
        <CartCard
          cartData={cart}
          key={index}
          checkedCartsData={checkedCartsData}
          setCheckedCartsData={setCheckedCartsData}
          fetchData={fetchData}
        />
      ))}
    </StyledCartList>
  );
};

export default CartList;
