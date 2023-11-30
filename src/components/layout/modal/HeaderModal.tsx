import { getCookie, removeCookie } from '@/util/util';
import {
  StyledHeaderModal,
  StyledHeaderModalList,
  StyledHeaderText,
} from '../../../style/header/headerStyle';
import { StyledHLine } from '../../../style/payment/paymentStyle';
import { Link, useNavigate } from 'react-router-dom';
import { postLogout } from '@/api/service';

interface IHeaderModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderModal = ({ setIsAccountModalOpen }: IHeaderModalProps) => {
  const navigate = useNavigate();
  const isSignIn = getCookie('accessToken');
  const handleAccountModal = (): void => {
    setIsAccountModalOpen(true);
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      await postLogout();
      removeCookie();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledHeaderModal>
      <StyledHeaderModalList>
        <StyledHeaderText
          onClick={!isSignIn ? handleAccountModal : handleSignOut}>
          {!isSignIn ? '로그인/회원가입' : '로그아웃'}
        </StyledHeaderText>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <Link to="/cart">장바구니</Link>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <Link to="/mypage">마이페이지</Link>
      </StyledHeaderModalList>
    </StyledHeaderModal>
  );
};

export default HeaderModal;
