import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cart from '@/pages/cart/cart';
import Detail from '@/pages/detail/detail';
import Main from '@/pages/main/main';
import Mypage from '@/pages/mypage/mypage';
import Payment from '@/pages/payment/payment';

function Dashboard() {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </>
  );
}

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path="/products/:accomodationID" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;

const StyledMainContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
