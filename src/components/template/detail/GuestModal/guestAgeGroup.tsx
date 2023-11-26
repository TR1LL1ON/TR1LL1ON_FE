import styled from 'styled-components';
import { LuPlusCircle, LuMinusCircle } from 'react-icons/lu';
import {
  StyledFlexContainer,
  StyledText,
} from '../../../../style/payment/paymentStyle';
import { StyledH2Text } from '../../../../style/detail/detailStyle';
interface GuestAgeGroupProps {
  text: string;
  subText: string;
  count: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const guestAgeGroup = ({
  text,
  subText,
  count,
  onDecrease,
  onIncrease,
}: GuestAgeGroupProps) => {
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
        <StyledCountBtn onClick={onDecrease} disabled={count === 0}>
          <LuMinusCircle />
        </StyledCountBtn>
        <StyledText>{count}명</StyledText>
        <StyledCountBtn onClick={onIncrease}>
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
`;
const StyledTextBox = styled(StyledFlexContainer)`
  font-size: 1rem;
  text-align: left;
`;

const StyledTextGray = styled(StyledText)`
  // color: ${(props) => props.theme.colors.darkGray};
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
