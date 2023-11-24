import {
  StyledFlexContainer,
  StyledInputLabel,
  StyledTitle,
  StyledButton,
} from '../../../style/payment/paymentStyle';
import * as S from '../../../style/account/AccountStyle';

interface ISignInProps {
  isSignUp: boolean;
}

const SignIn = ({ isSignUp }: ISignInProps) => {
  return (
    <S.StyledSignInContainer $isSignUp={isSignUp}>
      <S.StyledForm>
        <StyledTitle>로그인</StyledTitle>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_user_id">아이디</StyledInputLabel>
          <S.StyledInput>
            <input id="login_user_id" type="text" placeholder="아이디" />
          </S.StyledInput>
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_password">비밀번호</StyledInputLabel>
          <S.StyledInput>
            <input id="login_password" type="password" placeholder="비밀번호" />
          </S.StyledInput>
        </StyledFlexContainer>
        <StyledButton $variant="primary" style={{ width: '100%' }}>
          로그인
        </StyledButton>
      </S.StyledForm>
    </S.StyledSignInContainer>
  );
};

export default SignIn;
