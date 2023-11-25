import { StyledH2Text } from '../../../style/detail/detailStyle';
import ModalContainer from '../../layout/modal/ModalContainer';
import APIServiceList from './APIServiceList';
import EssentialServiceList from './EssentialServiceList';
import styled from 'styled-components';

interface FacilityModalProps {
  onClose: () => void;
}

const FacilityModal = ({ onClose }: FacilityModalProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <StyledFacilityModal>
        <StyledH2Text $mb="1rem">숙소 편의시설</StyledH2Text>
        <APIServiceList />
        <StyledH2Text $mt="2rem" $mb="1rem">
          객실 편의시설
        </StyledH2Text>
        <EssentialServiceList />
      </StyledFacilityModal>
    </ModalContainer>
  );
};

export default FacilityModal;

const StyledFacilityModal = styled.div`
  width: 24rem;
  & p {
    width: 100%;
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #ccc;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;
