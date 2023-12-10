import { getCookie, removeCookie } from '@/util/util';
import {
  StyledHeaderModal,
  StyledHeaderModalList,
  StyledHeaderText,
} from '../../../style/header/headerStyle';
import { StyledHLine } from '../../../style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';
import { postLogout } from '@/api/service';
import { useRecoilState } from 'recoil';
import { cartsDataState } from '@/states/atom';
import { LuShoppingCart, LuLogIn, LuLogOut, LuUser } from 'react-icons/lu';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

interface IHeaderModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInformSignInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderModal = ({
  setIsAccountModalOpen,
  setIsInformSignInModalOpen,
}: IHeaderModalProps) => {
  const navigate = useNavigate();
  const [cartsData, setCartsData] = useRecoilState(cartsDataState);
  const cartsCount = cartsData.length;
  const isSignIn = getCookie('accessToken');
  const { mutate } = useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      removeCookie();
      setCartsData([]);
      toast.success('Trillion 로그아웃');
      navigate('/');
    },
    onError: (error) => {
      if (error.message.includes('500')) {
        toast.error('서버 오류 발생');
      }
    },
  });

  const handleAccountModal = (): void => {
    setIsAccountModalOpen(true);
  };

  const handleSignInModal = (link: string): void => {
    if (!isSignIn) {
      setIsInformSignInModalOpen(true);
    } else {
      navigate(link);
    }
  };

  return (
    <StyledHeaderModal>
      <StyledHeaderModalList>
        <StyledHeaderText
          onClick={!isSignIn ? handleAccountModal : () => mutate()}>
          <StyledIconDiv>
            {!isSignIn ? <LuLogIn /> : <LuLogOut />}
          </StyledIconDiv>
          {!isSignIn ? '로그인/회원가입' : '로그아웃'}
        </StyledHeaderText>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <StyledHeaderText onClick={() => handleSignInModal('/cart')}>
          <StyledIconDiv>
            <LuShoppingCart />
          </StyledIconDiv>
          <span style={{ position: 'relative' }}>
            장바구니
            <StyledCartsCount>{cartsCount}</StyledCartsCount>
          </span>
        </StyledHeaderText>
      </StyledHeaderModalList>
      <StyledHLine $mBlock="0" />
      <StyledHeaderModalList>
        <StyledHeaderText onClick={() => handleSignInModal('/mypage')}>
          <StyledIconDiv>
            <LuUser />
          </StyledIconDiv>
          마이페이지
        </StyledHeaderText>
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
