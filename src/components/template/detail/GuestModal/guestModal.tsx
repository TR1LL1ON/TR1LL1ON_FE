import GuestContent from './guestContent';
import {
  StyledButton,
  StyledFlexContainer,
  StyledText,
} from '@/style/payment/paymentStyle';
import { StyledH2Text, StyledBlackBtn } from '@/style/detail/detailStyle';
import styled from 'styled-components';
import ModalContainer from '@/components/layout/modal/ModalContainer';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { guestCountState, totalGuestCountState } from '../../../../states/atom';

interface GuestModalProps {
  onClose: () => void;
}

const GuestModal = ({ onClose }: GuestModalProps) => {
  // const [guestCount, setGuestCount] = useRecoilState(guestCountState);
  const guestCount = useRecoilValue(guestCountState);
  const setTotalGuestCount = useSetRecoilState(totalGuestCountState);
  const handleSave = () => {
    const totalGuests =
      guestCount.adults + guestCount.children + guestCount.infants;
    // console.log('총 게스트:', totalGuests, '명');
    setTotalGuestCount(totalGuests);
    onClose();
  };

  useEffect(() => {
    const totalGuests =
      guestCount.adults + guestCount.children + guestCount.infants;
    setTotalGuestCount(totalGuests);
  }, [guestCount, setTotalGuestCount]);
  return (
    <ModalContainer onClose={onClose}>
      <StyledH2Text $fontSize="1.5rem" $textAlign="left">
        게스트
      </StyledH2Text>
      <StyledText>이 숙소의 최대 숙박 인원은 n명 입니다.</StyledText>
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
