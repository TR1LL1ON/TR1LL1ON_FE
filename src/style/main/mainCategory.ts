import styled from 'styled-components';
import { StyledText } from '../payment/paymentStyle';

export const StyledCategoryContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(64px, 1fr);
  column-gap: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCategoryButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  opacity: 0.5;
  padding: 1rem 0;
  transition: opacity 0.2s ease-in-out;

  p {
    position: relative;
  }

  &:hover:not([data-selected='true']) {
    opacity: 1;

    p {
      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: black;
        opacity: 0.3;
      }
    }
  }

  &[data-selected='true'] {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary};
    cursor: default;

    p {
      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const StyledCategoryText = styled(StyledText)`
  font-size: 0.75rem;
  font-weight: 600;
`;
