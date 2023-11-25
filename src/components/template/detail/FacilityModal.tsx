import { useRef } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { StyledH2Text } from '../../../style/detail/detailStyle';
import APIServiceList from './APIServiceList';
import EssentialServiceList from './EssentialServiceList';
import {
  StyledCloseButton,
  StyledModalWrapper,
  StyledModalContent,
} from '../../../style/detail/commonModalStyles';
import styled from 'styled-components';

interface FacilityModalProps {
  onClose: () => void;
}

const FacilityModal = ({ onClose }: FacilityModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    onClose();
  });
  return (
    <StyledModalWrapper>
      <StyledFacilityModal ref={ref}>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        <StyledH2Text>숙소 편의시설</StyledH2Text>
        <APIServiceList />
        <StyledH2Text className="modalTitle"> 객실 편의시설</StyledH2Text>
        <EssentialServiceList />
      </StyledFacilityModal>
    </StyledModalWrapper>
  );
};

export default FacilityModal;
const StyledFacilityModal = styled(StyledModalContent)`
  width: 500px;

  & p {
    width: 100%;
    padding: 0.2rem 1rem;
    border-bottom: 1px solid #ccc;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;
