import { useEffect } from "react";
import Head from "next/head";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import PickupLocation from "../components/PickupLocation";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN;

export default function Home() {
   useEffect(() => {
      const map = new mapboxgl.Map({
         container: "map",
         style: "mapbox://styles/mapbox/streets-v11",
         center: [-120.641573, 35.2381035],
         zoom: 14,
      });
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
