import {
  StyledFlexContainer,
  StyledSpacer,
  StyledSubTitle,
  StyledTitle,
} from '@/style/payment/paymentStyle';
import { Link, useLocation } from 'react-router-dom';
import {
  StyledConfirmText,
  StyledPaymentContainer,
} from './StyledPaymentConfirm';
import { OrderRequest } from '@/interfaces/interface';
import { useRecoilValue } from 'recoil';
import { cardState } from '@/states/atom';
import { paymentOption } from '@/constants';
import { StyledButton } from '@/style/common/commonStyle';

const PaymentConfirm = () => {
  const location = useLocation();
  const cardData = useRecoilValue(cardState);
  const orderData: OrderRequest = location.state;

  const paymentType = orderData.payment;

  // korean time
  const date = new Date();
  const koreanTime = date.toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });

  return (
    <StyledPaymentContainer>
      <StyledTitle>결제 완료</StyledTitle>
      <StyledSubTitle>trillion의 예약이 완료되었습니다.</StyledSubTitle>
      <StyledFlexContainer
        $gap="0.5rem"
        $flexDirection="column"
        $alignItems="start">
        <StyledFlexContainer $gap="2rem">
          <StyledConfirmText>결제일자</StyledConfirmText>
          <StyledConfirmText $fontWeight={600}>{koreanTime}</StyledConfirmText>
        </StyledFlexContainer>

        <StyledFlexContainer $gap="2rem">
          <StyledConfirmText>결제방식</StyledConfirmText>
          <StyledConfirmText $fontWeight={600}>
            {paymentOption[orderData.payment]}
          </StyledConfirmText>
          {paymentType === 'CARD' && (
            <StyledConfirmText>
              {cardData?.cardNumber.first}-{cardData?.cardNumber.first}
              -****-****
            </StyledConfirmText>
          )}
        </StyledFlexContainer>
      </StyledFlexContainer>
      <StyledSpacer $height="2rem" />
      <StyledButton $variant="primary">
        <Link to={'/mypage'}>예약내역 보러가기</Link>
      </StyledButton>
    </StyledPaymentContainer>
  );
};

export default PaymentConfirm;
