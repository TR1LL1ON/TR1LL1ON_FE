import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import styled from 'styled-components';

export const StyledRegionContainer = styled(StyledFlexContainer)`
  position: absolute;
  padding-inline: 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #fff;

  a {
    display: flex;
    align-items: center;
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 600;
    height: 100%;
  }
`;
