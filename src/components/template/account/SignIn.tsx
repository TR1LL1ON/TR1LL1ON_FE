import {
  StyledFlexContainer,
  StyledInputLabel,
  StyledTitle,
  StyledButton,
} from '@/style/payment/paymentStyle';

import * as S from '@/style/account/AccountStyle';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';

interface ISignInProps {
  isSignUp: boolean;
}

interface ISignInFormProps {
  login_user_id: string;
  login_password: string;
}

const SignIn = ({ isSignUp }: ISignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormProps>({ mode: 'onBlur' });
  const [loginUserId, setLoginUserId] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  return (
    <S.StyledSignInContainer $isSignUp={isSignUp}>
      <S.StyledForm
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <StyledTitle>로그인</StyledTitle>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_user_id">아이디</StyledInputLabel>
          <S.StyledInput error={errors.login_user_id} inputValue={loginUserId}>
            <input
              id="login_user_id"
              type="text"
              placeholder="아이디"
              {...register('login_user_id', {
                required: '아이디를 입력해주세요.',
                onBlur(event) {
                  setLoginUserId(event.target.value);
                },
              })}
            />
            {loginUserId || errors.login_user_id ? (
              errors.login_user_id ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.login_user_id && (
            <S.StyledMessage role="alert">
              {errors.login_user_id.message}
            </S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_password">비밀번호</StyledInputLabel>
          <S.StyledInput
            error={errors.login_password}
            inputValue={loginPassword}>
            <input
              id="login_password"
              type="password"
              placeholder="비밀번호"
              {...register('login_password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 8,
                  message: '8자리 ~ 20자리 이내로 입력해주세요.',
                },
                maxLength: {
                  value: 20,
                  message: '8자리 ~ 20자리 이내로 입력해주세요.',
                },
                onBlur(event) {
                  setLoginPassword(event.target.value);
                },
              })}
            />
            {loginPassword || errors.login_password ? (
              errors.login_password ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.login_password && (
            <S.StyledMessage>{errors.login_password.message}</S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledButton $variant="primary" style={{ width: '100%' }}>
          로그인
        </StyledButton>
      </S.StyledForm>
    </S.StyledSignInContainer>
  );
};

export default SignIn;
