import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cart from '@/pages/cart/cart';
import Main from '@/pages/main/main';
import Mypage from '@/pages/mypage/mypage';
import Payment from '@/pages/payment/payment';
import NotFound from '@/components/template/notFound';
import PrivateRoute from '@/components/layout/PrivateRoute';
import PaymentConfirm from '@/components/template/payment/paymentConfirm';
import React, { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

const Products = React.lazy(() => import('@/pages/products/products'));

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

          <Route
            path="/products/:accomodationID"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Products />
              </Suspense>
            }
          />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/payment"
              element={<Payment />}
              errorElement={<NotFound />}
            />
            <Route path="/confirm" element={<PaymentConfirm />} />
            <Route path="/mypage" element={<Mypage />} />
          </Route>
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
