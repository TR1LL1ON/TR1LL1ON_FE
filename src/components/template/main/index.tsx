import React, { useEffect, useRef, useState } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts, getProductsCategory } from '@/api/service';
import { useLocation } from 'react-router-dom';

const MainContainer = () => {
  const [productCards, setProductCards] = useState<React.ReactNode[]>([]);
  const [showNoResults, setShowNoResults] = useState(false); //

  const location = useLocation();
  const categoryRef = useRef<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCategory = queryParams.get('category');
    categoryRef.current = newCategory;

    async function fetchProducts(categoryParam?: string) {
      try {
        // const res = await getProducts('2023-12-01', '2023-12-05', '6');
        let res;
        if (categoryParam) {
          res = await getProductsCategory(categoryParam);
        } else {
          res = await getProducts();
        }

        const productsData = res.data;

        if (productsData.length === 0) {
          setShowNoResults(true);
          setProductCards([]);
        } else {
          setShowNoResults(false);
          const cards = productsData.map((product: any) => (
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
        }
      } catch (error) {
        console.error('조회 실패:', error);
      }
    }

    fetchProducts(categoryRef.current as string);
  }, [location.search]);

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
