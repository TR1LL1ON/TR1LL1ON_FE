import styled from 'styled-components';
import React, { useState } from 'react';
import {
  StyledBorderWrap,
  StyledH2Text,
  StyledBorderBtn,
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

  // 최대 9개까지만 표시

  const maxMappingsToShow = 9;
  const displayedFacilities = uniqueFacilities.slice(0, maxMappingsToShow);
  //조건부 렌더링
  if (
    (!productsFacility || typeof productsFacility !== 'object') &&
    (!displayedFacilities || !displayedFacilities.length)
  ) {
    return null;
  }

  const productFacilityItems = (
    <ProductsFacilityList productsFacility={productsFacility} />
  );
  const roomFacilityItems = (
    <RoomsFacilityList roomsFacility={displayedFacilities} />
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
      <StyledMappingContainer>
        <StyledItemContainer>
          <StyledItem className="StyledItem"> {displayFacilities}</StyledItem>
        </StyledItemContainer>
        <StyledButtonContainer>
          <StyledBorderBtn $variant="primary" onClick={handleShowModal}>
            숙소 정보 더보기
          </StyledBorderBtn>

          {showModal && (
            <TabModal
              onClose={() => setShowModal(false)}
              productsFacility={productsFacility}
              roomsFacility={uniqueFacilities}
            />
          )}
        </StyledButtonContainer>
      </StyledMappingContainer>
    </StyledBorderWrap>
  );
};

export default AllFacility;
const StyledMappingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const StyledItemContainer = styled.div`
  width: 100%;
`;

const StyledItem = styled.div`
  padding: 1rem 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.darkGray};
  display: grid;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  max-height: 10rem;
  overflow: hidden;
  & svg {
    font-size: ${(props) => props.theme.fontSizes.xl};
    margin-right: 1rem;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    max-height: 17rem;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
    max-height: 23rem;
  }
`;

const StyledButtonContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 2rem;
  @media screen and (max-width: 750px) {
    padding: 2rem 3rem 0;
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;
