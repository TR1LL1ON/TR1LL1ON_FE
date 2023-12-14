import { getCookie, removeCookie } from '@/util/util';
import {
  StyledHeaderModal,
  StyledHeaderModalList,
  StyledHeaderText,
} from '../../../style/header/headerStyle';
import { StyledHLine } from '../../../style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';
import { getCarts, postLogout } from '@/api/service';
import { useRecoilState } from 'recoil';
import { cartsDataState } from '@/states/atom';
import { LuShoppingCart, LuLogIn, LuLogOut, LuUser } from 'react-icons/lu';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

interface IHeaderModalProps {
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowInformSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderModal = ({
  setShowAccountModal,
  setShowInformSignInModal,
}: IHeaderModalProps) => {
  const navigate = useNavigate();
  const [cartsData, setCartsData] = useRecoilState(cartsDataState);
  const cartsCount = cartsData.length;
  const isSignIn = getCookie('accessToken');
  const { data, isFetching } = useQuery({
    queryKey: ['CartsData'],
    queryFn: () => {
      if (isSignIn) return getCarts();
      else return null;
    },
  });
  const { mutate } = useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      removeCookie();
      setCartsData([]);
      toast.success('Trillion 로그아웃');
      navigate('/');
    },
  });
  const formatData = data ?? [];

  const handleAccountModal = (): void => {
    setShowAccountModal(true);
  };

  const handleSignInNavigation = (link: string): void => {
    if (!isSignIn) {
      setShowInformSignInModal(true);
    } else {
      navigate(link);
    }
  };

  useEffect(() => {
    if (!isSignIn) setCartsData([]);
    else {
      setCartsData(formatData);
    }
  }, [isFetching]);

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
        <StyledHeaderText onClick={() => handleSignInNavigation('/cart')}>
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
        <StyledHeaderText onClick={() => handleSignInNavigation('/mypage')}>
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
