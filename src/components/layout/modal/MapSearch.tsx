import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { StyledH2Text } from '@/style/products/productsStyle';
import { MapProps } from '@/components/template/products/Map';
import { getProducts } from '@/api/service';
import { useNavigate } from 'react-router-dom';

interface Product {
  accommodationId: string;
  latitude: number;
  longitude: number;
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
  minZoom: 4,
  maxZoom: 18,
  disableDefaultUI: true,
  styles: myStyles,
};

const MapSearch: React.FC<MapProps & { closeMapModal: () => void }> = ({
  lat,
  lng,
  closeMapModal,
}) => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  // const [selectedMarker, setSelectedMarker] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts();

        const productsData = res.data;
        setProductsData(productsData);
        console.log('Map', productsData);
      } catch (error) {
        console.error('조회 실패:', error);
      }
    }

    fetchProducts();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  });

  const [, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

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
          zoom={16}
          onUnmount={onUnmount}
          options={OPTIONS}>
          {productsData.map((product) => (
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
              }}
              // onClick={() => setSelectedMarker(product)}
            >
              {/* {selectedMarker &&
                selectedMarker.accommodationId === product.accommodationId && (
                  <InfoWindowF
                    onCloseClick={() => setSelectedMarker(null)} // 닫기 버튼 클릭 시 선택 해제
                  >
                    <div>
                      <h3>hello</h3>
                    </div>
                  </InfoWindowF>
                )} */}
            </MarkerF>
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(MapSearch);
