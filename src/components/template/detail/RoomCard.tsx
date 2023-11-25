import { LuUser, LuBedSingle } from 'react-icons/lu';
import { useState } from 'react';
import {
  StyledWrap,
  StyledImgBox,
  StyledBrandText,
  StyledOnClick,
  StyledFlexRowGroup,
  StyledImgItem,
  StyledTextItem,
  StyledH2Text,
  StyledPriceText,
  StyledTextRow,
  StyledReservationBtn,
} from '../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../style/payment/paymentStyle';
import CartBtn from '../../layout/Button/cartBtn';
import DetailModal from './detailModal/detailModal';

const RoomCard = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const handleDetailModal = () => {
    setShowDetailModal(true);
  };
  const imgSrc: string =
    '//a0.muscache.com/im/pictures/fe84676f-e446-45b2-9d35-bcaf5dbc7469.jpg?im_w=720';
  return (
    <StyledWrap>
      <StyledFlexRowGroup $gap="1rem">
        <StyledImgItem>
          <StyledImgBox backgroundImage={imgSrc} />
        </StyledImgItem>
        <StyledTextItem
          $flexDirection="column"
          $justifyContent="space-between"
          $gap="1rem">
          <div>
            <StyledFlexContainer $flexDirection="row">
              <StyledH2Text>숙박</StyledH2Text>
              <StyledOnClick onClick={handleDetailModal}>
                상세보기
              </StyledOnClick>
              {showDetailModal && (
                <DetailModal setShowModal={setShowDetailModal} />
              )}
            </StyledFlexContainer>
            <StyledH2Text
              $color="darkGray"
              $fontSize="1rem"
              $mt="0"
              $mb="0"
              $fontWeight={400}>
              체크인: 15:00~체크아웃:11:00
            </StyledH2Text>
          </div>
          <StyledPriceText>400000원</StyledPriceText>
          <StyledFlexContainer $flexDirection="row">
            <StyledBrandText>남은객실</StyledBrandText>
            <StyledFlexContainer $gap=".5rem">
              <CartBtn />
              <StyledReservationBtn $full={false} $variant="primary">
                예약하기
              </StyledReservationBtn>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </StyledTextItem>
      </StyledFlexRowGroup>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledH2Text>더블 스탠다드 룸</StyledH2Text>
        <StyledTextRow>
          <LuUser className="icon" />
          기준 2인 | 최대 2인
        </StyledTextRow>
        <StyledTextRow>
          <LuBedSingle className="icon" />
          싱글 침대 2개
        </StyledTextRow>
      </StyledFlexContainer>
    </StyledWrap>
  );
};
export default RoomCard;
