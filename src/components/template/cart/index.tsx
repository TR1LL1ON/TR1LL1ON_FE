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

export interface IFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const CartContainer = () => {
  const navigate = useNavigate();
  const [cartsData, setCartsData] = useState<Cart[]>([]);
  const [checkedCartsData, setCheckedCartsData] = useState<Cart[]>([]);

  const handleSubmit = (): void => {
    const productIds = checkedCartsData.map((cart) => cart.productId);
    const queryString = productIds.map((id) => `productId=${id}`).join('&');

    navigate(`/payment?${queryString}`);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await getCarts();
        setCartsData([
          {
            cartItemId: 1,
            accommodationId: 1,
            accomodationName: '신라호텔',
            accomodationAddress: '제주특별자치도 서귀포시 중문관광로72번길 75',
            accomodationCategory: 'B02010100',
            productId: 1,
            productName: '더블 스탠다드룸',
            checkIn: '2023-11-21',
            checkOut: '2023-11-22',
            personNumber: 2,
            price: 20000,
          },
          {
            cartItemId: 2,
            accommodationId: 1,
            accomodationName: '신라호텔',
            accomodationAddress: '제주특별자치도 서귀포시 중문관광로72번길 75',
            accomodationCategory: 'B02010100',
            productId: 2,
            productName: '더블 스탠다드룸',
            checkIn: '2023-11-21',
            checkOut: '2023-11-22',
            personNumber: 2,
            price: 20000,
          },
          {
            cartItemId: 3,
            accommodationId: 1,
            accomodationName: '신라호텔',
            accomodationAddress: '제주특별자치도 서귀포시 중문관광로72번길 75',
            accomodationCategory: 'B02010100',
            productId: 3,
            productName: '더블 스탠다드룸',
            checkIn: '2023-11-21',
            checkOut: '2023-11-22',
            personNumber: 2,
            price: 20000,
          },
        ]);
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
      <CartListController
        cartsData={cartsData}
        checkedCartsData={checkedCartsData}
        setCheckedCartsData={setCheckedCartsData}
      />
      <StyledHLine $mBlock="1rem" />
      <CartList
        cartsData={cartsData}
        checkedCartsData={checkedCartsData}
        setCheckedCartsData={setCheckedCartsData}
      />
      <StyledHLine $mBlock="1rem" />
      <CartDetail />
      <StyledButton
        style={{ width: '100%' }}
        $variant="primary"
        onClick={handleSubmit}>
        결제하기
      </StyledButton>
    </StyledWrapper>
  );
};

export default CartContainer;
