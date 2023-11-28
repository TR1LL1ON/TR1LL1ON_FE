import { StyledCartList } from '@/style/cart/cartStyle';
import CartCard from './CartCard';
import { Cart } from '@/interfaces/interface';

interface ICartListProps {
  cartsData: Cart[];
}

const CartList = ({ cartsData }: ICartListProps) => {
  return (
    <StyledCartList $flexDirection="column" $justifyContent="flex-start">
      {cartsData.map((cart, index) => (
        <CartCard cartData={cart} key={index} />
      ))}
    </StyledCartList>
  );
};

export default CartList;
