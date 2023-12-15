import { deleteCart } from '@/api/service';
import { Cart } from '@/interfaces/interface';
import { cartsDataState } from '@/states/atom';
import { StyledDeleteButton } from '@/style/cart/cartStyle';
import {
  StyledCheckboxInput,
  StyledFlexContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { useRecoilValue } from 'recoil';
import { AxiosError } from 'axios';

interface ICartListControllerProps {
  checkedCartsData: Cart[];
  setCheckedCartsData: React.Dispatch<React.SetStateAction<Cart[]>>;
  fetchData: () => void;
}

const CartListController = ({
  checkedCartsData,
  setCheckedCartsData,
  fetchData,
}: ICartListControllerProps) => {
  const cartsData = useRecoilValue(cartsDataState);
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
        await deleteCart(cart.cartItemId);
      });

      await Promise.all(deletePromise);

      fetchData();
      setCheckedCartsData([]);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        alert('장바구니에 담겨 있지 않은 상품입니다.');
      }
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
