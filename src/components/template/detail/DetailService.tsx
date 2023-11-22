import React from 'react';
import {
  StyledBorderWrap,
  StyledSubText,
} from '../../../style/detail/detailStyle';
import { StyledFlexContainer } from '../../../style/payment/paymentStyle';
import DetailServiceList from './DetailServiceList';

const DetailService = () => {
  return (
    <StyledBorderWrap>
      <StyledSubText $mt="0rem" $mb="2rem">
        숙소 편의시설
      </StyledSubText>
      <StyledFlexContainer
        $flexDirection="column"
        $alignItems="flex-start"
        $gap="1rem">
        <DetailServiceList />
      </StyledFlexContainer>
    </StyledBorderWrap>
  );
};

export default DetailService;
