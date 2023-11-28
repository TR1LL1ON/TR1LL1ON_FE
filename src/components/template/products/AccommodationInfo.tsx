import { useLocation } from 'react-router-dom';
import { handleCopyClipBoard } from '@/util/clipboard';
import { useState } from 'react';
import {
  AccommodationData,
  Facility,
  GuestCount,
} from '@/interfaces/interface';
import { GoHeart, GoShareAndroid } from 'react-icons/go';

import {
  StyledIconBox,
  StyledOnClick,
  StyledSelect,
  StyledServiceInfo,
  StyledTextBox,
  StyledWrap,
} from '@/style/products/productsStyle';
import {
  StyledTitle,
  StyledText,
  StyledFlexContainer,
  StyledSpacer,
} from '@/style/payment/paymentStyle';
import { Moment } from 'moment';
import CalenderModal from '@/components/layout/modal/calenderModal';
import ProductsFacilityList from './ProductsFacilityList';

interface AccommodationProp {
  onOpen: (e: React.MouseEvent) => void;
  guestCount: GuestCount;
  totalGuestCount: number;
  infoData: AccommodationData;
  productsFacility: Facility;
}
const AccommodationInfo = ({
  onOpen,
  guestCount,
  totalGuestCount,
  infoData,
  productsFacility,
}: AccommodationProp) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  // console.log(location);

  const handleShareClick = () => {
    console.log(handleCopyClipBoard);
    handleCopyClipBoard(`${baseUrl}${location.pathname}`);
  };
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const handleCalendarModal = () => {
    setShowCalendarModal(true);
  };

  const [dateInfo, setDateInfo] = useState({
    startDate: null as Moment | null,
    endDate: null as Moment | null,
    nights: 0,
  });
  const handleSaveDateInfo = (savedDateInfo: {
    startDate: Moment | null;
    endDate: Moment | null;
    nights: number;
  }) => {
    setDateInfo(savedDateInfo);
  };

  return (
    <StyledWrap>
      <StyledTextBox>
        <StyledFlexContainer>
          {infoData && <StyledTitle>{infoData.name}</StyledTitle>}
          <StyledIconBox $cursor="pointer" $gap="1rem">
            {/* 비로그인시 로그인페이지로 리다이렉트, 로그인시 찜목록 저장/GoHeartFill로 변경 */}
            <GoHeart onClick={() => alert('찜하기 미구현..😅')} />
            {/* <GoHeartFill /> */}
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
            {dateInfo.startDate && dateInfo.endDate ? (
              <StyledText $fontSize="1rem">
                {`${dateInfo.startDate.format(
                  'YY.MM.DD',
                )} ~ ${dateInfo.endDate.format('YY.MM.DD')} / ${
                  dateInfo.nights
                }박`}
              </StyledText>
            ) : (
              <StyledText $fontSize="1rem">날짜를 선택해주세요.</StyledText>
            )}
          </StyledFlexContainer>
          <StyledOnClick onClick={handleCalendarModal}>수정</StyledOnClick>
          {showCalendarModal && (
            <CalenderModal
              setShowModal={setShowCalendarModal}
              onSave={handleSaveDateInfo}
            />
          )}
        </StyledSelect>

        <StyledSelect>
          <StyledFlexContainer
            $flexDirection="column"
            $alignItems="flex-start"
            $gap=".5rem"
            onClick={onOpen}>
            <StyledText $fontSize="1rem" $fontWeight={700}>
              게스트
            </StyledText>
            <StyledText $fontSize="1rem">
              성인 {guestCount.adults}명 / 아동 {guestCount.children}명 / 유아
              {guestCount.infants}명 &nbsp;::&nbsp; 총 {totalGuestCount}명
            </StyledText>
          </StyledFlexContainer>
          <StyledOnClick onClick={onOpen}>수정</StyledOnClick>
        </StyledSelect>
      </StyledFlexContainer>
    </StyledWrap>
  );
};

export default AccommodationInfo;
