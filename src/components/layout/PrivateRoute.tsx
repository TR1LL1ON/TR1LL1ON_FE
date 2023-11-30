import { getCookie } from '@/util/util';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const isSignIn = getCookie('accessToken');

  useEffect(() => {
    if (!isSignIn) {
      navigate('/');
    }
  }, []);

  return !isSignIn ? null : (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
