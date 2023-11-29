import { useRef } from 'react';
import * as S from '@/style/account/AccountStyle';
import AccountContainer from '@/components/template/account';

interface IAccountModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountModal = ({ setIsAccountModalOpen }: IAccountModalProps) => {
  const accountModalRef = useRef<HTMLDivElement | null>(null);

  const AccountModalOutSideClose = (e: any): void => {
    if (accountModalRef.current === e.target) {
      setIsAccountModalOpen(false);
    }
  };

  return (
    <S.StyledModal ref={accountModalRef} onClick={AccountModalOutSideClose}>
      <AccountContainer setIsAccountModalOpen={setIsAccountModalOpen} />
    </S.StyledModal>
  );
};

export default AccountModal;
