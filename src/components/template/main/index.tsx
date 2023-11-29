import React, { useEffect, useState } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/service';

const MainContainer = () => {
  const [productCards, setProductCards] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // const res = await getProducts('2023-12-01', '2023-12-05', '6');
        const res = await getProducts();

        const productsData = res.data;

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
      } catch (error) {
        console.error('조회 실패:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <StyledGridContainer>{productCards}</StyledGridContainer>
    </>
  );
};

export default MainContainer;
