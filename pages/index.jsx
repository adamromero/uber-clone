import { useState } from "react";
import Map from "../components/Map";
import PickupLocation from "../components/PickupLocation";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { getSession } from "next-auth/react";

export default function Home() {
   const [pickupCoordinates, setPickupCoordinates] = useState("");
   const [destinationCoordinates, setDestinationCoordinates] = useState("");

   return (
      <div>
         <div className="relative">
            <Map
               pickupCoordinates={pickupCoordinates}
               destinationCoordinates={destinationCoordinates}
            />
            <PickupLocation
               setPickupCoordinates={setPickupCoordinates}
               setDestinationCoordinates={setDestinationCoordinates}
            />
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getSession(context);

   if (!session) {
      return {
         redirect: {
            destination: "/login",
            permanent: false,
         },
      };
   }

   return {
      props: { session },
   };
}
