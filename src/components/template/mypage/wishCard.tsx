import styled from 'styled-components';
import {
  StyledProductCard,
  StyledThumbnail,
  StyledImage,
  StyledCardTextWrap,
  StyledProductTitle,
  StyledProductPrice,
  StyledDiscount,
  StyledOriginalPrice,
  StyledSalePrice,
} from '../../../style/main/productCardStyle';
import { StyledLabel } from '../../../style/payment/paymentStyle';

const WishCard = () => {
  return (
    <StyledProductCard>
      <StyledWishThumbnail>
        <StyledHeartIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false">
          <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
        </StyledHeartIcon>
        <StyledImage />
      </StyledWishThumbnail>
      <StyledCardTextWrap>
        <StyledLabel>서울 명동</StyledLabel>
        <StyledProductTitle>스탠포드 호텔 서울</StyledProductTitle>
        <StyledProductPrice>
          <StyledDiscount>6%</StyledDiscount>
          <StyledOriginalPrice>145,000</StyledOriginalPrice>
          <StyledSalePrice>135,000원</StyledSalePrice>
        </StyledProductPrice>
      </StyledCardTextWrap>
    </StyledProductCard>
  );
};

export default WishCard;

const StyledWishThumbnail = styled(StyledThumbnail)`
  position: relative;
`;

const StyledHeartIcon = styled.svg`
  fill: red;
  height: 24px;
  width: 24px;
  stroke: white;
  stroke-width: 2;
  overflow: visible;
  position: absolute;
  top: 8px;
  right: 8px;
`;
