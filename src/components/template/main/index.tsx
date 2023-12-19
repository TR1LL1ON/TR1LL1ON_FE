import { useRef } from 'react';
import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/service';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Product {
  accommodationId: number;
  address: string;
  imageUrl: string;
  name: string;
  score: number;
  price: number;
}

const MainContainer = () => {
  const location = useLocation();
  const categoryRef = useRef<string | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const newCategory = queryParams.get('category');
  categoryRef.current = newCategory;
  const areaCode = queryParams.get('areacode');

  const fetchProducts = async ({ pageParam = 0 }) => {
    const options = {
      categoryCode: categoryRef.current || undefined,
      RegionCode: areaCode || undefined,
      maxId: pageParam.toString(),
      pageSize: 20,
    };

    try {
      const res = await getProducts(options);
      console.log(res.data);
      return {
        data: res.data,
      };
    } catch (error) {
      throw new Error('Error fetching products');
    }
  };

  const {
    data: productsData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['products', categoryRef.current, areaCode],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const lastData = lastPage.data[lastPage.data.length - 1];
      return lastData ? lastData.accommodationId : null;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (
    !productsData ||
    productsData.pages.every((page) => page.data.length === 0)
  ) {
    return (
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#666',
          paddingTop: '100px',
          paddingBottom: '100px',
        }}>
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }>
      <StyledGridContainer style={{ minHeight: '800px' }}>
        {productsData &&
          productsData.pages.map((page) =>
            page.data.map((product: Product) => (
              <ProductCard
                key={product.accommodationId}
                address={product.address}
                accommodationID={product.accommodationId}
                imgUrl={product.imageUrl}
                name={product.name}
                score={product.score}
                price={product.price}
              />
            )),
          )}
        {!hasNextPage && (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '24px',
              color: '#666',
              paddingTop: '100px',
              paddingBottom: '100px',
            }}>
            검색 결과의 끝
          </div>
        )}
      </StyledGridContainer>
    </InfiniteScroll>
  );
};
export default MainContainer;
