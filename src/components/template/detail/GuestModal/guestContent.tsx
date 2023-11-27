import { useRecoilState } from 'recoil';
import { guestCountState } from '../../../../states/atom';
import { GuestCount } from '@/interfaces/interface';
import GuestAgeGroup from './guestAgeGroup';
import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';

const GuestContent = () => {
  const [guestCount, setGuestCount] = useRecoilState(guestCountState);

  const updateGuestCount = (
    type: keyof Omit<GuestCount, 'totals'>,
    isAdding: boolean,
  ) => {
    setGuestCount((prevGuestCount) => {
      const updatedCount = isAdding
        ? prevGuestCount[type] + 1
        : prevGuestCount[type] - 1;
      const updatedTotals = isAdding
        ? prevGuestCount.totals + 1
        : prevGuestCount.totals - 1;

      return {
        ...prevGuestCount,
        [type]: updatedCount < 0 ? 0 : updatedCount,
        totals: updatedTotals < 0 ? 0 : updatedTotals,
      };
    });
  };

  return (
    <StyledGuestContentWrap $flexDirection="column" $gap="1rem">
      <GuestAgeGroup
        text={'성인'}
        subText={'13세이상'}
        count={guestCount.adults}
        onIncrease={() => updateGuestCount('adults', true)}
        onDecrease={() => updateGuestCount('adults', false)}
      />
      <GuestAgeGroup
        text={'아동'}
        subText={'2-12세'}
        count={guestCount.children}
        onIncrease={() => updateGuestCount('children', true)}
        onDecrease={() => updateGuestCount('children', false)}
      />
      <GuestAgeGroup
        text={'유아'}
        subText={'2세 미만'}
        count={guestCount.infants}
        onIncrease={() => updateGuestCount('infants', true)}
        onDecrease={() => updateGuestCount('infants', false)}
      />
    </StyledGuestContentWrap>
  );
};

export default GuestContent;

const StyledGuestContentWrap = styled(StyledFlexContainer)`
  border-radius: 1rem;
`;
