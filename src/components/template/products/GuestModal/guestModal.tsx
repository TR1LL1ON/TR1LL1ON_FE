import GuestContent from './guestContent';
import {
  StyledButton,
  StyledFlexContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { StyledH2Text, StyledBlackBtn } from '@/style/products/productsStyle';
import styled from 'styled-components';
import ModalContainer from '@/components/layout/modal/ModalContainer';
import { useRecoilState } from 'recoil';
import { guestCountState } from '../../../../states/atom';

interface GuestModalProps {
  onClose: () => void;
}

const GuestModal = ({ onClose }: GuestModalProps) => {
  const [guestCount, setGuestCount] = useRecoilState(guestCountState);

  const handleSave = () => {
    setGuestCount((prevCount) => ({
      ...prevCount,
      totals: prevCount.adults + prevCount.children + prevCount.infants,
    }));
    console.log('총 게스트:', guestCount.totals, '명');
    onClose();
  };

  return (
    <ModalContainer onClose={onClose}>
      <StyledH2Text $fontSize="1.5rem" $textAlign="left">
        게스트
      </StyledH2Text>
      <GuestContent />
      <StyledRowFull $gap="2rem" $justifyContent="space-between">
        <StyledButton onClick={onClose}>취소</StyledButton>
        <StyledBlackBtn $variant="primary" $full={false} onClick={handleSave}>
          저장
        </StyledBlackBtn>
      </StyledRowFull>
    </ModalContainer>
  );
};

export default GuestModal;
export const StyledRowFull = styled(StyledFlexContainer)`
  width: 100%;
`;
