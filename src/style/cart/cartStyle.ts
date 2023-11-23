import styled from 'styled-components';
import { StyledFlexContainer, StyledText } from '../payment/paymentStyle';

export const StyledCartList = styled(StyledFlexContainer)`
  height: 508px;
  padding-right: 5px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 25px;
  }
`;

export const StyledDeleteButton = styled(StyledText)`
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
