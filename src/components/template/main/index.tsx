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
import { postLogin, postSignUp } from '@/api/service';
import { useEffect } from 'react';
// import { getProducts } from '@api/service';

const ProductCard = ({ accomodationID }: { accomodationID: string }) => {
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const res = await postSignUp('hojin@mail.com', '호진', '1234');
  //       console.log(res);
  //     } catch (error) {
  //       console.error('조회 실패:', error);
  //     }
  //   }

  //   fetchProducts();
  // }, []);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const res = await postLogin('test12@mail.com', '1234');
  //       console.log(res);
  //     } catch (error) {
  //       console.error('조회 실패:', error);
  //     }
  //   }

  //   fetchProducts();
  // }, []);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${accomodationID}`);
  };

  const fetchProducts = async () => {
    try {
      const res = await postLogin('test12@mail.com', '1234');
      console.log(res);
    } catch (error) {
      console.error('조회 실패:', error);
    }
  };

  return (
    <>
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
      <button onClick={fetchProducts}>로그인하기</button>
    </>
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
