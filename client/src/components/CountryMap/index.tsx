import React, { useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const CountryMap: React.FC = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidmVyb25pa2F2IiwiYSI6ImNrbTkyc3h4ZTBqcmcycHBodjVnc2czaHAifQ.Ihormn1fNlJh9bdYxMUvlw'
  });

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  useEffect(() => {

  }, []);

  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[lng, lat]} />
      </Layer>
    </Map>
  );
}
