import { useState } from 'react';
import { GuestCount } from '../../../../interfaces/interface';
import GuestAgeGroup from './guestAgeGroup';
import styled from 'styled-components';
import { StyledFlexContainer } from '../../../../style/payment/paymentStyle';
import { StyledButton } from '../../../../style/common/commonStyle';
interface GuestContentProps {
  onSave: (totalGuests: number) => void;
  onClose: () => void;
}

const GuestContent = ({ onSave, onClose }: GuestContentProps) => {
  const [guestCount, setGuestCount] = useState<GuestCount>({
    adults: 0,
    children: 0,
    infants: 0,
  } as GuestCount);

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

  const getTotalGuests = () => {
    const { adults, children, infants } = guestCount;
    return adults + children + infants;
  };

  const handleSave = () => {
    console.log(guestCount);
    const totalGuests = getTotalGuests();
    onSave(totalGuests);
    onClose();
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
      <StyledRowFull $gap="2rem" $justifyContent="space-between">
        <StyledButton onClick={onClose}>취소</StyledButton>
        <StyledBlackBtn $variant="primary" $full={false} onClick={handleSave}>
          저장
        </StyledBlackBtn>
      </StyledRowFull>
    </StyledGuestContentWrap>
  );
};

export default GuestContent;

const StyledGuestContentWrap = styled(StyledFlexContainer)`
  border-radius: 1rem;
`;
export const StyledRowFull = styled(StyledFlexContainer)`
  width: 100%;
`;
export const StyledBlackBtn = styled(StyledButton)`
background-color: #444;
color:#fff;  
white-space: nowrap;
width:auto;
&:hover {
  background-color: #333;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: #eee;
  }
`;
