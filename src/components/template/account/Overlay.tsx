import {
  StyledTitle,
  StyledButton,
  StyledText,
} from '@/style/payment/paymentStyle';
import * as S from '@/style/account/AccountStyle';

interface IOverlayProps {
  isSignUp: boolean;
  handleToggle: () => void;
}

const Overlay = ({ isSignUp, handleToggle }: IOverlayProps) => {
  return (
    <S.StyledOverlayContainer $isSignUp={isSignUp}>
      <S.StyledOverlay $isSignUp={isSignUp}>
        <S.StyledOverlayLeft $isSignUp={isSignUp}>
          <StyledTitle $mb="1.5rem" style={{ fontSize: '1.25rem' }}>
            트릴리언에 오신 것을 환영합니다.
          </StyledTitle>
          <StyledText style={{ marginBottom: '1rem' }}>
            이미 계정이 있으신가요?
          </StyledText>
          <StyledButton $variant="primary" onClick={handleToggle}>
            로그인
          </StyledButton>
        </S.StyledOverlayLeft>
        <S.StyledOverlayRight $isSignUp={isSignUp}>
          <StyledTitle $mb="1.5rem" style={{ fontSize: '1.25rem' }}>
            트릴리언에 오신 것을 환영합니다.
          </StyledTitle>
          <StyledText style={{ marginBottom: '1rem' }}>
            아직 계정이 없으신가요?
          </StyledText>
          <StyledButton $variant="primary" onClick={handleToggle}>
            회원가입
          </StyledButton>
        </S.StyledOverlayRight>
      </S.StyledOverlay>
    </S.StyledOverlayContainer>
  );
};

export default Overlay;
