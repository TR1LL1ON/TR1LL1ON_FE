import React from 'react';
import {
  SmallButtonBlack,
  StyledBorderWrap,
  StyledServiceWrap,
  StyledSubText,
} from '../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../style/payment/paymentStyle';
import APIServiceList from './APIServiceList';
import EssentialServiceList from './EssentialServiceList';

const DetailService = () => {
  return (
    <StyledBorderWrap>
      <StyledSubText $mt="0rem" $mb="2rem">
        숙소 편의시설
      </StyledSubText>
      <StyledServiceWrap
        $flexDirection="row"
        $alignItems="flex-end"
        $justifyContent="space-between">
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <EssentialServiceList />
        </StyledFlexContainer>
        <StyledFlexContainer
          className="service-col"
          $flexDirection="column"
          $alignItems="flex-start"
          $gap="1rem">
          <APIServiceList />
        </StyledFlexContainer>
        <SmallButtonBlack className="service-col">
          편의시설 모두 보기
        </SmallButtonBlack>
      </StyledServiceWrap>
    </StyledBorderWrap>
  );
};

export default DetailService;
