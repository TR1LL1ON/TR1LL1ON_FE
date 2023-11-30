import { Cart } from '@/interfaces/interface';
import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import CartDetailCard from './CartDetailCard';

interface ICartDetailProps {
  checkedCartsData: Cart[];
}

const CartDetail = ({ checkedCartsData }: ICartDetailProps) => {
  const accommodationCosts = checkedCartsData.map((cart) => {
    const checkIn = new Date(cart.checkIn);
    const checkOut = new Date(cart.checkOut);
    const nights = checkOut.getDate() - checkIn.getDate();
    return cart.price * nights;
  });
  const totalPrice = accommodationCosts
    .reduce((acc, cur) => acc + cur, 0)
    .toLocaleString();

  return (
    <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
      <StyledSubTitle $mt="0" $mb="0">
        요금 세부정보
      </StyledSubTitle>
      <StyledFlexContainer
        style={{ width: '100%' }}
        $flexDirection="column"
        $alignItems="flex-start">
        {checkedCartsData.map((cart) => (
          <CartDetailCard cart={cart} key={cart.cartItemId} />
        ))}
      </StyledFlexContainer>
      <StyledHLine $mBlock="1rem" />
      <StyledFlexContainer style={{ width: '100%' }}>
        <StyledSubTitle $mt="0">총합계</StyledSubTitle>
        <StyledSubTitle $mt="0">{totalPrice}원</StyledSubTitle>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default CartDetail;
