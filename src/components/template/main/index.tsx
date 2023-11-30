import React, { useEffect, useRef, useState } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts, getProductsCategory } from '@/api/service';
import { useLocation } from 'react-router-dom';
import { mainData } from '@/interfaces/interface';

const MainContainer = () => {
  const [productCards, setProductCards] = useState<React.ReactNode[]>([]);
  const [showNoResults, setShowNoResults] = useState(false); //

  const location = useLocation();
  const categoryRef = useRef<string | null>(null);

  async function fetchProducts(categoryParam?: string) {
    try {
      const res = categoryParam
        ? await getProductsCategory(categoryParam)
        : await getProducts();
      const productsData = res.data;

      // 데이터가 배열이고, 비어 있지 않은 경우에만 처리
      if (Array.isArray(productsData) && productsData.length > 0) {
        setShowNoResults(false);
        const cards = productsData.map((product: mainData) => (
          <ProductCard
            key={product.accommodationId}
            address={product.address}
            accommodationID={product.accommodationId}
            imgUrl={product.imageUrl}
            name={product.name}
            score={product.score}
            price={product.price}
          />
        ));
        setProductCards(cards);
      } else {
        // 빈 배열이거나 유효하지 않은 데이터인 경우
        setShowNoResults(true);
        setProductCards([]);
      }
    } catch (error) {
      console.error('조회 실패:', error);
      // 에러 상황에 대한 추가 처리 (예: 에러 메시지 상태 업데이트)
      setShowNoResults(true);
      setProductCards([]);
    }
  }

  useEffect(() => {
    fetchProducts(categoryRef.current as string);
  }, [location.search]); // 의존성 배열 확인

  return (
    <>
      {showNoResults ? (
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '32px',
            color: '#bbb',
            marginTop: '40px',
          }}>
          검색 결과가 없습니다.
        </div>
      ) : (
        <StyledGridContainer>{productCards} </StyledGridContainer>
      )}
    </>
  );
};

export default MainContainer;
