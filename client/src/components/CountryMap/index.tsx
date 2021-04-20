import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import env from "react-dotenv";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./CountryMap.scss";
import { CountryMapItem, CountryItem } from '../../interfaces/interfaces';
import { Countries } from '../../assets/index';
import getCountryCode from '../../helpers/index';

mapboxgl.accessToken = 'pk.eyJ1IjoidmVyb25pa2F2IiwiYSI6ImNrbTkyc3h4ZTBqcmcycHBodjVnc2czaHAifQ.Ihormn1fNlJh9bdYxMUvlw';


export const CountryMap: React.FC<CountryMapItem> = (props) => {
  const countryId: string = props.countryId;
  const language: string = props.language;

  useEffect(() => {
    const resultCountry: CountryItem = Countries
      .find(item => item.id.toString() === countryId) || {} as CountryItem;

    const {long, lat} = resultCountry;

    const countryName: string = getCountryCode(countryId);


    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [+long, +lat],
      zoom: 3,
    });

    map.on('load', function() {
      map.addLayer(
        {
          id: 'country-boundaries',
          source: {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1',
          },
          'source-layer': 'country_boundaries',
          type: 'fill',
          paint: {
            'fill-color': '#d2361e',
            'fill-opacity': 0.4,
          },
        },
        'country-label',
      );

      map.setFilter('country-boundaries', [
        "in",
        "iso_3166_1_alpha_3",
        countryName
      ]);

      // add supporting of the translation
      const mapLabelsLayers = map.getStyle().layers?.filter(item => item.type === 'symbol');
      mapLabelsLayers?.forEach(item => {
        map.setLayoutProperty(item.id, 'text-field', [
          'get',
          'name_' + language
        ]);
      })
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // add fullScreen control
    map.addControl(new mapboxgl.FullscreenControl());

    // add marker to the capital
    new mapboxgl.Marker()
      .setLngLat([+long, +lat])
      .addTo(map);

    // clean up on unmount
    return () => map.remove();
  }, [countryId, language]);

  return (
    <div className="map-container" id="mapContainer" />
  );
}
