import styled from 'styled-components';
import { LuPlusCircle, LuMinusCircle } from 'react-icons/lu';
import {
  StyledFlexContainer,
  StyledText,
} from '../../../../style/payment/paymentStyle';
import { StyledSubText } from '../../../../style/detail/detailStyle';
interface GuestAgeGroupProps {
  text: string;
  subText: string;
}
export default function GuestAgeGroup({ text, subText }: GuestAgeGroupProps) {
  return (
    <StyledGuestRow $justifyContent="space-between" $gap="4rem">
      <StyledTextBox
        $flexDirection="column"
        $alignItems="flex-start"
        $gap=".8rem">
        <StyledSubText $color="#444" $mb="0">
          {text}
        </StyledSubText>
        <StyledTextGray> {subText} </StyledTextGray>
      </StyledTextBox>
      <StyledGuestCount $gap="1rem">
        <LuMinusCircle />
        <StyledText>0명</StyledText>
        <LuPlusCircle />
      </StyledGuestCount>
    </StyledGuestRow>
  );
}

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
