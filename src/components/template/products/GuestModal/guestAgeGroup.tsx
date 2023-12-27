import styled from 'styled-components';
import { LuPlusCircle, LuMinusCircle } from 'react-icons/lu';
import { StyledFlexContainer, StyledText } from '@/style/payment/paymentStyle';
import { StyledH2Text } from '@/style/products/productsStyle';
import { useRecoilState } from 'recoil';
import { guestCountState } from '../../../../states/atom';
import { GuestCount } from '@/interfaces/interface';

interface GuestAgeGroupProps {
  text: string;
  subText: string;
  type: keyof Omit<GuestCount, 'totals'>;
}

const guestAgeGroup = ({ text, subText, type }: GuestAgeGroupProps) => {
  const [guestCount, setGuestCount] = useRecoilState(guestCountState);

  const handleIncrease = () => {
    setGuestCount((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
      totals: prev.totals + 1,
    }));
  };

  const handleDecrease = () => {
    if (guestCount[type] > 0) {
      setGuestCount((prev) => ({
        ...prev,
        [type]: prev[type] - 1,
        totals: prev.totals - 1,
      }));
    }
  };
  return (
    <StyledGuestRow $justifyContent="space-between" $gap="5rem">
      <StyledTextBox
        $flexDirection="column"
        $alignItems="flex-start"
        $gap=".8rem">
        <StyledH2Text $mb="0">{text}</StyledH2Text>
        <StyledTextGray> {subText} </StyledTextGray>
      </StyledTextBox>
      <StyledGuestCount $gap="1rem">
        <StyledCountBtn onClick={handleDecrease}>
          <LuMinusCircle />
        </StyledCountBtn>
        <StyledText>{guestCount[type]}명</StyledText>
        <StyledCountBtn onClick={handleIncrease}>
          <LuPlusCircle />
        </StyledCountBtn>
      </StyledGuestCount>
    </StyledGuestRow>
  );
};

export default guestAgeGroup;

const StyledGuestRow = styled(StyledFlexContainer)`
  border-bottom: 1px solid #ccc;
  width: 100%;
  @media screen and (max-width: 330px) {
    gap: 1rem;
  }
`;
const StyledTextBox = styled(StyledFlexContainer)`
  font-size: 1rem;
  text-align: left;
`;

const StyledTextGray = styled(StyledText)`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StyledGuestCount = styled(StyledFlexContainer)`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: #444;
`;
const StyledCountBtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: #444;
  cursor: pointer;
  background: transparent;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
