import { StyledCartList } from '../../../style/cart/cartStyle';
import CartCard from './CartCard';

const CartList = () => {
  return (
    <StyledCartList $flexDirection="column" $justifyContent="flex-start">
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </StyledCartList>
  );
};

export default CartList;
