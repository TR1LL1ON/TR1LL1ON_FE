import { useRef } from 'react';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import GuestContent from './guestContent';
import styled from 'styled-components';
import { StyledText } from '../../../../style/payment/paymentStyle';
import { StyledSubText } from '../../../../style/detail/detailStyle';

interface GuestModalProps {
  onClose: () => void;
}

const GuestModal = ({ onClose }: GuestModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    onClose();
  });

  const onSave = (totalGuests: number) => {
    console.log('총 게스트:', totalGuests, '명');
  };

  return (
    <StyledModalWrapper>
      <StyledModalContent ref={ref}>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        <StyledSubText $color="#444" $fontSize="1.5rem" $textAlign="left">
          게스트
        </StyledSubText>
        <StyledText>이 숙소의 최대 숙박 인원은 n명 입니다.</StyledText>
        <GuestContent onClose={onClose} onSave={onSave} />
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
