import React from "react";
import LoginStyled from "../styles/Login/LoginStyled";

const LoginButton = ({ children }) => {
   return <button className="bg-[#eeeeee] rounded p-3">{children}</button>;
};

const Login = () => {
   return (
      <div
         className="max-w-[360px]
      text-center
      px-4
      flex
      flex-col
      justify-center
      m-auto
      h-full
      flex-1
      "
      >
         <h1 className="text-2xl mb-3 text-left">What's your email?</h1>
         <input
            className="bg-[#eeeeee] rounded p-3"
            type="text"
            placeholder="Enter email"
         />
         <div className="my-4 text-sm">
            <div className="border-t-[1px] border-gray-400 relative top-[12px]"></div>
            <span className="bg-white px-2 relative">or</span>
         </div>
         <div className="flex flex-col gap-2">
            <LoginButton>Continue with Apple</LoginButton>
            <LoginButton>Continue with Facebook</LoginButton>
            <LoginButton>Continue with Google</LoginButton>
         </div>
      </div>
   );
};

export default Login;
