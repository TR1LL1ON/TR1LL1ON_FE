import styled, { css, keyframes } from 'styled-components';

interface IIsSignUp {
  $isSignUp: boolean;
}

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 50%);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  width: 768px;
  min-height: 746px;
  background-color: #fff;
  font-family: 'Pretendard', system-ui, Avenir, Helvetica, Arial, sans-serif;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);

  position: relative;
`;

export const StyledFormContainer = styled.div`
  height: 100%;

  position: absolute;
  top: 0;

  transition: all 0.6s ease-in-out;
`;

export const StyledSignInContainer = styled(StyledFormContainer)<IIsSignUp>`
  width: 50%;
  left: 0;
  z-index: 2;

  ${(props: any) =>
    props.$isSignUp &&
    css`
      transform: translateX(100%);
    `}
`;

export const StyledSignUpContainer = styled(StyledFormContainer)<IIsSignUp>`
  width: 50%;
  left: 0;
  opacity: 0;
  z-index: 1;

  ${(props: any) =>
    props.$isSignUp &&
    css`
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: ${showAnimation} 0.6s;
    `}
`;

export const showAnimation = keyframes`
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
`;

export const StyledOverlayContainer = styled.div<IIsSignUp>`
  width: 50%;
  height: 100%;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;

  transition: transform 0.6s ease-in-out;

  ${(props) =>
    props.$isSignUp &&
    css`
      transform: translateX(-100%);
    `}
`;

export const StyledOverlay = styled.div<IIsSignUp>`
  width: 200%;
  height: 100%;
  color: #ffffff;
  border-radius: 10px;

  background-image: url(https://blog.kakaocdn.net/dn/d1dqny/btqCKA4Qd45/3uJggV9FHvZlzqUQW9g0YK/img.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;

  position: relative;
  left: -100%;

  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  ${(props) =>
    props.$isSignUp &&
    css`
      transform: translateX(50%);
    `}
`;

const StyledOverlayPanel = styled.div`
  height: 100%;
  width: 50%;
  padding: 0 40px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;

  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const StyledOverlayLeft = styled(StyledOverlayPanel)<IIsSignUp>`
  transform: translateX(-20%);

  ${(props) =>
    props.$isSignUp &&
    css`
      transform: translateX(0);
    `}
`;

export const StyledOverlayRight = styled(StyledOverlayPanel)<IIsSignUp>`
  right: 0;
  transform: translateX(0);

  ${(props) =>
    props.$isSignUp &&
    css`
      transform: translateX(20%);
    `}
`;

export const StyledForm = styled.form`
  height: 100%;
  padding: 0 50px;
  background-color: #ffffff;
  border-radius: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 12px 15px;
  background-color: transparent;

  border: 1px solid #b0b0b0;
  border-radius: 10px;
  outline: none;
`;
