import { useRef, useState } from 'react';
import * as S from '@/style/account/AccountStyle';
import SignUp from '@/components/template/account/SignUp';
import SignIn from '@/components/template/account/SignIn';
import Overlay from '@/components/template/account/Overlay';
import { useClickOutside } from '@/hooks/useClickOutside';

interface IAccountContainerProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountContainer = ({
  setIsAccountModalOpen,
}: IAccountContainerProps) => {
  const accountModalRef = useRef<HTMLDivElement | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = (): void => {
    setIsSignUp(!isSignUp);
  };

  useClickOutside(accountModalRef, () => setIsAccountModalOpen(false));

  return (
    <S.StyledContainer ref={accountModalRef}>
      <SignUp isSignUp={isSignUp} handleToggle={handleToggle} />
      <SignIn
        isSignUp={isSignUp}
        setIsAccountModalOpen={setIsAccountModalOpen}
      />
      <Overlay isSignUp={isSignUp} handleToggle={handleToggle} />
    </S.StyledContainer>
  );
};

export default AccountContainer;
