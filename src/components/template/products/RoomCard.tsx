import { LuUser, LuBedSingle } from 'react-icons/lu';
import { useState } from 'react';
import {
  StyledWrap,
  StyledBrandText,
  StyledOnClick,
  StyledFlexRowGroup,
  StyledImgItem,
  StyledTextItem,
  StyledH2Text,
  StyledPriceText,
  StyledTextRow,
  StyledReservationBtn,
} from '@/style/products/productsStyle';
import { StyledFlexContainer } from '@/style/payment/paymentStyle';
import CartBtn from '@/components/layout/Button/cartBtn';
import DetailModal from './detailModal/detailModal';
import { useRecoilValue } from 'recoil';
import { guestCountState } from '@/states/atom';
import { Link } from 'react-router-dom';
import { Room } from '@/interfaces/interface';
import Carousel from './detailModal/carousel';

interface RoomCardProps {
  roomData: Room;
  // accomodationID: string;
}
const RoomCard: React.FC<RoomCardProps> = ({ roomData }) => {
  const imageUrls = roomData.image.map((item) => item.image_url);
  const guestCount = useRecoilValue(guestCountState);
  console.log('총 인원수', guestCount.totals);

  const [showDetailModal, setShowDetailModal] = useState(false);
  const handleDetailModal = () => {
    setShowDetailModal(true);
  };

  return (
    <StyledWrap>
      <StyledFlexRowGroup $gap="1rem">
        <StyledImgItem style={{ overflow: 'hidden' }}>
          <Carousel imageUrls={imageUrls} />
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
                <DetailModal
                  setShowModal={setShowDetailModal}
                  roomData={roomData}
                  imageUrls={imageUrls}
                />
              )}
            </StyledFlexContainer>
            <StyledH2Text
              $color="darkGray"
              $fontSize="1rem"
              $mt="0"
              $mb="0"
              $fontWeight={400}>
              {`체크인: ${roomData.check_in} ~ 체크아웃: ${roomData.check_out}`}
            </StyledH2Text>
          </div>
          <StyledPriceText>{`${roomData.aver_price}원`}</StyledPriceText>
          <StyledFlexContainer $flexDirection="row">
            <StyledBrandText>{`남은객실 ${roomData.count}`}</StyledBrandText>
            <StyledFlexContainer $gap=".5rem">
              <CartBtn />
              <Link to={`/payment?productId=${roomData.room_id}`}>
                <StyledReservationBtn $full={false} $variant="primary">
                  예약하기
                </StyledReservationBtn>
              </Link>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </StyledTextItem>
      </StyledFlexRowGroup>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledH2Text>{roomData.room_name}</StyledH2Text>
        <StyledTextRow>
          <LuUser className="icon" />

          {`기준 ${roomData.standard_number}인 | 최대 ${roomData.max_number}인`}
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
