import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
}
export const Button = styled.button<ButtonProps>`
  background-color: #de2f5f;
  font-weight: 700;
  color: #fff;
  display: inline-flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  transition: background-color 0.3s ease;
  width: 100%;

  ${({ small }) =>
    small &&
    css`
      width: auto;
    `}

  &:hover {
    background-color: #ad1d45;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(222, 47, 95, 0.5);
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
