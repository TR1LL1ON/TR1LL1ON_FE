import { StyledFlexContainer, StyledTitle } from '@/style/payment/paymentStyle';
import { BsCartX } from 'react-icons/bs';

const EmptyCart = () => {
  return (
    <StyledFlexContainer $justifyContent="center">
      <StyledFlexContainer
        $flexDirection="column"
        $justifyContent="center"
        $gap="2rem"
        style={{ width: '50%', margin: '5rem 0' }}>
        <BsCartX style={{ width: '50%', height: '100%' }} />
        <StyledFlexContainer $flexDirection="column" $justifyContent="center">
          <StyledTitle $mb="0.5rem" $mt="0">
            장바구니가 비어있습니다.
          </StyledTitle>
          <StyledTitle $mb="0" $mt="0">
            선택하신 상품을 장바구니에 담아주세요.
          </StyledTitle>
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledFlexContainer>
  );
};

export default EmptyCart;
