import {
  StyledFlexContainer,
  StyledSubTitle,
} from '@/style/payment/paymentStyle';
import PaymentRoomItem from './PaymentRoomItem';

const PaymentRoomList = () => {
  return (
    <>
      <StyledSubTitle>숙소 정보</StyledSubTitle>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        <PaymentRoomItem type="호텔" name="포시즌스 호텔 서울" />
        <PaymentRoomItem type="호텔" name="시그니엘 서울" />
      </StyledFlexContainer>
    </>
  );
};

export default PaymentRoomList;
