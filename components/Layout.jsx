import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
   const router = useRouter();

   return (
      <div className="flex flex-col flex-1 h-full">
         <Navbar />
         <div className={`${router.pathname === "/login" ? "flex-1" : ""}`}>
            {children}
         </div>
      </div>
   );
};

export default Layout;
