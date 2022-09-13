import { useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import PickupLocation from "../components/PickupLocation";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useControl } from "react-map-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

// const Geocoder = () => {
//    const ctrl = new MapBoxGeocoder({
//       accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
//       marker: false,
//       collapsed: true,
//    });
//    console.log("ctrl: ", ctrl);
//    // useControl(() => ctrl);
//    // ctrl.on("result", (e) => {
//    //    const coords = e.result.geometry.coordinates;
//    //    console.log("coords: ", coords);
//    // });
//    return null;
// };

export default function Home() {
   useEffect(() => {
      const map = new mapboxgl.Map({
         container: "map",
         style: "mapbox://styles/mapbox/streets-v11",
         center: [-120.641573, 35.2381035],
         zoom: 14,
      });
      map.addControl(
         new MapBoxGeocoder({
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
            mapboxgl,
         })
      );
   }, []);

   return (
      <div>
         <div className="relative">
            <div id="map" className="map-container" />
            <PickupLocation />
         </div>
      </div>
   );
}

const PageHeading = tw.h1`
   text-xl
   font-bold
   text-center
`;
