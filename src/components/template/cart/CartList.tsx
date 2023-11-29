import { StyledCartList } from '@/style/cart/cartStyle';
import CartCard from './CartCard';
import { Cart } from '@/interfaces/interface';

interface ICartListProps {
  cartsData: Cart[];
  checkedCartsData: Cart[];
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
}

const CartList = ({
  cartsData,
  checkedCartsData,
  setCheckedCartsData,
}: ICartListProps) => {
  return (
    <StyledCartList $flexDirection="column" $justifyContent="flex-start">
      {cartsData &&
        cartsData.map((cart, index) => (
          <CartCard
            cartData={cart}
            key={index}
            checkedCartsData={checkedCartsData}
            setCheckedCartsData={setCheckedCartsData}
          />
        ))}
    </StyledCartList>
  );
};

export default CartList;
