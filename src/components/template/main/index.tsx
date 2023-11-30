import React, { useEffect, useRef, useState } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/service';
import { useLocation } from 'react-router-dom';
import { getGeolocation } from '@/util/geolocation';
import { useRecoilState } from 'recoil';
import { currPositionState } from '@/states/atom';

const MainContainer = () => {
  const [productCards, setProductCards] = useState<React.ReactNode[]>([]);
  const [showNoResults, setShowNoResults] = useState(false); //

  const location = useLocation();
  const categoryRef = useRef<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCategory = queryParams.get('category');
    categoryRef.current = newCategory;
    const areacode = queryParams.get('areacode');

    async function fetchProducts() {
      try {
        let res;
        if (categoryRef.current || areacode) {
          // 통합된 getProducts 함수 사용
          res = await getProducts({
            categoryCode: categoryRef.current || undefined,
            RegionCode: areacode || undefined,
          });
        } else {
          res = await getProducts();
        }

        const productsData = res.data;
        console.log(productsData);

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

    fetchProducts();
  }, [location.search]);

  //위치정보 받아오기
  const [currPosition, setCurrPosition] = useRecoilState(currPositionState);

  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const position = await getGeolocation();
        setCurrPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      } catch (error) {
        console.error('위치 정보를 받아오지 못했습니다');
      }
    };

    fetchCurrentLocation(); // 함수 호출

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
