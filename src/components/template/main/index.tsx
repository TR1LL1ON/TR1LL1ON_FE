import { StyledGridContainer } from '@/style/main/productCardStyle';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/service';
import { AccommodationData } from '@/interfaces/interface';

const MainContainer = () => {
  // async function fetchProducts() {
  //   try {
  //     const accommodationData = {
  //       checkIn: '2023-12-01', // 체크인 날짜
  //       checkOut: '2023-12-05', // 체크아웃 날짜
  //       personNumber: 2, // 인원 수
  //     };

  //     const res = await getProducts(accommodationData);
  //     console.log('조회 결과:', res.data);
  //   } catch (error) {
  //     console.error('조회 실패:', error);
  //   }
  // }

  // fetchProducts();

  return (
    <>
      <StyledGridContainer>
        <ProductCard accommodationID="1" />
        <ProductCard accommodationID="2" />
        <ProductCard accommodationID="3" />
        <ProductCard accommodationID="4" />
      </StyledGridContainer>
    </>
  );
};

export default MainContainer;
