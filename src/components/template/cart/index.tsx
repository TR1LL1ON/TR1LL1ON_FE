import {
  StyledButton,
  StyledHLine,
  StyledTitle,
  StyledWrapper,
} from '../../../style/payment/paymentStyle';
import AccountModal from '../../layout/modal/accountModal';
import CartDetail from './CartDetail';
import CartList from './CartList';
import CartListController from './CartListController';

const CartContainer = () => {
  return (
    <StyledWrapper
      style={{
        paddingInline: '5rem',
        fontFamily:
          'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
      }}>
      <StyledTitle $mt="1.5rem">장바구니</StyledTitle>
      <CartListController />
      <StyledHLine $mBlock="1rem" />
      <CartList />
      <StyledHLine $mBlock="1rem" />
      <CartDetail />
      <StyledButton style={{ width: '100%' }} $variant="primary">
        결제하기
      </StyledButton>
      <AccountModal />
    </StyledWrapper>
  );
};

export default CartContainer;
