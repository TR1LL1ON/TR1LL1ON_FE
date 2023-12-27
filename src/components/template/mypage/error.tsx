import React from 'react';
import styled from 'styled-components';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const Error: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <ErrorPageContainer>
      <Title>앗! 문제가 발생했어요</Title>
      <Subtitle>
        정보를 불러오는 데 문제가 생겼습니다. 잠시 후 다시 시도해 주세요.
      </Subtitle>
      <Subtitle>{error.message}</Subtitle>{' '}
      <TryAgainButton onClick={resetErrorBoundary}>
        다시 시도하기
      </TryAgainButton>
    </ErrorPageContainer>
  );
};

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f7f7f7;
  color: #333;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const TryAgainButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #de2f5f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ad1d45;
  }
`;
