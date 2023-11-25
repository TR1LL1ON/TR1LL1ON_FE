import { useState } from 'react';

import {
  StyledBorderWrap,
  StyledServiceWrap,
  StyledH2Text,
  StyledBorderBtn,
} from '../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../style/payment/paymentStyle';
import APIServiceList from './APIServiceList';
import EssentialServiceList from './EssentialServiceList';
import FacilityModal from './FacilityModal';

const DetailService = () => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);

  const handleFacilityModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('modal open');
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
          <EssentialServiceList />
        </StyledFlexContainer>
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <APIServiceList />
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

export default DetailService;
