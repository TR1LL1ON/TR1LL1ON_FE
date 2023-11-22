import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
    top: calc(100% + 0.5rem);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    top: calc(100% + 0.5rem);
  }
  100% {
    opacity: 0;
    top: 0;
  }
`;
