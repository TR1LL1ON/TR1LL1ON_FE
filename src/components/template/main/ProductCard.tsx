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
  StyledScore,
} from '@/style/main/productCardStyle';
import { StyledLabel } from '@/style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '@/api/service';

export const ProductCard = ({
  accommodationID,
  imgUrl,
  name,
  price,
  address,
  score,
}: {
  accommodationID: string;
  imgUrl: string;
  name: string;
  price: number;
  address: string;
  score: number;
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${accommodationID}`);
  };

  const words = address.split(' ');
  const shortenedAddress = words.slice(0, 2).join(' ');

  return (
    <StyledProductCard onClick={handleCardClick}>
      <StyledThumbnail>
        <StyledImage imgUrl={imgUrl} />
      </StyledThumbnail>
      <StyledCardTextWrap>
        <StyledLabel>{shortenedAddress}</StyledLabel>
        <StyledProductTitle>{name}</StyledProductTitle>
        <StyledProductPrice>
          <StyledScore>★ {score}</StyledScore>
          <StyledSalePrice>{price.toLocaleString()}원</StyledSalePrice>
        </StyledProductPrice>
      </StyledCardTextWrap>
    </StyledProductCard>
  );
};
