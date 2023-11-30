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
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import LoadingSpinner from '@/components/LoadingSpinner';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { cartsDataState } from '@/states/atom';
import useGetCarts from '@/hooks/useGetCarts';

export interface IFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const CartContainer = () => {
  const navigate = useNavigate();
  const [cartsData, setCartsData] = useRecoilState(cartsDataState);
  const [checkedCartsData, setCheckedCartsData] = useState<Cart[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const handleGetCarts = useGetCarts();

  const accommodationCosts = checkedCartsData.map((cart) => {
    const checkIn = new Date(cart.checkIn);
    const checkOut = new Date(cart.checkOut);
    const nights = checkOut.getDate() - checkIn.getDate();
    return cart.price * nights;
  });
  const totalPrice = accommodationCosts
    .reduce((acc, cur) => acc + cur, 0)
    .toLocaleString();

  const handleSubmit = (): void => {
    const idsArray = checkedCartsData.map((cart) => [
      cart.productId,
      cart.accommodationId,
    ]);
    const productQueryString = idsArray
      .map((id) => `productId=${id[0]}`)
      .join('&');
    const accommodationQueryString = idsArray
      .map((id) => `accommodationId=${id[1]}`)
      .join('&');

    navigate(`/payment?${productQueryString}?${accommodationQueryString}`);
  };

  const fetchData = async (): Promise<void> => {
    try {
      const res = await handleGetCarts();

      setCartsData(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
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
      {isLoaded ? (
        cartsData.length !== 0 ? (
          <>
            <CartListController
              checkedCartsData={checkedCartsData}
              setCheckedCartsData={setCheckedCartsData}
              fetchData={fetchData}
            />
            <StyledHLine $mBlock="1rem" />
            <CartList
              checkedCartsData={checkedCartsData}
              setCheckedCartsData={setCheckedCartsData}
              fetchData={fetchData}
            />
            <StyledHLine $mBlock="1rem" />
            <CartDetail
              checkedCartsData={checkedCartsData}
              totalPrice={totalPrice}
            />
            <StyledPaymentButton
              $variant="primary"
              onClick={handleSubmit}
              disabled={checkedCartsData.length === 0 ? true : false}>
              {totalPrice}원 결제하기
            </StyledPaymentButton>
          </>
        ) : (
          <EmptyCart />
        )
      ) : (
        <LoadingSpinner />
      )}
    </StyledWrapper>
  );
};

export default CartContainer;

const StyledPaymentButton = styled(StyledButton)`
  width: 100%;

  &:hover {
    background-color: #ad1d45;
  }
  &:disabled {
    background-color: rgba(222, 47, 95, 0.5);
    cursor: not-allowed;
  }
`;
