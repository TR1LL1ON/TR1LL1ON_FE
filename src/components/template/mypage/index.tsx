import { StyledTitle } from '@/style/payment/paymentStyle';
import ReservationList from './reservationList';
// import WishList from './wishList';

const MypageContainer = () => {
  return (
    <>
      <StyledTitle>마이페이지</StyledTitle>
      <ReservationList />
      {/* <WishList /> */}
    </>
  );
};

export default MypageContainer;
