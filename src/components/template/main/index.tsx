import {
  StyledProductCard,
  StyledGridContainer,
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

const ProductCard = () => {
  return (
    <StyledProductCard>
      <StyledThumbnail>
        <StyledImage />
      </StyledThumbnail>
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

const MainContainer = () => {
  return (
    <>
      <StyledGridContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </StyledGridContainer>
    </>
  );
};

export default MainContainer;
