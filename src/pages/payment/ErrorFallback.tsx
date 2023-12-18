import { StyledButton } from '@/style/payment/paymentStyle';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <p>{error.message}</p>
      <p>오류가 발생했습니다.</p>
      <p>아래 버튼을 눌러 재시도 해주세요.</p>
      <StyledButton $variant="primary" onClick={resetErrorBoundary}>
        재시도
      </StyledButton>
    </>
  );
};

export default ErrorFallback;
