import {
  StyledProductCard,
  StyledThumbnail,
  StyledImage,
  StyledCardTextWrap,
  StyledProductTitle,
  StyledProductPrice,
  StyledSalePrice,
  StyledScore,
} from '@/style/main/productCardStyle';
import { StyledLabel } from '@/style/payment/paymentStyle';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({
  accommodationID,
  imgUrl,
  name,
  price,
  address,
  score,
}: {
  accommodationID: number;
  imgUrl: string;
  name: string;
  price: number;
  address: string;
  score: number;
}) => {
  const navigate = useNavigate();
  const formattedScore = score.toFixed(1);
  const handleCardClick = () => {
    navigate(`/products/${accommodationID}`, { state: { formattedScore } });
  };

  const words = address.split(' ');
  const shortenedAddress = words.slice(0, 2).join(' ');

  return (
    <StyledProductCard onClick={handleCardClick}>
      <StyledThumbnail>
        <StyledImage src={imgUrl} />
      </StyledThumbnail>
      <StyledCardTextWrap>
        <StyledLabel>{shortenedAddress}</StyledLabel>
        <StyledProductTitle>{name}</StyledProductTitle>
        <StyledProductPrice>
          <StyledScore>★ {formattedScore}</StyledScore>
          <StyledSalePrice>
            {price !== null ? price.toLocaleString() : '0'}원
          </StyledSalePrice>
        </StyledProductPrice>
      </StyledCardTextWrap>
    </StyledProductCard>
  );
};
