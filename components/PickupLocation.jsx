import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const rideData = [
   {
      image: "/uberx.png",
      name: "UberX",
      description: "Affordable, everyday rides",
      price: 13.95,
   },
   {
      image: "/ubercomfort.png",
      name: "Comfort",
      description: "Newer cars with extra legroom",
      price: 17.88,
   },
   {
      image: "/uberxl.png",
      name: "UberXL",
      description: "Affordable rides for groups up to 6",
      price: 20.89,
   },
];

const PickupLocation = ({
   setPickupCoordinates,
   setDestinationCoordinates,
}) => {
   const [pickup, setPickup] = useState("");
   const [destination, setDestination] = useState("");
   const [pickupInput, setPickupInput] = useState("");
   const [destinationInput, setDestinationInput] = useState("");

   useEffect(() => {
      fetchLocationData();
   }, [pickup, destination]);

   const fetchLocationData = async () => {
      if (pickup) {
         const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
         );
         const data = await response.json();
         setPickupCoordinates(data.features[0].center);
      }

      if (destination) {
         const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
         );
         const data = await response.json();
         setDestinationCoordinates(data.features[0].center);
      }
   };

   const handleConfirmation = () => {
      setPickup(pickupInput);
      setDestination(destinationInput);
   };

   return (
      <div className="absolute left-4 max-h-[700px] h-full max-w-[405px] w-full bg-white top-2/4 translate-y-[-50%] flex flex-col p-6 rounded-2xl">
         <h1 className="text-3xl mb-4 font-medium">
            Where can we pick you up?
         </h1>
         <div className="flex flex-col gap-4 relative mb-3">
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
            <button className="bg-[#eeeeee] p-2 rounded-full w-[150px] justify-center items-center flex gap-2">
               <AiFillClockCircle />
               <span>Leave Now</span>
               <IoIosArrowDown />
            </button>
         </div>
         {pickupInput && destinationInput ? (
            <div>
               <div className="h-64 overflow-auto no-scrollbar">
                  {rideData.map((ride) => (
                     <div className="flex items-center justify-between border-gray border-2 rounded px-3 py-6 cursor-pointer">
                        <Image src={ride.image} width={88} height={88} />
                        <div className="flex">
                           <div className="flex flex-col">
                              <div className="font-medium">{ride.name}</div>
                              <p>{ride.description}</p>
                           </div>
                           <div className="font-medium">${ride.price}</div>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="bg-black text-white p-3 w-full rounded">
                  Confirm
               </button>
            </div>
         ) : (
            <>
               <div className="flex items-center gap-3">
                  <BiCurrentLocation className="text-2xl" />
                  <div className="border-b-[1px] border-gray py-3 w-full">
                     <p className="font-bold block">Allow location access</p>
                     <span>For perfect pickup experience</span>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <MdLocationPin className="text-2xl" />
                  <div className="border-b-[1px] border-gray py-3 w-full">
                     <p className="font-bold block">Set location on map</p>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default PickupLocation;
