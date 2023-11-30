import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsCategory } from '@/api/service';
import { useLocation } from 'react-router-dom';
import { mainData } from '@/interfaces/interface';

// API 응답 타입 정의
interface ProductsResponse {
  data: mainData[];
}

const MainContainer = () => {
  const location = useLocation();
  const categoryParam = new URLSearchParams(location.search).get('category');

  const { data, error, isLoading, isError } = useQuery<ProductsResponse>({
    queryKey: ['products', categoryParam],
    queryFn: () =>
      categoryParam ? getProductsCategory(categoryParam) : getProducts(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error('조회 실패:', error);
    return <div>데이터를 불러오는 데 실패했습니다.</div>;
  }

  const productsData = data?.data || [];
  console.log(productsData);

  return (
    <>
      {productsData.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <StyledGridContainer>
          {productsData.map((product: mainData) => (
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
      )}
    </>
  );
};

export default MainContainer;
