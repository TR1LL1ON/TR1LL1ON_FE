import { useState } from 'react';
import * as S from '@/style/account/AccountStyle';
import SignUp from '@/components/template/account/SignUp';
import SignIn from '@/components/template/account/SignIn';
import Overlay from '@/components/template/account/Overlay';

interface IAccountContainerProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountContainer = ({
  setIsAccountModalOpen,
}: IAccountContainerProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (): void => {
    setIsSignUp(!isSignUp);
  };

  return (
    <S.StyledContainer>
      <SignUp
        isSignUp={isSignUp}
        setIsAccountModalOpen={setIsAccountModalOpen}
      />
      <SignIn
        isSignUp={isSignUp}
        setIsAccountModalOpen={setIsAccountModalOpen}
      />
      <Overlay isSignUp={isSignUp} handleToggle={handleToggle} />
    </S.StyledContainer>
  );
};

export default AccountContainer;
