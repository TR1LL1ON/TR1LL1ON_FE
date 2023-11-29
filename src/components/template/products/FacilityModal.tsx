import { StyledH2Text } from '@/style/products/productsStyle';
import ModalContainer from '@/components/layout/modal/ModalContainer';
import ProductsFacilityList from './ProductsFacilityList';
import RoomsFacilityList from './RoomsFacilityList';
import styled from 'styled-components';
import { Facility } from '@/interfaces/interface';

interface FacilityModalProps {
  productsFacility: Facility;
  roomsFacility: Facility[];
  onClose: () => void;
}
const FacilityModal = ({
  productsFacility,
  roomsFacility,
  onClose,
}: FacilityModalProps) => {
  // productsFacility에 하나라도 true 값이 있는지 확인
  const hasTrueProductFacility = Object.values(productsFacility).some(
    (value) => value,
  );

  console.log('숙소편의시설', productsFacility);
  console.log('객실편의시설', roomsFacility);
  return (
    <ModalContainer onClose={onClose}>
      <StyledFacilityModal>
        {hasTrueProductFacility && (
          <>
            <StyledH2Text $mt="4rem" $mb="1rem">
              숙소 편의시설
            </StyledH2Text>
            <ProductsFacilityList productsFacility={productsFacility} />
          </>
        )}
        {roomsFacility.length > 0 && (
          <>
            <StyledH2Text $mt="2rem" $mb="1rem">
              객실 편의시설
            </StyledH2Text>
            <RoomsFacilityList roomsFacility={roomsFacility} />
          </>
        )}
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
