import { StyledDeleteButton } from '../../../style/cart/cartStyle';
import {
  StyledCheckboxInput,
  StyledFlexContainer,
  StyledText,
} from '../../../style/payment/paymentStyle';

const CartListController = () => {
  return (
    <StyledFlexContainer style={{ width: '100%', marginBottom: '1.625rem' }}>
      <StyledFlexContainer $justifyContent="flex-start" $gap="12px">
        <StyledCheckboxInput type="checkbox" />
        <StyledText $fontWeight={700}>전체선택(3/3)</StyledText>
      </StyledFlexContainer>
      <StyledDeleteButton>선택삭제</StyledDeleteButton>
    </StyledFlexContainer>
  );
};

export default CartListController;
