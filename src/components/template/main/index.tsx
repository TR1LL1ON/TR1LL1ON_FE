import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/service';

import { mainData } from '@/interfaces/interface';

// API 응답 타입 정의
interface ProductsResponse {
  data: mainData[];
}

const MainContainer = () => {
  // const location = useLocation();
  // const categoryParam = new URLSearchParams(location.search).get('category');

  const { data, error, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error('조회 실패:', error);
    return <div>데이터를 불러오는 데 실패했습니다.</div>;
  }

  const productsData = Array.isArray(data?.data) ? data?.data : [];

  return (
    <>
      {productsData && productsData.length > 0 ? (
        <StyledGridContainer>
          {productsData?.map((product: mainData) => (
            <ProductCard
              key={product.accommodationId}
              accommodationID={product.accommodationId} // 변경됨
              imgUrl={product.imageUrl} // 변경됨
              name={product.name}
              price={product.price}
              address={product.address}
              score={product.score}
            />
          ))}
        </StyledGridContainer>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </>
  );
};

export default MainContainer;
