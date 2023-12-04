import styled from 'styled-components';
import theme from '@/style/theme';
import {
  ModalProps,
  AccommodationFacility,
  RoomFacility,
} from '@/interfaces/interface';
import { StyledButton } from '@/style/common/commonStyle';
import {
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledFlexContainer,
} from '@/style/payment/paymentStyle';
import { v4 as uuidv4 } from 'uuid';
import Carousel from './carousel';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import CartBtn from '@/components/layout/Button/cartBtn';

import { Link } from 'react-router-dom';
import ModalReview from './modalReview';

import {
  productsIconMapping,
  productsTextMapping,
  roomsIconMapping,
  roomsTextMapping,
} from '../iconAndTextMapping';
import { useState } from 'react';
import useAddCart from '@/hooks/useAddCart';
import { useRecoilValue } from 'recoil';
import { guestCountState, reservationState } from '@/states/atom';
import CartModal from '@/components/layout/modal/CartModal';
import { calculateCancellationFee, formatDateToMonthDay } from '@/util/util';

const DetailModal: React.FC<ModalProps> = ({
  setShowModal,
  infoData,
  roomData,
  imageUrls,
  ProductReview,
  name,
}) => {
  // 모달 밖 영역 클릭 시 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  const [showCartModal, setShowCartModal] = useState(false);
  const guestCount = useRecoilValue(guestCountState);
  const { checkIn, checkOut } = useRecoilValue(reservationState);

  const { cancellationFee, isCancelable } = calculateCancellationFee(checkIn);
  const textColor = isCancelable ? 'green' : 'red'; // 취소 가능하면 녹색, 불가능하면 빨간색

  const handleAddCart = useAddCart(
    checkIn,
    checkOut,
    guestCount.totals,
    roomData?.averPrice ?? 0,
    roomData?.roomId ?? 0,
  );

  function getTrueFacilities(
    facilities: AccommodationFacility | RoomFacility | undefined,
  ): string[] {
    if (!facilities) {
      return [];
    }

    return Object.keys(facilities).filter(
      (key) => facilities[key as keyof typeof facilities],
    );
  }

  const trueInfoDataFacilities = getTrueFacilities(infoData?.facility);
  const trueRoomDataFacilities = getTrueFacilities(roomData?.facility);

  if (!roomData || !imageUrls) {
    return <div>로딩중</div>;
  }

  console.log(checkIn);
  return (
    <StyledModal onClick={closeModal}>
      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      <StyledModalContent
        onClick={(e) => e.stopPropagation()}
        $width="40rem"
        $heigh="40rem">
        <StyledModalBody>
          <CarouselWrapper>
            <Carousel imageUrls={imageUrls} />
          </CarouselWrapper>

          <StyledTitle>{roomData.roomName}</StyledTitle>

          <StyledFlexContainer
            $justifyContent="flex-start"
            style={{
              marginBottom: '0.5rem',
            }}>
            <StyledText $fontWeight={theme.fontWeights.semiBold}>
              {infoData?.name}
            </StyledText>
          </StyledFlexContainer>

          <StyledModalFlexContainer>
            <StyledModalText $color="#808080">
              <LuUser />
              {`기준 ${roomData.standardNumber}인 | 최대 ${roomData.maxNumber}인`}
            </StyledModalText>
            {trueInfoDataFacilities.map((facility) => (
              <StyledModalText
                key={uuidv4()}
                $color="#808080"
                style={{ flex: '1 0 18%' }}>
                {productsIconMapping[facility]}
                {productsTextMapping[facility]}
              </StyledModalText>
            ))}
          </StyledModalFlexContainer>
          <StyledSubTitle $mt="2rem" $mb="0.5rem">
            주요 서비스 및 편의시설
          </StyledSubTitle>
          <StyledModalFlexContainer
            $justifyContent="flex-start"
            $gap="1rem"
            style={{
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}>
            {trueRoomDataFacilities.map((facility) => (
              <StyledModalText
                key={uuidv4()}
                $color="#808080"
                style={{ flex: '1 0 18%' }}>
                {roomsIconMapping[facility]}
                {roomsTextMapping[facility]}
              </StyledModalText>
            ))}
          </StyledModalFlexContainer>

          <StyledModalFlexContainer
            $justifyContent="flex-stat"
            $alignItems="left"
            $flexDirection="column">
            <StyledText
              $fontSize={theme.fontSizes.sm}
              $fontWeight={theme.fontWeights.bold}>
              숙박
            </StyledText>
            <StyledText
              $fontSize={theme.fontSizes.md}
              $fontWeight={theme.fontWeights.bold}>
              룸온리
            </StyledText>
            <StyledText $fontSize={theme.fontSizes.xs}>
              {`체크인: ${roomData.checkIn} ~ 체크아웃: ${roomData.checkOut}`}
            </StyledText>
            <StyledText
              $fontSize={theme.fontSizes.lg}
              $fontWeight={theme.fontWeights.bold}
              style={{ alignSelf: 'flex-end' }}>
              {`${roomData.averPrice.toLocaleString()}원`}
            </StyledText>
            <StyledFlexContainer $justifyContent="flex-end">
              <StyledText
                $fontSize={theme.fontSizes.sm}
                $fontWeight={theme.fontWeights.bold}
                $color={textColor}>
                {cancellationFee}
              </StyledText>
              <MdKeyboardArrowRight />
            </StyledFlexContainer>
          </StyledModalFlexContainer>
          <ModalReview
            ProductReview={ProductReview}
            name={name}
            roomId={roomData.roomId}
          />
          <StyledSubTitle $mt="3rem" $mb="0.5rem">
            취소 수수료
          </StyledSubTitle>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh>기간</StyledTh>
                <StyledTh>취소수수료율</StyledTh>
              </tr>
            </thead>
            <tbody>
              <tr>
                <StyledTd>{`${formatDateToMonthDay(
                  checkIn,
                  7,
                )} 00:00 전까지`}</StyledTd>
                <StyledTd>취소 패널티 0%</StyledTd>
              </tr>
              <tr>
                <StyledTd>{`${formatDateToMonthDay(
                  checkIn,
                  4,
                )} 00:00 전까지`}</StyledTd>
                <StyledTd>취소 패널티 50%</StyledTd>
              </tr>
              <tr>
                <StyledTd>{`${formatDateToMonthDay(
                  checkIn,
                  2,
                )} 00:00 전까지`}</StyledTd>
                <StyledTd>취소 패널티 80%</StyledTd>
              </tr>
              <tr>
                <StyledTd>체크인 당일 및 No-show</StyledTd>
                <StyledTd>취소 불가 및 환불 불가</StyledTd>
              </tr>
            </tbody>
          </StyledTable>
        </StyledModalBody>

        <StyledModalFooter>
          <StyledFlexContainer
            $alignItems="baseline"
            $flexDirection="column"
            style={{ padding: '1rem', height: '5rem' }}>
            <StyledFlexContainer $gap="0.3rem">
              <StyledText
                $fontSize={theme.fontSizes.sm}
                $fontWeight={theme.fontWeights.bold}>
                {`${formatDateToMonthDay(checkIn)}~${formatDateToMonthDay(
                  checkOut,
                )}`}
              </StyledText>
              <StyledText
                $fontSize={theme.fontSizes.xs}
                $fontWeight={theme.fontWeights.bold}
                $color={textColor}>
                {cancellationFee}
              </StyledText>
            </StyledFlexContainer>
            <StyledFlexContainer>
              <StyledText
                $fontSize={theme.fontSizes.lg}
                $fontWeight={theme.fontWeights.bold}>
                {`${roomData.averPrice.toLocaleString()}원`}
              </StyledText>
            </StyledFlexContainer>
          </StyledFlexContainer>
          <StyledFlexContainer style={{ height: '5rem' }}>
            <CartBtn
              handleAddCart={handleAddCart}
              setShowCartModal={setShowCartModal}
            />
            <Link to={`/payment?productId=${roomData.roomId}`}>
              <StyledButton
                onClick={() => {
                  handleAddCart()
                    .then(() => {
                      console.log('카드 담기 성공');
                    })
                    .catch((error) => {
                      console.log(error, '카드 담기 에러');
                    });
                }}
                $variant="primary"
                style={{
                  width: '15rem',
                  margin: '0.5rem',
                }}>
                예약하기
              </StyledButton>
            </Link>
          </StyledFlexContainer>
        </StyledModalFooter>
      </StyledModalContent>
    </StyledModal>
  );
};

export default DetailModal;

const StyledModalText = styled(StyledText)`
  display: flex;
  width: 40%;
  align-items: center;
  gap: 0.1rem;
`;

const StyledModalFlexContainer = styled(StyledFlexContainer)`
  border: 1px solid #d8d8d8;
  border-radius: 0.5rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f2f2f2;
  text-align: start;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const StyledModalBody = styled.div`
  overflow-y: auto;
  padding: 2rem;
`;

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px 0px;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledModalContent = styled.div<{
  $width?: string;
  $heigh?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$heigh || 'auto'};
  max-height: 80vh;
  overflow-y: auto;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 400px;
  overflow: hidden;
  border-radius: 0.5rem;
`;
