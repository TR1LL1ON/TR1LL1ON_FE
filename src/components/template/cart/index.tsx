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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

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
      const res = await getCarts();
      setCartsData(res.data);
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
              cartsData={cartsData}
              checkedCartsData={checkedCartsData}
              setCheckedCartsData={setCheckedCartsData}
              fetchData={fetchData}
            />
            <StyledHLine $mBlock="1rem" />
            <CartList
              cartsData={cartsData}
              checkedCartsData={checkedCartsData}
              setCheckedCartsData={setCheckedCartsData}
              fetchData={fetchData}
            />
            <StyledHLine $mBlock="1rem" />
            <CartDetail checkedCartsData={checkedCartsData} />
            <StyledButton
              style={{ width: '100%' }}
              $variant="primary"
              onClick={handleSubmit}>
              결제하기
            </StyledButton>
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
