import React, { useState, useEffect } from "react";

const PickupLocation = () => {
   const [pickup, setPickup] = useState("");
   const [destination, setDestination] = useState("");
   const [pickupInput, setPickupInput] = useState("");
   const [destinationInput, setDestinationInput] = useState("");

   useEffect(() => {
      fetchLocationData();
   }, [pickup]);

   const fetchLocationData = async () => {
      if (pickup) {
         const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
         );
         const data = await response.json();
         console.log(data.features[0].center);
      }
   };

   const handleConfirmation = () => {
      setPickup(pickupInput);
      setDestination(destinationInput);
   };

   return (
      <div className="absolute left-4 max-h-[700px] h-full max-w-[405px] w-full bg-white top-2/4 translate-y-[-50%] flex flex-col p-6 rounded-2xl">
         <h1 className="text-3xl mb-4">Where can we pick you up?</h1>
         <div className="flex flex-col gap-4 relative">
            <input
               className="bg-[#eeeeee] p-3 pl-12"
               type="text"
               placeholder="Add a pickup location"
               value={pickupInput}
               onChange={(e) => setPickupInput(e.target.value)}
            />
            <div className="border-l-2 border-black h-[50px] absolute top-[30px] left-[25px]"></div>
            <input
               className="bg-[#eeeeee] p-3 pl-12"
               type="text"
               placeholder="Enter your destination"
               value={destinationInput}
               onChange={(e) => setDestinationInput(e.target.value)}
            />
            <button className="bg-[#eeeeee] p-2" onClick={handleConfirmation}>
               Confirm
            </button>
            <button className="bg-[#eeeeee] p-2 rounded-full w-[150px]">
               Leave Now
            </button>
         </div>
         <div>
            <div>Allow location access</div>
            <p>For perfect pickup experience</p>
         </div>
         <div>Set location on map</div>
      </div>
   );
};

export default PickupLocation;
