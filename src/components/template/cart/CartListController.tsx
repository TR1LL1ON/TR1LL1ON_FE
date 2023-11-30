import { deleteCarts } from '@/api/service';
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
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
  fetchData: () => void;
}

const CartListController = ({
  cartsData,
  checkedCartsData,
  setCheckedCartsData,
  fetchData,
}: ICartListControllerProps) => {
  const cartsTotal = cartsData.length !== 0 ? cartsData.length : 0;
  const checkedCartsTotal =
    checkedCartsData.length !== 0 ? checkedCartsData.length : 0;

  const handleAllCheck = (): void => {
    if (cartsTotal !== checkedCartsTotal) {
      setCheckedCartsData(cartsData);
    } else {
      setCheckedCartsData([]);
    }
  };

  const handleCheckedCartDelete = async (): Promise<void> => {
    try {
      const deletePromise = checkedCartsData.map(async (cart) => {
        await deleteCarts(cart.cartItemId);
      });

      await Promise.all(deletePromise);

      fetchData();
      setCheckedCartsData([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledFlexContainer style={{ width: '100%' }}>
      <StyledFlexContainer $justifyContent="flex-start" $gap="12px">
        <StyledCheckboxInput
          type="checkbox"
          checked={cartsTotal === checkedCartsTotal}
          onChange={() => handleAllCheck()}
        />
        <StyledText $fontWeight={700}>
          전체선택({checkedCartsTotal}/{cartsTotal})
        </StyledText>
      </StyledFlexContainer>
      <StyledDeleteButton onClick={handleCheckedCartDelete}>
        선택삭제
      </StyledDeleteButton>
    </StyledFlexContainer>
  );
};

export default CartListController;
