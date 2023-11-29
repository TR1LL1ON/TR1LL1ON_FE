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
import { IFormValue } from '../cart';
import { postLogin } from '@/api/service';
import { setCookie } from '@/util/util';

interface ISignInProps {
  isSignUp: boolean;
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ isSignUp, setIsAccountModalOpen }: ISignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<IFormValue, 'email' | 'password'>>({ mode: 'onBlur' });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const res = await postLogin(email, password);
      const getToken = res.data.accessToken;
      setCookie(getToken);

      setIsAccountModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.StyledSignInContainer $isSignUp={isSignUp}>
      <S.StyledForm onSubmit={handleSubmit(handleLogin)}>
        <StyledTitle>로그인</StyledTitle>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_email">이메일</StyledInputLabel>
          <S.StyledInput error={errors.email} inputValue={email}>
            <input
              id="login_email"
              type="email"
              placeholder="이메일"
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                  message: '이메일 형식에 맞지 않습니다.',
                },
                onBlur(event) {
                  setEmail(event.target.value);
                },
              })}
            />
            {email || errors.email ? (
              errors.email ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.email && (
            <S.StyledMessage role="alert">
              {errors.email.message}
            </S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="login_password">비밀번호</StyledInputLabel>
          <S.StyledInput error={errors.password} inputValue={password}>
            <input
              id="login_password"
              type="password"
              placeholder="비밀번호"
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                maxLength: {
                  value: 20,
                  message: '20자리 이내로 입력해주세요.',
                },
                onBlur(event) {
                  setPassword(event.target.value);
                },
              })}
            />
            {password || errors.password ? (
              errors.password ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.password && (
            <S.StyledMessage>{errors.password.message}</S.StyledMessage>
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
