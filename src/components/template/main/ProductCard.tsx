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
        <StyledImage src={imgUrl} />
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
