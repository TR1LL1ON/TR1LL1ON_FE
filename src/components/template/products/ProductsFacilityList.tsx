import { AccommodationFacility } from '@/interfaces/interface';
import { productsIconMapping, productsTextMapping } from './iconAndTextMapping';

interface ProductsFacilityListProps {
  productsFacility: AccommodationFacility;
}

const ProductsFacilityList: React.FC<ProductsFacilityListProps> = ({
  productsFacility,
}) => {
  // true인 항목들만 필터링
  const facilityKeys = Object.entries(productsFacility)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  // 아이콘과 텍스트 매핑
  const facilityElements = facilityKeys.map((key, index) => (
    <p className="mapping" key={`product-facility-${index}`}>
      {productsIconMapping[key]} {productsTextMapping[key]}
    </p>
  ));

  return <>{facilityElements}</>;
};
export default ProductsFacilityList;
