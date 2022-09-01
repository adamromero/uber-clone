import { useRouter } from "next/router";

const Profile = () => {
   const router = useRouter();
   const { username } = router.query;

   return (
      <div>
         <h1>Hello {username}!</h1>
      </div>
   );
};

export default Profile;
