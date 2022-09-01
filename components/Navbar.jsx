import React from "react";
import Link from "next/link";
import NavbarStyled from "../styles/NavbarStyled";

const Navbar = () => {
   return (
      <NavbarStyled>
         <Link href="/">Uber</Link>
      </NavbarStyled>
   );
};

export default Navbar;
