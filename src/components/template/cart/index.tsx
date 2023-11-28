import {
  StyledButton,
  StyledHLine,
  StyledTitle,
  StyledWrapper,
} from '@/style/payment/paymentStyle';
import CartDetail from './CartDetail';
import CartList from './CartList';
import CartListController from './CartListController';
import { useEffect, useState } from 'react';
import { Cart } from '@/interfaces/interface';
import { getCarts } from '@/api/service';

export interface IFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const CartContainer = () => {
  const [cartsData, setCartsData] = useState<Cart[]>([]);
  const [checkedCartsData, setCheckedCartsData] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await getCarts();
        setCartsData(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledWrapper
      style={{
        paddingInline: '5rem',
        fontFamily:
          'Pretendard, system-ui, Avenir, Helvetica, Arial, sans-serif',
      }}>
      <StyledTitle $mt="1.5rem">장바구니</StyledTitle>
      <CartListController />
      <StyledHLine $mBlock="1rem" />
      <CartList
        cartsData={cartsData}
        checkedCartsData={checkedCartsData}
        setCheckedCartsData={setCheckedCartsData}
      />
      <StyledHLine $mBlock="1rem" />
      <CartDetail />
      <StyledButton style={{ width: '100%' }} $variant="primary">
        결제하기
      </StyledButton>
    </StyledWrapper>
  );
};

export default CartContainer;
