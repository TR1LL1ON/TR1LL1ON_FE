import { useRecoilState } from 'recoil';
import { guestCountState } from '../../../../states/atom';
import { GuestCount } from '@/interfaces/interface';
import GuestAgeGroup from './guestAgeGroup';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';

const GuestContent = () => {
  const [guestCount, setGuestCount] = useRecoilState(guestCountState);

  const updateGuestCount = (type: keyof GuestCount, action: string) => {
    if (action === 'increase') {
      setGuestCount((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] + 1,
      }));
    } else if (action === 'decrease' && guestCount[type] > 0) {
      setGuestCount((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] - 1,
      }));
    }
  };

  return (
    <StyledGuestContentWrap $flexDirection="column" $gap="1rem">
      <GuestAgeGroup
        text={'성인'}
        subText={'13세이상'}
        count={guestCount.adults}
        onIncrease={() => updateGuestCount('adults', 'increase')}
        onDecrease={() => updateGuestCount('adults', 'decrease')}
      />
      <GuestAgeGroup
        text={'아동'}
        subText={'2-12세'}
        count={guestCount.children}
        onIncrease={() => updateGuestCount('children', 'increase')}
        onDecrease={() => updateGuestCount('children', 'decrease')}
      />
      <GuestAgeGroup
        text={'유아'}
        subText={'2세 미만'}
        count={guestCount.infants}
        onIncrease={() => updateGuestCount('infants', 'increase')}
        onDecrease={() => updateGuestCount('infants', 'decrease')}
      />
    </StyledGuestContentWrap>
  );
};

export default GuestContent;

const StyledGuestContentWrap = styled(StyledFlexContainer)`
  border-radius: 1rem;
`;
