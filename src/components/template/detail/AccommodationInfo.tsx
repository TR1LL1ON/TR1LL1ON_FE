import { useState } from 'react';
import { GuestCount } from '../../../interfaces/interface';
import {
  StyledOnClick,
  StyledSelect,
  StyledServiceInfo,
  StyledWrap,
} from '../../../style/detail/detailStyle';
import {
  StyledTitle,
  StyledText,
  StyledFlexContainer,
  StyledSpacer,
} from '../../../style/payment/paymentStyle';
import APIServiceList from './APIServiceList';
import { Moment } from 'moment';
import CalenderModal from '../../layout/modal/calenderModal';

interface AccommodationProp {
  onOpen: (e: React.MouseEvent) => void;
  guestCount: GuestCount;
  totalGuestCount: number;
}
const AccommodationInfo = ({
  onOpen,
  guestCount,
  totalGuestCount,
}: AccommodationProp) => {
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
      <StyledTitle>마리나베이 속초</StyledTitle>
      <StyledText>강원특별자치도 강릉시 주문진읍 해안로 2005 </StyledText>
      <StyledServiceInfo
        $flexDirection="row"
        $justifyContent="flex-start"
        $gap="1rem">
        <APIServiceList />
      </StyledServiceInfo>

      <StyledOnClick $color="#444" $borderBottom="none">
        ★4.50 후기 0개
      </StyledOnClick>
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
