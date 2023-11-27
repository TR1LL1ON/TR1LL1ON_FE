import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { StyledH2Text } from '@/style/detail/detailStyle';

interface MapProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: '100%',
  height: '650px',
};

const OPTIONS = {
  minZoom: 6,
  maxZoom: 18,
};

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
  });

  const [map, setMap] = React.useState<any>(null);

  const onLoad = React.useCallback(
    function callback(mapInstance: any) {
      const bounds = new window.google.maps.LatLngBounds({ lat, lng });
      mapInstance.fitBounds(bounds);

      setMap(mapInstance);
    },
    [lat, lng],
  );

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <>
      <StyledH2Text $mt="0rem" $mb="2rem">
        숙소 위치
      </StyledH2Text>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={18}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={OPTIONS}>
          <Marker position={{ lat, lng }}></Marker>
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(Map);
