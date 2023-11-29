import GuestAgeGroup from './guestAgeGroup';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';

const GuestContent = () => {
  return (
    <StyledGuestContentWrap $flexDirection="column" $gap="1rem">
      <GuestAgeGroup type="adults" text="성인" subText="13세이상" />
      <GuestAgeGroup type="children" text="아동" subText="2-12세" />
      <GuestAgeGroup type="infants" text="유아" subText="2세 미만" />
    </StyledGuestContentWrap>
  );
};

export default GuestContent;

const StyledGuestContentWrap = styled(StyledFlexContainer)`
  border-radius: 1rem;
`;
