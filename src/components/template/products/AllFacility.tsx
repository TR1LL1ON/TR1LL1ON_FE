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
import FacilityModal from './FacilityModal';
import {
  AccommodationFacility,
  Room,
  RoomFacility,
} from '@/interfaces/interface';

interface AllFacilityProps {
  productsFacility: AccommodationFacility;
  roomsFacility: Room[];
}
const AllFacility = ({ productsFacility, roomsFacility }: AllFacilityProps) => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);

  const handleFacilityModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFacilityModal(true);
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
  // console.log('products🏰::', productsFacility);
  // console.log('rooms🎃::', uniqueFacilities);

  // 하나의 배열로 합침
  const productFacilityItems = (
    <ProductsFacilityList productsFacility={productsFacility} />
  );

  // 문자열 배열로 받은 roomsFacility를 `RoomsFacilityList` 컴포넌트에 전달
  const roomFacilityItems = (
    <RoomsFacilityList roomsFacility={uniqueFacilities} />
  );

  const displayFacilities = React.Children.toArray([
    productFacilityItems,
    roomFacilityItems,
  ]).slice(0, 9);

  // 9개 노출 다시 확인 필요
  // console.log('9개', displayFacilities);
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
          <StyledBorderBtn $variant="primary" onClick={handleFacilityModal}>
            편의시설 모두 보기
          </StyledBorderBtn>

          {showFacilityModal && (
            <FacilityModal
              productsFacility={productsFacility}
              roomsFacility={uniqueFacilities}
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
const ItemContainer = styled.div`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
