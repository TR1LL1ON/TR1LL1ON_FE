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
          <StyledInputLabel htmlFor="id">아이디</StyledInputLabel>
          <S.StyledInput type="text" id="id" placeholder="아이디" />
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
          <S.StyledInput type="password" id="password" placeholder="비밀번호" />
        </StyledFlexContainer>
        <StyledButton $variant="primary" style={{ width: '100%' }}>
          로그인
        </StyledButton>
      </S.StyledForm>
    </S.StyledSignInContainer>
  );
};

export default SignIn;
