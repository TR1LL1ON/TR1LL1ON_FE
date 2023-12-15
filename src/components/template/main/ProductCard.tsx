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
import { StyledHeartIcon } from '../mypage/wishCard';
import { useState } from 'react';

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
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${accommodationID}`);
  };

  const words = address.split(' ');
  const shortenedAddress = words.slice(0, 2).join(' ');

  const handleToggleWish = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  return (
    <StyledProductCard onClick={handleCardClick}>
      <StyledThumbnail>
        <StyledHeartIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
          onClick={handleToggleWish}>
          <path
            d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
            fill={isLiked ? '' : 'transparent'}></path>
        </StyledHeartIcon>
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
