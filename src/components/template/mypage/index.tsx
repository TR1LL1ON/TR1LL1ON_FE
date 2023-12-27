import { StyledTitle } from '@/style/payment/paymentStyle';
import ReservationList from './reservationList';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Error } from './error';
// import WishList from './wishList';

const MypageContainer = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <>
      <ErrorBoundary FallbackComponent={Error} onError={reset}>
        <StyledTitle>마이페이지</StyledTitle>
        <ReservationList />
        {/* <WishList /> */}
      </ErrorBoundary>
    </>
  );
};

export default MypageContainer;
