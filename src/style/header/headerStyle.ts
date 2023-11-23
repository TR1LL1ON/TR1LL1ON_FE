import styled from 'styled-components';
import { StyledFlexContainer } from '../payment/paymentStyle';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';

export const StyledHeaderContainer = styled(StyledFlexContainer)`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 5rem;
  z-index: 1;
  font-weight: 700;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1024px) {
    padding: 0 4rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledHeaderGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 24px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

export const StyledHeaderButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 48px;
  padding-inline: 8px;
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:first-of-type {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    border-right: none;
  }

  &:last-of-type {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-left: none;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  p {
    padding-inline: 1rem;
  }
`;

export const StyledVLine = styled.span`
  width: 1px;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledSearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;
export const StyledSearchIcon = styled(SearchIcon)``;
