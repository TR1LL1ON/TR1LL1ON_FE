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

const PaymentContainer = () => {
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
