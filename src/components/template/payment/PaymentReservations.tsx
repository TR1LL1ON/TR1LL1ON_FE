import { SummaryData } from '@/api/service';
import { reservationState } from '@/states/atom';
import {
  StyledFlexContainer,
  StyledLabel,
  StyledSpacer,
  StyledSubTitle,
  StyledText,
  StyledWrapper,
} from '@/style/payment/paymentStyle';
import { useRecoilValue } from 'recoil';

interface Props {
  reservationData: SummaryData | undefined;
}

const PaymentReservations = () => {
  const reservation = useRecoilValue(reservationState);

  return (
    <>
      <StyledSubTitle>예약 정보</StyledSubTitle>
      <StyledLabel>날짜</StyledLabel>
      <StyledFlexContainer>
        <StyledWrapper>
          <StyledFlexContainer $gap="0.5rem">
            <StyledText $fontWeight={600}>
              {reservation.checkIn} ~ {reservation.checkOut}
            </StyledText>
          </StyledFlexContainer>
        </StyledWrapper>
      </StyledFlexContainer>

      <StyledSpacer $height="1rem" />

      <StyledLabel>게스트</StyledLabel>
      <StyledFlexContainer>
        <StyledWrapper>
          <StyledText>성인 2명</StyledText>
        </StyledWrapper>
      </StyledFlexContainer>
    </>
  );
};

export default PaymentReservations;
