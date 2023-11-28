import { Cart } from '@/interfaces/interface';
import { StyledDeleteButton } from '@/style/cart/cartStyle';
import {
  StyledCheckboxInput,
  StyledFlexContainer,
  StyledImageContainer,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';

interface ICartCardProps {
  cartData: Cart;
}

const CartCard = ({ cartData }: ICartCardProps) => {
  const checkIn = new Date(cartData.check_in);
  const checkOut = new Date(cartData.check_out);

  const formatCheckIn = `${(checkIn.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${checkIn.getDate().toString().padStart(2, '0')}`;
  const formatCheckOut = `${(checkOut.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${checkOut.getDate().toString().padStart(2, '0')}`;
  const formatCartDate = `${formatCheckIn} - ${formatCheckOut} ${
    checkOut.getDate() - checkIn.getDate()
  }박`;
  const formatCartPrice = cartData.price.toLocaleString();

  return (
    <StyledFlexContainer
      style={{
        width: '100%',
        padding: '15px 0',
      }}
      $alignItems="flex-start"
      $gap="0.75rem">
      <StyledWrapper style={{ width: 'auto', height: '24px' }}>
        <StyledCheckboxInput type="checkbox" />
      </StyledWrapper>
      <StyledImageContainer $w="auto" style={{ overflow: 'unset' }}>
        <img
          src="https://source.unsplash.com/random"
          style={{
            width: '124px',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </StyledImageContainer>

      <StyledFlexContainer
        style={{ width: '100%', height: '100%' }}
        $flexDirection="column"
        $alignItems="flex-start">
        <StyledText $fontSize="0.75rem" $opacity={0.7}>
          호텔
        </StyledText>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText $fontWeight={700}>
            {cartData.accomodation_name}
          </StyledText>
          <StyledDeleteButton>삭제</StyledDeleteButton>
        </StyledFlexContainer>
        <StyledText $fontSize="0.75rem">{`${cartData.product_name} | ${cartData.person_number}인`}</StyledText>
        <StyledText $fontSize="0.75rem">
          {cartData.accomodation_address}
        </StyledText>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText $fontSize="0.75rem">{formatCartDate}</StyledText>
          <StyledText $fontSize="1rem" $fontWeight={700}>
            {formatCartPrice}원
          </StyledText>
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default CartCard;
