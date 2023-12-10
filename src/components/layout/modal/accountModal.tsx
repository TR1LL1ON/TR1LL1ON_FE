import * as S from '@/style/account/AccountStyle';
import AccountContainer from '@/components/template/account';

interface IAccountModalProps {
  setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountModal = ({ setIsAccountModalOpen }: IAccountModalProps) => {
  return (
    <S.StyledModal>
      <AccountContainer setIsAccountModalOpen={setIsAccountModalOpen} />
    </S.StyledModal>
  );
};

export default AccountModal;
