import ProductsContainer from '@/components/template/products/ProductsContainer';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { accomodationID } = useParams<{ accomodationID: string }>();

  return (
    <div>
      {accomodationID && <ProductsContainer accomodationID={accomodationID} />}
    </div>
  );
};

export default Products;
