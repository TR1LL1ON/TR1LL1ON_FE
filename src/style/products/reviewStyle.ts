import styled from 'styled-components';
import { StyledTextBox } from './productsStyle';
import { StyledFlexContainer } from '../payment/paymentStyle';

export const StyleReviewContainer = styled(StyledFlexContainer)`
  flex-wrap: nowrap;
  margin-bottom: 1rem;
`;
export const StyleReviewItem = styled(StyledTextBox)<{
  $fontSize?: string;
  $mt?: string;
  $mb?: string;
  $textAlign?: string;
}>`
  font-size: ${(props) => props.$fontSize || props.theme.fontSizes.md};
  font-weight: ${(props) =>
    props.$fontWeight || props.theme.fontWeights.regular};
  margin-top: ${(props) => props.$mt || '1rem'};
  margin-bottom: ${(props) => props.$mb || '1rem'};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: ${(props) => props.$textAlign};
  width: 100%;
  border-radius: 1rem;
  & p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledStar = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-left: 1rem;
`;
export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPageBtn = styled.button`
  font-size: ${(props) => props.theme.fontSizes.sm};
  border: none;
  background-color: #f0f0f0;
  padding: 0 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }

  &.active {
    background-color: #de2f5f;
    color: white;
  }
`;
