import {
  StyledGridContainer,
  StyledHLine,
  StyledSpacer,
  StyledTitle,
  StyledWrapper,
} from '@/style/payment/paymentStyle';
import PaymentDetail from './PaymentDetail';
import PaymentOptions from './PaymentOptions';
import PaymentReservations from './PaymentReservations';
import PaymentRoomList from './PaymentRoomList';
import PaymentTerms from './PaymentTerms';
import { useRecoilState } from 'recoil';
import { orderState } from '@/states/atom';
import { useMutation } from '@tanstack/react-query';
import { postOrders } from '@/api/service';
import { Order } from '@/interfaces/interface';
import useFilteredReservation from '@/hooks/useFilteredReservation';
import type { Cart } from '@/interfaces/interface';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StyledButton } from '@/style/common/commonStyle';

type SortedOrder = Pick<
  Cart,
  'productId' | 'personNumber' | 'checkIn' | 'checkOut'
> & { cartId: number };

const PaymentContainer = () => {
  const [agreement, setAgreement] = useState(false);
  const [orderData, setOrderData] = useRecoilState(orderState);
  const { filteredRooms } = useFilteredReservation();
  const navigation = useNavigate();

  const orderList: SortedOrder[] =
    filteredRooms.map((room) => ({
      productId: room.productId,
      personNumber: room.personNumber,
      checkIn: room.checkIn,
      checkOut: room.checkOut,
      cartId: room.cartItemId,
    })) || [];

  const updateOrderData = (orders: Order[]) => {
    setOrderData((prevOrders) => ({ ...prevOrders, orders: orders }));
  };

  const { mutate } = useMutation<AxiosResponse, AxiosError>({
    mutationFn: () => postOrders(orderData),
    onSuccess: () => {
      alert('결제가 완료되었습니다.');
      updateOrderData([]);
      navigation('/confirm', { state: orderData });
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        alert('결제에 실패하였습니다.');
      } else if (error.response?.status === 404) {
        alert('이미 예약된 숙소입니다.');
        navigation('/');
      }
    },
  });

  const handlePayment = () => {
    updateOrderData(orderList);
    mutate();
  };

  return (
    <>
      <StyledTitle $mt="4rem" $px="5rem">
        확인 및 결제
      </StyledTitle>
      <StyledGridContainer $px="5rem">
        <StyledWrapper>
          <PaymentReservations filteredRooms={filteredRooms} />
          <StyledHLine />
          <PaymentOptions />
          <StyledHLine />
          <PaymentTerms setAgreement={setAgreement} />
          <StyledSpacer />
          <PaymentDetail filteredRooms={filteredRooms} />
          <StyledSpacer $height="1rem" />
          <StyledButton
            style={{ backgroundColor: !agreement ? '#ebebeb' : '' }}
            disabled={!agreement}
            $variant="primary"
            onClick={handlePayment}>
            확인 및 결제
          </StyledButton>
        </StyledWrapper>

        <StyledWrapper>
          <PaymentRoomList filteredRooms={filteredRooms} />
        </StyledWrapper>
      </StyledGridContainer>
    </>
  );
};

export default PaymentContainer;
