import { useEffect, useRef, useState } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/service';
import { useLocation } from 'react-router-dom';
import { getGeolocation } from '@/util/geolocation';
import { useRecoilState } from 'recoil';
import { currPositionState } from '@/states/atom';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

interface Product {
  accommodationId: string;
  address: string;
  imageUrl: string;
  name: string;
  score: number;
  price: number;
}

const getLastProductId = (data: Product[] | undefined) => {
  if (data && data.length > 0) {
    return data[data.length - 1].accommodationId;
  }
  return null;
};

const MainContainer = () => {
  const location = useLocation();
  const categoryRef = useRef<string | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const newCategory = queryParams.get('category');
  categoryRef.current = newCategory;
  const areaCode = queryParams.get('areacode');

  const [maxId, setMaxId] = useState<string>('0');
  const [_, setCurrPosition] = useRecoilState(currPositionState);

  // 위치정보 받아오기
  useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const position = await getGeolocation();
        setCurrPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log('position', position);
      } catch (error) {
        console.error('위치 정보를 받아오지 못했습니다');
      }
    };

    fetchCurrentLocation();
  }, []);

  const fetchProducts = async (maxId: string) => {
    const options = {
      categoryCode: categoryRef.current || undefined,
      RegionCode: areaCode || undefined,
      maxId: maxId || undefined,
      pageSize: 100,
    };

    try {
      const res = await getProducts(options);
      console.log(res.data);
      const lastProductId = getLastProductId(productsData);
      if (lastProductId) {
        setMaxId(lastProductId);
        console.log(lastProductId);
      }

      return res.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  };

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products', categoryRef.current, areaCode],
    queryFn: () => fetchProducts(maxId),
    enabled: !!maxId,
  });
  // const {
  //   data: productsData,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  //   isError,
  // } = useInfiniteQuery(['products', categoryRef.current, areaCode], fetchProducts, {
  //   getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].accommodationId,
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <StyledGridContainer style={{ minHeight: '800px' }}>
        {productsData && Array.isArray(productsData) ? (
          productsData.map((product) => (
            <ProductCard
              key={product.accommodationId}
              address={product.address}
              accommodationID={product.accommodationId}
              imgUrl={product.imageUrl}
              name={product.name}
              score={product.score}
              price={product.price}
            />
          ))
        ) : (
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
        )}
      </StyledGridContainer>
    </div>
  );
};
export default MainContainer;
