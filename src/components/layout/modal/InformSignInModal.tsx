import { useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import {
  StyledButton,
  StyledFlexContainer,
} from '@/style/payment/paymentStyle';
import styled, { keyframes } from 'styled-components';

interface IInformSignInModalProps {
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowInformSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const InformSignInModal = ({
  setShowAccountModal,
  setShowInformSignInModal,
}: IInformSignInModalProps) => {
  const informSignInModalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (): void => {
    setShowInformSignInModal(false);
  };

  const handleAccountModal = (): void => {
    handleClose();
    setShowAccountModal(true);
  };

  useClickOutside(informSignInModalRef, handleClose);

  return (
    <StyledModal>
      <StyledWrapper ref={informSignInModalRef}>
        <StyledTitle>
          지금 로그인해서
          <br /> 더 많은 서비스를 이용하세요
        </StyledTitle>
        <StyledText style={{ paddingTop: '2.5rem' }}>
          아직 회원이 아니신가요? &nbsp;
          <StyledSignUpBtn onClick={handleAccountModal}>
            회원가입하기
          </StyledSignUpBtn>
        </StyledText>
        <StyledSignInBtn
          $variant="primary"
          style={{ width: '100%', marginTop: '0.5rem', marginBottom: '1rem' }}
          onClick={handleAccountModal}>
          <StyledText>로그인하기</StyledText>
        </StyledSignInBtn>
        <StyledFlexContainer $justifyContent="center" style={{ width: '100%' }}>
          <StyledText style={{ cursor: 'pointer' }} onClick={handleClose}>
            다음에 할게요
          </StyledText>
        </StyledFlexContainer>
      </StyledWrapper>
    </StyledModal>
  );
};

export default InformSignInModal;

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 50%);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard', system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const showInformSignInModal = keyframes`
  0% {
    transform: scale3d(0.9, 0.9, 0.9)
  }
  
  100% {
    transform: scale3d(1, 1, 1)
  }
`;

const StyledWrapper = styled.div`
  width: 512px;
  height: 260px;

  border-radius: 16px;
  padding: 24px;
  background-color: rgb(244, 244, 245);

  animation: ${showInformSignInModal} 0.2s;
`;

const StyledTitle = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const StyledText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const StyledSignUpBtn = styled(StyledButton)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledSignInBtn = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'primary' ? '#ad1d45' : ''};
  }
`;
