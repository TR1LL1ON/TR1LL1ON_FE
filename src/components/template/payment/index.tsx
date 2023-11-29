import {
  StyledButton,
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
import { useRecoilValue } from 'recoil';
import { orderState, reservationState } from '@/states/atom';
import { useMutation } from '@tanstack/react-query';
import { postOrders } from '@/api/service';
import { OrderRequest } from '@/interfaces/interface';

const PaymentContainer = () => {
  const reservation = useRecoilValue(reservationState);
  const orderData = useRecoilValue(orderState);

  const orderRequestBody: OrderRequest = {
    orders: [{ ...reservation }],
    payment: orderData.payment,
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      const orderRequestBody: OrderRequest = {
        orders: [{ ...reservation }],
        payment: orderData.payment,
      };
      const response = await postOrders(orderRequestBody);
      return response.data;
    },
  });

  return (
    <>
      <StyledTitle $mt="4rem" $px="5rem">
        확인 및 결제
      </StyledTitle>
      <StyledGridContainer $px="5rem">
        <StyledWrapper>
          <PaymentReservations />
          <StyledHLine />
          <PaymentOptions />
          <StyledHLine />
          <PaymentTerms />
          <StyledSpacer />
          <PaymentDetail />
          <StyledSpacer $height="1rem" />
          <StyledButton $variant="primary">확인 및 결제</StyledButton>
        </StyledWrapper>

        <StyledWrapper>
          <PaymentRoomList />
        </StyledWrapper>
      </StyledGridContainer>
    </>
  );
};

export default PaymentContainer;
