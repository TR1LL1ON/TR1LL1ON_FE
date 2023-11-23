import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: string;
  $full?: boolean;
}>`
  font-size: ${(props) =>
    props.$variant === 'primary'
      ? props.theme.fontSizes.md
      : props.theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-decoration: ${(props) =>
    props.$variant === 'primary' ? 'none' : 'underline'};
  text-underline-offset: 0.2rem;
  background-color: ${(props) =>
    props.$variant === 'primary' ? props.theme.colors.primary : 'transparent'};
  color: ${(props) => (props.$variant === 'primary' ? '#fff' : '#000')};
  padding: ${(props) => (props.$variant === 'primary' ? '1rem 2rem' : '0')};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  width: ${(props) => (props.$full ? '100%' : 'fit-content')};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'primary' ? '#ad1d45' : ''};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(222, 47, 95, 0.5);
  }

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;
