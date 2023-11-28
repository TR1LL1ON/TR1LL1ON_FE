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
} from '@/style/main/productCardStyle';
import { StyledLabel } from '@/style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '@/api/service';

export const ProductCard = ({
  accommodationID,
}: {
  accommodationID: string;
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${accommodationID}`);
  };

  return (
    <StyledProductCard onClick={handleCardClick}>
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
