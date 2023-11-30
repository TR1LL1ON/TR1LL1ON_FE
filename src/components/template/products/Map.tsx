import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { StyledH2Text } from '@/style/products/productsStyle';

interface MapProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '1200px',
  height: '650px',
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

const Map: React.FC<MapProps> = ({ lat, lng }) => {
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

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <StyledH2Text $mt="0rem" $mb="2rem">
        숙소 위치
      </StyledH2Text>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={OPTIONS}>
          <MarkerF position={{ lat, lng }}></MarkerF>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(Map);
