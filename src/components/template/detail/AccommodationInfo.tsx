import { useState } from 'react';
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

const AccommodationInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledWrap>
      <StyledTitle>마리나베이 속초</StyledTitle>
      {/* 기존 디자인 시안 :  최대인원, 침실/욕실 수 => 숙소 전체에 해당하는 정보로 변경되야 함  */}
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
            $gap=".5rem"
            onClick={() => setIsModalOpen(true)}>
            <StyledText $fontSize="1rem" $fontWeight={700}>
              날짜
            </StyledText>
            <StyledText $fontSize="1rem"> 2023.11.12~11.13 / 1박</StyledText>
          </StyledFlexContainer>
          <StyledOnClick onClick={() => setIsModalOpen(true)}>
            수정
          </StyledOnClick>
        </StyledSelect>

        <StyledSelect>
          <StyledFlexContainer
            $flexDirection="column"
            $alignItems="flex-start"
            $gap=".5rem"
            onClick={() => setIsModalOpen(true)}>
            <StyledText $fontSize="1rem" $fontWeight={700}>
              게스트
            </StyledText>
            <StyledText $fontSize="1rem"> 성인 n명 / 아동 n명</StyledText>
          </StyledFlexContainer>
          <StyledOnClick onClick={() => setIsModalOpen(true)}>
            수정
          </StyledOnClick>
        </StyledSelect>
      </StyledFlexContainer>
      {/* {isModalOpen && <GuestModal onClose={() => setIsModalOpen(false)} />} */}
    </StyledWrap>
  );
};

export default AccommodationInfo;
