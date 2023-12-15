import { LuUser, LuBedSingle } from 'react-icons/lu';
import { useState } from 'react';
import theme from '@/style/theme';
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
import { StyledFlexContainer, StyledText } from '@/style/payment/paymentStyle';
import CartBtn from '@/components/layout/Button/cartBtn';
import DetailModal from './detailModal/detailModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  reservationState,
  guestCountState,
  cartsDataState,
} from '@/states/atom';
import { Link } from 'react-router-dom';
import { Room, AccommodationData } from '@/interfaces/interface';

import Carousel from './detailModal/carousel';
import useAddCart from '@/hooks/useAddCart';
import CartModal from '@/components/layout/modal/CartModal';
import useGetCarts from '@/hooks/useGetCarts';
import { calculateCancellation } from '@/util/calculateCancellation';

interface RoomCardProps {
  roomData: Room;
  name: string;
  infoData: AccommodationData;
}
const RoomCard: React.FC<RoomCardProps> = ({ roomData, name, infoData }) => {
  const imageUrls = roomData.image.map((item) => item.imageUrl);
  const guestCount = useRecoilValue(guestCountState);
  const { checkIn, checkOut } = useRecoilValue(reservationState);
  const setCartsData = useSetRecoilState(cartsDataState);
  const handleAddCart = useAddCart(
    checkIn,
    checkOut,
    guestCount.totals,
    roomData.averPrice,
    roomData.roomId,
  );

  const [showCartModal, setShowCartModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const handleGetCarts = useGetCarts();

  const { cancellationStatus, isCancelable } = calculateCancellation(checkIn);
  const textColor = isCancelable ? 'green' : 'red'; // 취소 가능하면 녹색, 불가능하면 빨간색

  const handleDetailModal = () => {
    setShowDetailModal(true);
  };

  return (
    <StyledWrap>
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      <StyledFlexRowGroup $gap="1rem">
        <StyledImgItem style={{ overflow: 'hidden' }}>
          <Carousel imageUrls={imageUrls} />
        </StyledImgItem>
        <StyledTextItem
          $flexDirection="column"
          $justifyContent="space-between"
          $gap="0.5rem">
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
                  infoData={infoData}
                  imageUrls={imageUrls}
                  name={name}
                />
              )}
            </StyledFlexContainer>
            <StyledH2Text
              $color="darkGray"
              $fontSize="1rem"
              $mt="0"
              $mb="0"
              $fontWeight={400}>
              {`체크인: ${roomData.checkIn} ~ 체크아웃: ${roomData.checkOut}`}
            </StyledH2Text>
          </div>
          <StyledPriceText>
            {`${roomData.averPrice.toLocaleString()}원`}
            <StyledText
              $fontSize={theme.fontSizes.md}
              $fontWeight={theme.fontWeights.bold}
              $color={textColor}>
              {cancellationStatus}
            </StyledText>
          </StyledPriceText>

          <StyledFlexContainer $flexDirection="row">
            <StyledBrandText>{`남은객실 ${roomData.count}`}</StyledBrandText>
            <StyledFlexContainer $gap=".5rem">
              <CartBtn
                handleAddCart={handleAddCart}
                setShowCartModal={setShowCartModal}
              />
              <Link to={`/payment?productId=${roomData.roomId}`}>
                <StyledReservationBtn
                  onClick={() => {
                    handleAddCart()
                      .then(async () => {
                        console.log('카드 담기 성공');
                        const res = await handleGetCarts();
                        setCartsData(res);
                      })
                      .catch((error) => {
                        console.log(error, '카드 담기 에러');
                      });
                  }}
                  $full={false}
                  $variant="primary">
                  예약하기
                </StyledReservationBtn>
              </Link>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </StyledTextItem>
      </StyledFlexRowGroup>
      <StyledFlexContainer $flexDirection="column" $alignItems="flex-start">
        <StyledH2Text>{roomData.roomName}</StyledH2Text>
        <StyledTextRow>
          <LuUser className="icon" />
          {`기준 ${roomData.standardNumber}인 | 최대 ${roomData.maxNumber}인`}
        </StyledTextRow>
        <StyledTextRow>
          <LuBedSingle className="icon" />
          싱글 침대 1개
        </StyledTextRow>
      </StyledFlexContainer>
    </StyledWrap>
  );
};
export default RoomCard;
