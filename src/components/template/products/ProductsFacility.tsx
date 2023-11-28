import { useState } from 'react';
import {
  StyledBorderWrap,
  StyledServiceWrap,
  StyledH2Text,
  StyledBorderBtn,
} from '@/style/products/productsStyle';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import ProductsFacilityList from './ProductsFacilityList';
import RoomsFacilityList from './RoomsFacilityList';
import FacilityModal from './FacilityModal';

const ProductsFacility = () => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);

  const handleFacilityModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFacilityModal(true);
  };
  return (
    <StyledBorderWrap>
      <StyledH2Text $mt="0rem" $mb="2rem">
        숙소 편의시설
      </StyledH2Text>
      <StyledServiceWrap
        $flexDirection="row"
        $alignItems="flex-end"
        $justifyContent="space-between">
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <RoomsFacilityList />
        </StyledFlexContainer>
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <ProductsFacilityList />
        </StyledFlexContainer>
        <StyledBorderBtn
          $variant="primary"
          className="service-col"
          onClick={handleFacilityModal}>
          편의시설 모두 보기
        </StyledBorderBtn>
        {showFacilityModal && (
          <FacilityModal onClose={() => setShowFacilityModal(false)} />
        )}
      </StyledServiceWrap>
    </StyledBorderWrap>
  );
};

export default ProductsFacility;
