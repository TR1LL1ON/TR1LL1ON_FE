import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
export const StyledModalContent = styled.div`
  max-width: 1200px;
  position: fixed;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.04),
    0 8px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: #000;
  background: #fff;
  padding: 2rem;
`;
export const StyledCloseButton = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  cursor: pointer;
`;
