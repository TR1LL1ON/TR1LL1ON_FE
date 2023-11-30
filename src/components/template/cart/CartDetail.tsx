import { Cart } from '@/interfaces/interface';
import {
  StyledFlexContainer,
  StyledHLine,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import CartDetailCard from './CartDetailCard';

interface ICartDetailProps {
  checkedCartsData: Cart[];
  totalPrice: string;
}

const CartDetail = ({ checkedCartsData, totalPrice }: ICartDetailProps) => {
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
