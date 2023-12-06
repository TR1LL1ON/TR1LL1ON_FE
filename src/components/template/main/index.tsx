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

  const [bottom, setBottom] = useState<HTMLDivElement | null>(null);
  const bottomObserver = useRef<IntersectionObserver | null>(null);

  const [maxId, setMaxId] = useState<string>('0');

  const queryParams = new URLSearchParams(location.search);
  const newCategory = queryParams.get('category');
  categoryRef.current = newCategory;

  const areaCode = queryParams.get('areacode');

  const fetchProducts = async () => {
    try {
      const options = {
        categoryCode: categoryRef.current || undefined,
        RegionCode: areaCode || undefined,
        maxId: maxId || undefined,
        pageSize: 20,
      };

      const res = await getProducts(options);

      const productsData = res.data;
      console.log(`${maxId}:` + productsData);

      if (productsData.length === 0) {
        setShowNoResults(true);
        setProductCards((prevCards) => [...prevCards]);
      } else {
        const lastAccommodationId =
          productsData[productsData.length - 1].accommodationId;
        setMaxId(lastAccommodationId);
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
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('Intersecting!');
          fetchProducts();
        }
      },
      { threshold: 0, rootMargin: '600px' },
    );
    bottomObserver.current = observer;

    const observerInstance = bottomObserver.current;
    if (bottom) {
      observerInstance?.observe(bottom);
    }

    return () => {
      if (bottom) {
        observerInstance?.unobserve(bottom);
      }
    };
  }, [bottom, fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [location.search]);

  //위치정보 받아오기
  const [_, setCurrPosition] = useRecoilState(currPositionState);

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
      {/* <div style={{ height: '1000px' }}></div> */}
      <div
        ref={(ref) => setBottom(ref)}
        // style={{ height: '1rem', backgroundColor: 'red' }}
      />
    </>
  );
};

export default MainContainer;
