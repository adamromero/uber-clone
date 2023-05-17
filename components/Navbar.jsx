import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import NavbarStyled from "../styles/NavbarStyled";

const Navbar = () => {
   const { data: session } = useSession();

   return (
      <nav className="bg-black text-white p-4 flex items-center justify-between">
         <Link href="/">
            <a className="text-3xl"> Uber</a>
         </Link>
         {session && (
            <button
               className="flex gap-2 items-center"
               onClick={signOut}
               title="Sign out"
            >
               <Image
                  className="rounded-full"
                  src={session.user.image}
                  width={30}
                  height={30}
                  alt={session.user.name}
               />
               {session.user.name}
            </button>
         )}
      </nav>
   );
};

export default Navbar;
