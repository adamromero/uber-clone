import Link from "next/link";

const PageNotFound = () => {
   return (
      <div>
         <h1>Page not found</h1>
         <Link href="/">Click here to go home</Link>
      </div>
   );
};

export default PageNotFound;
