import React, { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

const Map = ({ pickupCoordinates, destinationCoordinates }) => {
   useEffect(() => {
      const map = new mapboxgl.Map({
         container: "map",
         style: "mapbox://styles/mapbox/streets-v11",
         center: [-120.641573, 35.2381035],
         zoom: 14,
      });
      //   map.addControl(
      //      new MapBoxGeocoder({
      //         accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
      //         mapboxgl,
      //      })
      //   );

      if (pickupCoordinates) {
         addLocationToMap(map, pickupCoordinates);
      }

      if (destinationCoordinates) {
         addLocationToMap(map, destinationCoordinates);
      }

      if (pickupCoordinates && destinationCoordinates) {
         map.fitBounds([pickupCoordinates, destinationCoordinates], {
            padding: 75,
         });
      }
   }, [pickupCoordinates, destinationCoordinates]);

   const addLocationToMap = (map, coordinates) => {
      console.log(coordinates);
      const pickupMarker = new mapboxgl.Marker()
         .setLngLat(coordinates)
         .addTo(map);
   };

   return <div id="map" className="map-container" />;
};

export default Map;
