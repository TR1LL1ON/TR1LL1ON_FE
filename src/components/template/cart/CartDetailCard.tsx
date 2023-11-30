import { Cart } from '@/interfaces/interface';
import { StyledFlexContainer, StyledText } from '@/style/payment/paymentStyle';

interface ICartDetailCard {
  cart: Cart;
}

const CartDetailCard = ({ cart }: ICartDetailCard) => {
  const checkIn = new Date(cart.checkIn);
  const checkOut = new Date(cart.checkOut);
  const nights = checkOut.getDate() - checkIn.getDate();
  const formatCartPrice = cart.price.toLocaleString();
  const accommodationCost = (cart.price * nights).toLocaleString();

  return (
    <StyledFlexContainer style={{ width: '100%', padding: '10px 0' }}>
      <StyledText>
        {formatCartPrice} x {nights}박 - {cart.accommodationName}
      </StyledText>
      <StyledText>{accommodationCost}원</StyledText>
    </StyledFlexContainer>
  );
};

export default CartDetailCard;
