import {
  StyledFlexContainer,
  StyledInputLabel,
  StyledTitle,
  StyledButton,
} from '@/style/payment/paymentStyle';
import * as S from '@/style/account/AccountStyle';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';

export interface IIsSignUpProps {
  isSignUp: boolean;
}

interface ISignUpFormProps {
  user_id: string;
  name: string;
  email: string;
  password: string;
  password_check: string;
}

const SignUp = ({ isSignUp }: IIsSignUpProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ISignUpFormProps>({ mode: 'onBlur' });

  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  return (
    <S.StyledSignUpContainer $isSignUp={isSignUp}>
      <S.StyledForm
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <StyledTitle>회원가입</StyledTitle>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="user_id">아이디</StyledInputLabel>
          <S.StyledInput error={errors.user_id} inputValue={userId}>
            <input
              id="user_id"
              type="text"
              placeholder="ID"
              {...register('user_id', {
                required: '아이디를 입력해주세요.',
                onBlur(event) {
                  setUserId(event.target.value);
                },
              })}
            />
            {userId || errors.user_id ? (
              errors.user_id ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.user_id && (
            <S.StyledMessage role="alert">
              {errors.user_id.message}
            </S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="name">이름</StyledInputLabel>
          <S.StyledInput error={errors.name} inputValue={name}>
            <input
              id="name"
              type="text"
              placeholder="이름"
              {...register('name', {
                required: '이름을 입력해주세요.',
                onBlur(event) {
                  setName(event.target.value);
                },
              })}
            />
            {name || errors.name ? (
              errors.name ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.name && (
            <S.StyledMessage>{errors.name.message}</S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="email">이메일</StyledInputLabel>
          <S.StyledInput error={errors.email} inputValue={email}>
            <input
              id="email"
              type="email"
              placeholder="이메일"
              aria-invalid={errors.email ? 'true' : 'false'}
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
            <S.StyledMessage>{errors.email.message}</S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%' }}>
          <StyledInputLabel htmlFor="password">비밀번호</StyledInputLabel>
          <S.StyledInput error={errors.password} inputValue={password}>
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              {...register('password', {
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
        <StyledFlexContainer
          $flexDirection="column"
          $alignItems="flex-start"
          style={{ width: '100%', marginBottom: '10px' }}>
          <StyledInputLabel htmlFor="password_check">
            비밀번호 확인
          </StyledInputLabel>
          <S.StyledInput
            error={errors.password_check}
            inputValue={passwordCheck}>
            <input
              id="password_check"
              type="password"
              placeholder="비밀번호 확인"
              {...register('password_check', {
                required: '비밀번호를 다시 입력해주세요.',
                validate: {
                  check: (value) => {
                    if (getValues('password') !== value) {
                      return '비밀번호가 일치하지 않습니다.';
                    }
                  },
                },
                onBlur(event) {
                  setPasswordCheck(event.target.value);
                },
              })}
            />
            {passwordCheck || errors.password_check ? (
              errors.password_check ? (
                <AiOutlineInfoCircle />
              ) : (
                <AiOutlineCheckCircle />
              )
            ) : (
              ''
            )}
          </S.StyledInput>
          {errors.password_check && (
            <S.StyledMessage>{errors.password_check.message}</S.StyledMessage>
          )}
        </StyledFlexContainer>
        <StyledButton $variant="primary" style={{ width: '100%' }}>
          회원가입
        </StyledButton>
      </S.StyledForm>
    </S.StyledSignUpContainer>
  );
};

export default SignUp;
