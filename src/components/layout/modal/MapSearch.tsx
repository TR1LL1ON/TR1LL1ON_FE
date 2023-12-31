import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { StyledH2Text } from '@/style/products/productsStyle';
import { MapProps } from '@/components/template/products/Map';
import { getAllProducts } from '@/api/service';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '@/components/LoadingSpinner';
// import LoadingSpinner from '@/components/LoadingSpinner';

interface Product {
  accommodationId: string;
  latitude: number;
  longitude: number;
  name: string;
}

const containerStyle = {
  width: '100%',
  height: '33rem',
};
const myStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];
const OPTIONS = {
  minZoom: 7,
  maxZoom: 16,
  disableDefaultUI: true,
  styles: myStyles,
};

const MapSearch: React.FC<MapProps & { closeMapModal: () => void }> = ({
  lat,
  lng,
  closeMapModal,
}) => {
  const navigate = useNavigate();

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ['product'],
    queryFn: async () => {
      const response = await getAllProducts();
      return response.data;
    },
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  });

  const [_, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  if (!productsData || isLoading) return <LoadingSpinner />;
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <StyledH2Text $mt="0rem" $mb="2rem">
        내 주변 숙소 검색
      </StyledH2Text>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          onLoad={onLoad}
          zoom={12}
          onUnmount={onUnmount}
          options={OPTIONS}>
          {productsData?.map((product) => (
            <MarkerF
              key={product.accommodationId}
              position={{
                lat: Number(product.latitude),
                lng: Number(product.longitude),
              }}
              onClick={() => {
                const url = `/products/${product.accommodationId}`;
                navigate(url);
                closeMapModal();
              }}></MarkerF>
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(MapSearch);
