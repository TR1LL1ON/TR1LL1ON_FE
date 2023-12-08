import { useLocation } from 'react-router-dom';
import { handleCopyClipBoard } from '@/util/clipboard';
import { useState, useEffect } from 'react';
import {
  AccommodationData,
  AccommodationFacility,
  ProductReview,
} from '@/interfaces/interface';
import { GoHeart, GoShareAndroid } from 'react-icons/go';
import { useRecoilValue, useRecoilState } from 'recoil';
import { guestCountState } from '@/states/atom';
import {
  StyledIconBox,
  StyledOnClick,
  StyledSelect,
  StyledServiceInfo,
  StyledTextBox,
  StyledWrap,
  StyledBold,
} from '@/style/products/productsStyle';
import {
  StyledTitle,
  StyledText,
  StyledFlexContainer,
  StyledSpacer,
} from '@/style/payment/paymentStyle';
import CalenderModal from '@/components/layout/modal/calenderModal';
import GuestModal from './GuestModal/guestModal';
import { reservationState } from '@/states/atom';
import ProductsFacilityList from './ProductsFacilityList';
import { formatDate } from '@/util/util';
import { calculateAverageScore } from '@/util/reviewUtilities';

interface AccommodationProp {
  infoData: AccommodationData;
  productsFacility: AccommodationFacility;
  productReview: ProductReview[] | undefined;
  scrollToReview: () => void;
}
const AccommodationInfo = ({
  infoData,
  productsFacility,
  productReview,
  scrollToReview,
}: AccommodationProp) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const guestCount = useRecoilValue(guestCountState);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const handleGuestModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGuestModal(true);
  };
  const handleShareClick = () => {
    console.log(handleCopyClipBoard);
    handleCopyClipBoard(`${baseUrl}${location.pathname}`);
  };

  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const handleCalendarModal = () => {
    setShowCalendarModal(true);
  };
  const { checkIn, checkOut } = useRecoilValue(reservationState);
  const [, setReservation] = useRecoilState(reservationState);

  const today: Date = new Date();
  const tomorrow: Date = new Date();
  tomorrow.setDate(today.getDate() + 1);

  //상품 변경시 일정 초기화
  useEffect(() => {
    setReservation((prevReservation) => ({
      ...prevReservation,
      checkIn: formatDate(today),
      checkOut: formatDate(tomorrow),
    }));
  }, []);
  const [nights, setNights] = useState(1);

  //리뷰 평점
  const averageScore = calculateAverageScore(productReview);
  const formattedAverageScore = averageScore.toFixed(1);

  return (
    <StyledWrap>
      <StyledTextBox>
        <StyledFlexContainer>
          {infoData && <StyledTitle>{infoData.name}</StyledTitle>}
          <StyledIconBox $cursor="pointer" $gap="1rem">
            <GoHeart />
            <GoShareAndroid onClick={handleShareClick} />
          </StyledIconBox>
        </StyledFlexContainer>
        {infoData && <StyledText>{infoData.address} </StyledText>}
        <StyledServiceInfo
          $flexDirection="row"
          $justifyContent="flex-start"
          $gap="1rem">
          <ProductsFacilityList productsFacility={productsFacility} />
        </StyledServiceInfo>
        <StyledOnClick
          $color="#444"
          $borderBottom="none"
          onClick={scrollToReview}>
          ★{formattedAverageScore} 후기 {productReview?.length}개
        </StyledOnClick>
      </StyledTextBox>
      <StyledSpacer />
      <StyledFlexContainer $flexDirection="column" $gap="1rem">
        <StyledSelect>
          <StyledFlexContainer
            $flexDirection="column"
            $alignItems="flex-start"
            $gap=".5rem">
            <StyledText $fontSize="1rem" $fontWeight={700}>
              날짜
            </StyledText>
            {checkIn && checkOut ? (
              <StyledText $fontSize="1rem">
                {`${checkIn} ~ ${checkOut} / ${nights}박`}
              </StyledText>
            ) : (
              <StyledText $fontSize="1rem">날짜를 선택해주세요.</StyledText>
            )}
          </StyledFlexContainer>
          <StyledOnClick onClick={handleCalendarModal}>수정</StyledOnClick>
          {showCalendarModal && (
            <CalenderModal
              setShowModal={setShowCalendarModal}
              nights={nights}
              setNights={setNights}
            />
          )}
        </StyledSelect>

        <StyledSelect>
          <StyledFlexContainer
            $flexDirection="column"
            $alignItems="flex-start"
            $gap=".5rem"
            onClick={handleGuestModal}>
            <StyledText $fontSize="1rem" $fontWeight={700}>
              게스트
            </StyledText>

            <StyledText $fontSize="1rem">
              성인 {guestCount.adults}명 / 아동 {guestCount.children}명 /
              유아&nbsp;
              {guestCount.infants}명 &nbsp;: &nbsp;
              <StyledBold $fontWeight={700}>
                총 {guestCount.totals}명
              </StyledBold>
            </StyledText>
          </StyledFlexContainer>
          <StyledOnClick onClick={handleGuestModal}>수정</StyledOnClick>
          {showGuestModal && (
            <GuestModal onClose={() => setShowGuestModal(false)} />
          )}
        </StyledSelect>
      </StyledFlexContainer>
    </StyledWrap>
  );
};

export default AccommodationInfo;
