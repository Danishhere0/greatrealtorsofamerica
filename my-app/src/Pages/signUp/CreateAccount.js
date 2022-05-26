import React from "react";
import { Link } from "react-router-dom";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const CreateAccount = ({step ,setStep}) => {
  return (
    <div>
      <div className="lg:w-6/12 w-11/12 mx-auto mt-12 mb-3 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        <input placeholder="Name" className="border py-3 pl-3 w-full md:w-[49%] mb-4 " />
        <input
          placeholder="Last Name"
          className="border py-3 pl-3 w-full md:w-[49%] mb-4 "
        />
        <input placeholder="Email" className="border py-3 pl-3 w-full md:w-[49%] mb-4 " />
        <input placeholder="Phone" className="border py-3 pl-3 w-full md:w-[49%] mb-4" />
        <input
          placeholder="Password"
          className="border py-3 pl-3 w-full md:w-[49%] mb-4 "
        />
        <input
          placeholder="Confirm Password"
          className="border py-3 pl-3 w-full md:w-[49%] mb-4 "
        />
      </div>
      <div className="lg:w-[49%] w-11/12 mx-auto text-left ">
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
        <button on onClick={()=>setStep(2)} className="bg-[#E62E2D] text-white mb-10 px-10 py-2 rounded">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
