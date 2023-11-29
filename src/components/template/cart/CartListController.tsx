import { Cart } from '@/interfaces/interface';
import { StyledDeleteButton } from '@/style/cart/cartStyle';
import {
  StyledCheckboxInput,
  StyledFlexContainer,
  StyledText,
} from '@/style/payment/paymentStyle';

interface ICartListControllerProps {
  cartsData: Cart[];
  checkedCartsData: Cart[];
}

const CartListController = ({
  cartsData,
  checkedCartsData,
}: ICartListControllerProps) => {
  const cartsTotal = cartsData.length !== 0 ? cartsData.length : 0;
  const checkedCartsTotal =
    checkedCartsData.length !== 0 ? checkedCartsData.length : 0;

  return (
    <StyledFlexContainer style={{ width: '100%' }}>
      <StyledFlexContainer $justifyContent="flex-start" $gap="12px">
        <StyledCheckboxInput type="checkbox" />
        <StyledText $fontWeight={700}>
          전체선택({checkedCartsTotal}/{cartsTotal})
        </StyledText>
      </StyledFlexContainer>
      <StyledDeleteButton>선택삭제</StyledDeleteButton>
    </StyledFlexContainer>
  );
};

export default CartListController;
