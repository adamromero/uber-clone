import React from "react";
import LoginStyled from "../styles/Login/LoginStyled";

const Login = () => {
   return (
      <div
         className="text-xl
      text-center
      flex
      flex-col
      max-w-md
      m-auto"
      >
         <h1>What's your email?</h1>
         <div>or</div>
         <div className="flex flex-col">
            <button>Continue with Apple</button>
            <button>Continue with Facebook</button>
            <button>Continue with Google</button>
         </div>
      </div>
   );
};

export default Login;
