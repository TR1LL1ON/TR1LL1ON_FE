import styled from 'styled-components';
import GuestAgeGroup from './guestAgeGroup';
import { StyledFlexContainer } from '../../../../style/payment/paymentStyle';

interface GuestContentProps {}

export default function GuestContent({}: GuestContentProps) {
  return (
    <StyledGuestContentWrap $flexDirection="column" $gap="1rem">
      <GuestAgeGroup text={'성인'} subText={'13세이상'} />
      <GuestAgeGroup text={'아동'} subText={'2-12세'} />
      <GuestAgeGroup text={'유아'} subText={'2세 미만'} />
    </StyledGuestContentWrap>
  );
}

const StyledGuestContentWrap = styled(StyledFlexContainer)`
  border-radius: 1rem;
`;
