import React from "react";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const Login = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto text-left">
      <div className="lg:w-3/12 md:w-6/12 mr-auto mt-12 mb-3 flex flex-col">
        <h1 className="text-4xl mb-6 text-[#E62E2D]">Login</h1>
        <input
          placeholder="Email"
          type="email"
          className="border py-3 pl-3 pr-32 mb-4 "
        />
        <input
          placeholder="Password"
          type="password"
          className="border py-3 pl-3 pr-32 mb-4 "
        />
      </div>
      <div className="md:w-6/12 mr-auto">
      <div className=" flex flex-row">
        <p className="text-[#E62E2D] mr-2 text-xl"><IoMdCheckmarkCircleOutline/></p><p className="text-xs text-[#1E4077] mb-4">
          By Clicking Sign Up you agree to our{" "}
          <span className="text-[#E62E2D] underline">terms</span>. Learn how we
          collect use and share your data in our{" "}
          <span className="text-[#E62E2D] underline"> Data Policy </span> and
          how we use cookies and similar technology in our{" "}
          <span className="text-[#E62E2D] underline">Cookie Policy</span>. You
          may receive mail notification from us and can opt at any time
        </p>
        </div>
        <button className="bg-[#E62E2D] text-white mb-10 px-10 py-2 rounded">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Login;
