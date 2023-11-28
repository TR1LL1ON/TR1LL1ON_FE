import {
  StyledHeaderModal,
  StyledHeaderModalList,
  StyledHeaderText,
} from '../../../style/header/headerStyle';
import { StyledHLine } from '../../../style/payment/paymentStyle';
import { Link } from 'react-router-dom';

interface IHeaderModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderModal = ({ setIsAccountModalOpen }: IHeaderModalProps) => {
  const handleAccountModal = (): void => {
    setIsAccountModalOpen(true);
  };

  return (
    <StyledHeaderModal>
      <StyledHeaderModalList>
        <StyledHeaderText onClick={handleAccountModal}>
          로그인/회원가입
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
