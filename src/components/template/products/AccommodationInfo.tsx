import { useLocation } from 'react-router-dom';
import { handleCopyClipBoard } from '@/util/clipboard';
import { useState } from 'react';
import { GoHeart, GoShareAndroid } from 'react-icons/go';
import { useRecoilValue } from 'recoil';
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
import { dateRangeState } from '@/states/atom';
import ProductsFacilityList from './ProductsFacilityList';

interface AccommodationProp {}
const AccommodationInfo = ({}: AccommodationProp) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  // console.log(location);
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
  const { startDate, endDate } = useRecoilValue(dateRangeState);
  const [nights, setNights] = useState(0);

  return (
    <StyledWrap>
      <StyledTextBox>
        <StyledFlexContainer>
          <StyledTitle>마리나베이 속초</StyledTitle>
          <StyledIconBox $cursor="pointer" $gap="1rem">
            {/* 비로그인시 로그인페이지로 리다이렉트, 로그인시 찜목록 저장/GoHeartFill로 변경 */}
            <GoHeart onClick={() => alert('찜하기 미구현..😅')} />
            {/* <GoHeartFill /> */}
            <GoShareAndroid onClick={handleShareClick} />
          </StyledIconBox>
        </StyledFlexContainer>
        <StyledText>강원특별자치도 강릉시 주문진읍 해안로 2005 </StyledText>
        <StyledServiceInfo
          $flexDirection="row"
          $justifyContent="flex-start"
          $gap="1rem">
          <ProductsFacilityList />
        </StyledServiceInfo>
        <StyledOnClick $color="#444" $borderBottom="none">
          ★4.50 후기 0개
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
            {startDate && endDate ? (
              <StyledText $fontSize="1rem">
                {`${startDate.format('YY.MM.DD')} ~ ${endDate.format(
                  'YY.MM.DD',
                )} / 
            ${nights}박
                  `}
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
