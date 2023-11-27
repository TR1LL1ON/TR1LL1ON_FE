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
// import { getProducts } from '@api/service';

const ProductCard = ({ accomodationID }: { accomodationID: string }) => {
  // async function fetchProducts() {
  //   try {
  //     const accomodationData = {
  //       checkIn: '2023-12-01', // 체크인 날짜
  //       checkOut: '2023-12-05', // 체크아웃 날짜
  //       personNumber: 2, // 인원 수
  //     };

  //     const res = await getProducts(accomodationData);
  //     console.log('조회 결과:', res.data);
  //   } catch (error) {
  //     console.error('조회 실패:', error);
  //   }
  // }

  // fetchProducts();

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${accomodationID}`);
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

const MainContainer = () => {
  return (
    <>
      <StyledGridContainer>
        <ProductCard accomodationID="1" />
        <ProductCard accomodationID="2" />
        <ProductCard accomodationID="3" />
        <ProductCard accomodationID="4" />
      </StyledGridContainer>
    </>
  );
};

export default MainContainer;
