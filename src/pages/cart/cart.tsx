import CartList from '../../components/template/cart/CartList';
import CartListController from '../../components/template/cart/CartListController';
import {
  StyledHLine,
  StyledTitle,
  StyledWrapper,
} from '../../style/payment/paymentStyle';

const Cart = () => {
  return (
    <StyledWrapper
      style={{
        paddingInline: '5rem',
        fontFamily:
          'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
      }}>
      <StyledTitle $mt="4rem">장바구니</StyledTitle>
      <CartListController />
      <StyledHLine $mBlock="1rem" />
      <CartList />
    </StyledWrapper>
  );
};

export default Cart;
