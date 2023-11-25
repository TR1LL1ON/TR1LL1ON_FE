import GuestContent from './guestContent';
import { StyledText } from '../../../../style/payment/paymentStyle';
import { StyledH2Text } from '../../../../style/detail/detailStyle';
import { GuestCount } from '../../../../interfaces/interface';
import ModalContainer from '../../../layout/modal/ModalContainer';

interface GuestModalProps {
  onClose: () => void;
  onSave: (totalGuests: number) => void;
  guestCount: GuestCount;
  setGuestCount: React.Dispatch<React.SetStateAction<GuestCount>>;
}

const GuestModal = ({
  onClose,
  onSave,
  guestCount,
  setGuestCount,
}: GuestModalProps) => {
  const handleSave = (totalGuests: number) => {
    console.log('총 게스트:', totalGuests, '명');
    onSave(totalGuests); // 상위 컴포넌트 handleSaveGuestCount 호출
  };

  return (
    <ModalContainer onClose={onClose}>
      <StyledH2Text $fontSize="1.5rem" $textAlign="left">
        게스트
      </StyledH2Text>
      <StyledText>이 숙소의 최대 숙박 인원은 n명 입니다.</StyledText>
      <GuestContent
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        onClose={onClose}
        onSave={handleSave}
      />
    </ModalContainer>
  );
};

export default GuestModal;
