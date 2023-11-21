import styled from 'styled-components';
import { fadeIn, fadeOut } from './paymentAnimation';

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`;

export const StyledFlexContainer = styled.div<{ $justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || 'space-between'};
`;

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledHLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-block: 1.5rem;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 1rem;
`;

export const StyledSubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 0.5rem;
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
`;

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    user-select: none;
    transition: transform 0.2s ease-in-out;

    &.open {
      transform: rotate(180deg);
    }
  }
`;

export const StyledDropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  z-index: 1;
  animation: ${(props) => (props.$isOpen ? fadeIn : fadeOut)} 0.2s ease-in-out;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;

export const StyledDropdownItem = styled.li`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledCheckboxInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.25rem;
  cursor: pointer;

  &:checked {
    border-color: black;
    background-color: black;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='check'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z' fill='%23ffffff' class='color000000 svgShape'%3E%3C/path%3E%3C/svg%3E");
  }
`;

export const StyledInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.5;
  user-select: none;
  cursor: pointer;
`;
