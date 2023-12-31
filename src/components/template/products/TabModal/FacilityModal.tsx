import { StyledH2Text } from '@/style/products/productsStyle';
import ProductsFacilityList from '../Facility/ProductsFacilityList';
import RoomsFacilityList from '../Facility/RoomsFacilityList';
import styled from 'styled-components';
import { AccommodationFacility } from '@/interfaces/interface';

interface FacilityModalProps {
  productsFacility: AccommodationFacility;
  roomsFacility: string[];
}
const FacilityModal = ({
  productsFacility,
  roomsFacility,
}: FacilityModalProps) => {
  // productsFacility에 하나라도 true 값이 있는지 확인
  const hasTrueProductFacility = Object.values(productsFacility).some(
    (value) => value,
  );
  return (
    <StyledFacilityModal>
      {hasTrueProductFacility && (
        <>
          <StyledH2Text $mt="1rem" $mb="1rem" $fontSize="md">
            숙소 편의시설
          </StyledH2Text>
          <ProductsFacilityList productsFacility={productsFacility} />
        </>
      )}
      {roomsFacility.length > 0 && (
        <>
          <StyledH2Text $mt="2rem" $mb="1rem" $fontSize="md">
            객실 편의시설
          </StyledH2Text>
          <RoomsFacilityList roomsFacility={roomsFacility} />
        </>
      )}
    </StyledFacilityModal>
  );
};

export default FacilityModal;

const StyledFacilityModal = styled.div`
  & .mapping {
    width: 100%;
    padding: 0.6rem 1rem;
    border-bottom: 1px solid #ccc;
    font-size: ${(props) => props.theme.fontSizes.md};
    & > svg {
      margin-right: 1rem;
    }
  }
`;
