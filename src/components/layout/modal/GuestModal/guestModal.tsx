import { useRef } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import GuestContent from './guestContent';
import styled from 'styled-components';
import { StyledOnClick } from '../../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../../style/payment/paymentStyle';
import { Button } from '../../../../style/common/commonStyle';

interface GuestModalProps {
  onClose: () => void;
}

const GuestModal = ({ onClose }: GuestModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    onClose();
  });

  return (
    <StyledModalWrapper>
      <StyledModalContent ref={ref}>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        <GuestContent />
        <StyledRowFull $gap="2rem" $justifyContent="space-between">
          <StyledOnClick $color="#444" $borderColor="#444" onClick={onClose}>
            취소
          </StyledOnClick>
          <StyledBlackBtn>저장</StyledBlackBtn>
        </StyledRowFull>
      </StyledModalContent>
    </StyledModalWrapper>
  );
};

export default GuestModal;

const StyledModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const StyledModalContent = styled.div`
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

const StyledCloseButton = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  cursor: pointer;
`;

export const StyledRowFull = styled(StyledFlexContainer)`
  width: 100%;
`;
export const StyledBlackBtn = styled(Button)`
background-color: #444;
color:#fff;  
white-space: nowrap;
width:auto;
font-size: ${(props) => props.theme.fontSizes.md};
font-weight: ${(props) => props.theme.fontWeights.medium};
transition: background-color 0.3s ease;
&:hover {
opacity:.8;

  &:focus {
    outline: none;
  }
  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;
