import { getCookie, removeCookie } from '@/util/util';
import {
  StyledHeaderModal,
  StyledHeaderModalList,
  StyledHeaderText,
} from '../../../style/header/headerStyle';
import { StyledHLine } from '../../../style/payment/paymentStyle';
import { Link, useNavigate } from 'react-router-dom';
import { postLogout } from '@/api/service';
import { useRecoilValue } from 'recoil';
import { cartsDataState } from '@/states/atom';
import { LuShoppingCart, LuLogIn, LuLogOut, LuUser } from 'react-icons/lu';
import styled from 'styled-components';

interface IHeaderModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderModal = ({ setIsAccountModalOpen }: IHeaderModalProps) => {
  const navigate = useNavigate();
  const cartsData = useRecoilValue(cartsDataState);
  const cartsCount = cartsData.length;
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
          <StyledIconDiv>
            {!isSignIn ? <LuLogIn /> : <LuLogOut />}
          </StyledIconDiv>
          {!isSignIn ? '로그인/회원가입' : '로그아웃'}
        </StyledHeaderText>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <Link to="/cart">
          <StyledIconDiv>
            <LuShoppingCart />
          </StyledIconDiv>
          <span style={{ position: 'relative' }}>
            장바구니
            <StyledCartsCount>{cartsCount}</StyledCartsCount>
          </span>
        </Link>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <Link to="/mypage">
          <StyledIconDiv>
            <LuUser />
          </StyledIconDiv>
          마이페이지
        </Link>
      </StyledHeaderModalList>
    </StyledHeaderModal>
  );
};

export default HeaderModal;

const StyledCartsCount = styled.div`
  width: 17px;
  height: 17px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: skyblue;
  color: #fff;
  border-radius: 50%;
  letter-spacing: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -0.7rem;
  right: -1.2rem;
`;

const StyledIconDiv = styled.div`
  width: 20px;
  height: 19px;
`;
