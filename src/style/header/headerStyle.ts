import styled from 'styled-components';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import { ReactComponent as SearchIcon } from '@/assets/searchIcon.svg';

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

export const StyledHeaderModalButton = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const StyledHeaderModal = styled.div`
  width: 240px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 54px;
  right: 0;
`;

export const StyledHeaderModalList = styled.div`
  width: 100%;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    color: rgb(68, 68, 68);
    width: 100%;
    padding: 12px 14px;

    &:hover {
      background-color: #ebebeb;
    }
  }
`;

export const StyledHeaderText = styled.span`
  width: 100%;
  padding: 12px 14px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;
