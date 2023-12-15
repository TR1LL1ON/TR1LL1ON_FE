import * as S from '@/style/account/AccountStyle';
import AccountContainer from '@/components/template/account';

interface IAccountModalProps {
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountModal = ({ setShowAccountModal }: IAccountModalProps) => {
  return (
    <S.StyledModal>
      <AccountContainer setShowAccountModal={setShowAccountModal} />
    </S.StyledModal>
  );
};

export default AccountModal;
