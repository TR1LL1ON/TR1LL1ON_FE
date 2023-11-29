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
  checkedCartsData: Cart[];
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
}

const CartCard = ({
  cartData,
  checkedCartsData,
  setCheckedCartsData,
}: ICartCardProps) => {
  const checkIn = new Date(cartData.checkIn);
  const checkOut = new Date(cartData.checkOut);

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
  const checkedCartIds = checkedCartsData.map((item) => item.cartItemId);

  const handleCheckBoxChange = (item: any) => {
    if (checkedCartIds.includes(item.cartItemId)) {
      setCheckedCartsData((prev) =>
        prev.filter(
          (prevCartData) => prevCartData.cartItemId !== item.cartItemId,
        ),
      );
    } else {
      setCheckedCartsData((prev) => [...prev, item]);
    }
  };

  return (
    <StyledFlexContainer
      style={{
        width: '100%',
        padding: '15px 0',
      }}
      $alignItems="flex-start"
      $gap="0.75rem">
      <StyledWrapper style={{ width: 'auto', height: '24px' }}>
        <StyledCheckboxInput
          type="checkbox"
          checked={checkedCartIds.includes(cartData.cartItemId)}
          onChange={() => handleCheckBoxChange(cartData)}
        />
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
          {cartData.accomodationCategory}
        </StyledText>
        <StyledFlexContainer style={{ width: '100%' }}>
          <StyledText $fontWeight={700}>{cartData.accomodationName}</StyledText>
          <StyledDeleteButton>삭제</StyledDeleteButton>
        </StyledFlexContainer>
        <StyledText $fontSize="0.75rem">{`${cartData.productName} | ${cartData.personNumber}인`}</StyledText>
        <StyledText $fontSize="0.75rem">
          {cartData.accomodationAddress}
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
