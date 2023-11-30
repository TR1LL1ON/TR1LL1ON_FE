import { StyledCartList } from '@/style/cart/cartStyle';
import CartCard from './CartCard';
import { Cart } from '@/interfaces/interface';

interface ICartListProps {
  cartsData: Cart[];
  checkedCartsData: Cart[];
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
  fetchData: () => void;
}

const CartList = ({
  cartsData,
  checkedCartsData,
  setCheckedCartsData,
  fetchData,
}: ICartListProps) => {
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
