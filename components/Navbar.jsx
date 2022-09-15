import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import NavbarStyled from "../styles/NavbarStyled";

const Navbar = () => {
   const { data: session } = useSession();

   return (
      <nav className="bg-black text-white p-4 flex items-center justify-between">
         <Link href="/">
            <a className="text-3xl"> Uber</a>
         </Link>
         {session && <button onClick={signOut}>{session.user.name}</button>}
      </nav>
   );
};

export default Navbar;
