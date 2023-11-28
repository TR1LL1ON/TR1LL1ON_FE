import styled from 'styled-components';
import React, { useState } from 'react';
import {
  StyledBorderWrap,
  StyledH2Text,
  StyledBorderBtn,
  StyledItem,
} from '@/style/products/productsStyle';
import ProductsFacilityList from './ProductsFacilityList';
import RoomsFacilityList from './RoomsFacilityList';
import { Facility } from '@/interfaces/interface';
import FacilityModal from './FacilityModal';

interface AllFacilityProps {
  productsFacility: Facility;
  roomsFacility: Facility[];
}
const AllFacility = ({ productsFacility, roomsFacility }: AllFacilityProps) => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);

  const handleFacilityModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFacilityModal(true);
  };

  if (
    !productsFacility ||
    typeof productsFacility !== 'object' ||
    !roomsFacility.length
  ) {
    return <div>데이터가 올바르지 않습니다.</div>;
  }
  // console.log('products🏰::', productsFacility);
  // console.log('rooms🎃::', roomsFacility);

  // 하나의 배열로 합침
  const productFacilityItems = (
    <ProductsFacilityList productsFacility={productsFacility} />
  );

  // 문자열 배열로 받은 roomsFacility를 `RoomsFacilityList` 컴포넌트에 전달
  const roomFacilityItems = <RoomsFacilityList roomsFacility={roomsFacility} />;

  const displayFacilities = React.Children.toArray([
    productFacilityItems,
    roomFacilityItems,
  ]).slice(0, 9);

  // console.log('9개', displayFacilities[0]);
  return (
    <StyledBorderWrap>
      <StyledH2Text $mt="0rem" $mb="2rem">
        숙소 편의시설
      </StyledH2Text>
      <FlexContainer>
        <div>
          <StyledItem> {displayFacilities}</StyledItem>
        </div>
        <ButtonContainer>
          <StyledBorderBtn $variant="primary" onClick={handleFacilityModal}>
            편의시설 모두 보기
          </StyledBorderBtn>
          {showFacilityModal && (
            <FacilityModal
              productsFacility={productsFacility}
              roomsFacility={roomsFacility}
              onClose={() => setShowFacilityModal(false)}
            />
          )}
        </ButtonContainer>
      </FlexContainer>
    </StyledBorderWrap>
  );
};
export default AllFacility;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
