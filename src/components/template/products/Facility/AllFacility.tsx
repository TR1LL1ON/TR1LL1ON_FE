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

import {
  AccommodationFacility,
  Room,
  RoomFacility,
} from '@/interfaces/interface';
import TabModal from '../TabModal/TabModal';

interface AllFacilityProps {
  productsFacility: AccommodationFacility;
  roomsFacility: Room[];
}
const AllFacility = ({ productsFacility, roomsFacility }: AllFacilityProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };
  // roomsFacility에서 각 방의 facility를 추출하여 배열로 변환
  const transformedRoomsFacility = roomsFacility.flatMap((room) => {
    return Object.entries(room.facility)
      .filter(([_, value]) => value)
      .map(([key]) => key as keyof RoomFacility);
  });

  // 중복 제거
  const uniqueFacilities = Array.from(new Set(transformedRoomsFacility));

  //조건부 렌더링
  if (
    (!productsFacility || typeof productsFacility !== 'object') &&
    (!uniqueFacilities || !uniqueFacilities.length)
  ) {
    return null;
  }

  const productFacilityItems = (
    <ProductsFacilityList productsFacility={productsFacility} />
  );
  const roomFacilityItems = (
    <RoomsFacilityList roomsFacility={uniqueFacilities} />
  );

  const displayFacilities = React.Children.toArray([
    productFacilityItems,
    roomFacilityItems,
  ]);

  return (
    <StyledBorderWrap>
      <StyledH2Text $mt="0rem" $mb="2rem">
        숙소 편의시설
      </StyledH2Text>
      <FlexContainer>
        <ItemContainer>
          <StyledItem> {displayFacilities}</StyledItem>
        </ItemContainer>
        <ButtonContainer>
          <StyledBorderBtn $variant="primary" onClick={handleShowModal}>
            객실 이용 안내
          </StyledBorderBtn>

          {showModal && (
            <TabModal
              onClose={() => setShowModal(false)}
              productsFacility={productsFacility}
              roomsFacility={uniqueFacilities}
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
const ItemContainer = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
