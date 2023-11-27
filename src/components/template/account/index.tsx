import { useState } from 'react';
import * as S from '../../../style/account/AccountStyle';
import SignUp from '../../template/account/SignUp';
import SignIn from '../../template/account/SignIn';
import Overlay from '../../template/account/Overlay';

const AccountContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (): void => {
    setIsSignUp(!isSignUp);
  };

  return (
    <S.StyledContainer>
      <SignUp isSignUp={isSignUp} />
      <SignIn isSignUp={isSignUp} />
      <Overlay isSignUp={isSignUp} handleToggle={handleToggle} />
    </S.StyledContainer>
  );
};

export default AccountContainer;
