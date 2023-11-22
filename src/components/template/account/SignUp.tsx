import {
  StyledFlexContainer,
  StyledInputLabel,
  StyledTitle,
  StyledButton,
} from '../../../style/payment/paymentStyle';
import * as S from '../../../style/account/AccountStyle';

export interface IIsSignUpProps {
  isSignUp: boolean;
}

const SignUp = ({ isSignUp }: IIsSignUpProps) => {
  return (
    <S.StyledSignUpContainer $isSignUp={isSignUp}>
      <S.StyledForm>
        <StyledTitle>회원가입</StyledTitle>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="id">아이디</StyledInputLabel>
          <S.StyledInput type="text" id="id" placeholder="ID" />
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="nickname">닉네임</StyledInputLabel>
          <S.StyledInput type="text" id="nickname" placeholder="닉네임" />
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="phone-number">
            휴대폰 번호
          </StyledInputLabel>
          <S.StyledInput
            type="text"
            id="phone-number"
            placeholder="ex)010-0000-0000"
          />
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
          <S.StyledInput type="text" id="password" placeholder="비밀번호" />
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="password-check">
            비밀번호 확인
          </StyledInputLabel>
          <S.StyledInput
            type="text"
            id="password-check"
            placeholder="비밀번호 확인"
          />
        </StyledFlexContainer>
        <StyledButton $variant="primary" style={{ width: '100%' }}>
          회원가입
        </StyledButton>
      </S.StyledForm>
    </S.StyledSignUpContainer>
  );
};

export default SignUp;
