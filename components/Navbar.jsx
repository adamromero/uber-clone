import React from "react";
import Link from "next/link";
import NavbarStyled from "../styles/NavbarStyled";

const Navbar = () => {
   return (
      <nav className="bg-black text-white p-4">
         <Link href="/">
            <a className="text-3xl"> Uber</a>
         </Link>
      </nav>
   );
};

export default Navbar;
