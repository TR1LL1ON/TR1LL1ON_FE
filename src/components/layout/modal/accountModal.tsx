import { useState } from 'react';
import * as S from '../../../style/account/AccountStyle';
import SignUp from '../../template/account/SignUp';
import SignIn from '../../template/account/SignIn';
import Overlay from '../../template/account/Overlay';

const AccountModal = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (): void => {
    setIsSignUp(!isSignUp);
  };

  return (
    <S.StyledModal>
      <S.StyledContainer>
        <SignUp isSignUp={isSignUp} />
        <SignIn isSignUp={isSignUp} />
        <Overlay isSignUp={isSignUp} handleToggle={handleToggle} />
      </S.StyledContainer>
    </S.StyledModal>
  );
};

export default AccountModal;
