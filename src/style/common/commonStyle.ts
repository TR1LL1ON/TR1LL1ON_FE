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

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $heigh?: string;
}>`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$heigh || 'auto'};
  overflow-y: scroll;
`;
