import React, { useState, useEffect } from "react";

const PickupLocation = () => {
   const [pickup, setPickup] = useState("");
   const [destination, setDestination] = useState("");
   const [pickupInput, setPickupInput] = useState("");
   const [destinationInput, setDestinationInput] = useState("");

   useEffect(() => {
      fetchLocationData();
   }, [destination]);

   const fetchLocationData = async () => {
      const response = await fetch(
         `https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
      );
      const data = await response.json();
      //console.log(data.features[0].center);
   };

   const handleConfirmation = () => {
      setPickup(pickupInput);
      setDestination(destinationInput);
   };

   return (
      <div className="absolute bg-white top-2/4	translate-y-[-50%] flex flex-col p-6 rounded">
         <h1>Where can we pick you up?</h1>
         <input
            className="border-2 border-black"
            type="text"
            placeholder="Add a pickup location"
            value={pickupInput}
            onChange={(e) => setPickupInput(e.target.value)}
         />
         <input
            className="border-2 border-black"
            type="text"
            placeholder="Enter your destination"
            value={destinationInput}
            onChange={(e) => setDestinationInput(e.target.value)}
         />
         <button onClick={handleConfirmation}>Confirm</button>
         <button>Leave Now</button>
         <div>
            <div>Allow location access</div>
            <p>For perfect pickup experience</p>
         </div>
         <div>Set location on map</div>
      </div>
   );
};

export default PickupLocation;
