import LoadingSpinner from '@/components/LoadingSpinner';
import PaymentContainer from '@/components/template/payment';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const Payment = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <PaymentContainer />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Suspense>
  );
};

export default Payment;
