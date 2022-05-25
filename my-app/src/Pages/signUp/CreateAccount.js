import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = ({step ,setStep}) => {
  return (
    <div>
      <div className="w-6/12 mx-auto mt-12 mb-3 flex flex-wrap justify-evenly">
        <input placeholder="Name" className="border py-3 pl-3 pr-32 mb-4 " />
        <input
          placeholder="Last Name"
          className="border py-3 pl-3 pr-32 mb-4 "
        />
        <input placeholder="Email" className="border py-3 pl-3 pr-32 mb-4 " />
        <input placeholder="Phone" className="border py-3 pl-3 pr-32 mb-4" />
        <input
          placeholder="Password"
          className="border py-3 pl-3 pr-32 mb-4 "
        />
        <input
          placeholder="Confirm Password"
          className="border py-3 pl-3 pr-32 mb-4 "
        />
      </div>
      <div className="w-[46%] mx-auto text-left ">
        <p className="text-xs text-[#1E4077] mb-4">
          By Clicking Sign Up you agree to our{" "}
          <span className="text-[#E62E2D] underline">terms</span>. Learn how we
          collect use and share your data in our{" "}
          <span className="text-[#E62E2D] underline"> Data Policy </span> and
          how we use cookies and similar technology in our{" "}
          <span className="text-[#E62E2D] underline">Cookie Policy</span>. You
          may receive mail notification from us and can opt at any time
        </p>
        <button on onClick={()=>setStep(2)} className="bg-[#E62E2D] text-white mb-10 px-10 py-2 rounded">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
