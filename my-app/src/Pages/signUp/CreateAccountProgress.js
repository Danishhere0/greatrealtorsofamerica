import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineSetting, AiOutlinePicture } from "react-icons/ai";
import { IoMapOutline } from "react-icons/io5";

const CreateAccountProgress = ({step, setStep}) => {
  return (
    <div className="lg:w-8/12 md:w-11/12 mx-auto my-20">
      <div className="md:w-12/12 items-start flex flex-col md:flex-row text-[#1E4077]">
        <div className="flex flex-col md:w-2/12 mx-auto">
          <label className="bg-[#E62E2D] p-4 mx-auto text-4xl rounded-full text-white">
            <FiUser />
          </label>
          <h6 className="mb-2 md:mt-10 mt-2 text-sm font-bold">CREATE ACCOUNT</h6>
          <p className="text-sm">Enter your username password details.</p>
        </div>
        <div className={`border-2 md:mt-8 h-16 md:h-0 mx-auto my-2 md:my-0 md:mx-0  md:w-[15%] rounded-3xl ${step==2 || step==3 || step==4?("bg-[#E62E2D] border-[#E62E2D]"):('bg-[#1E4077] border-[#1E4077]')}`}></div>
        <div className="flex flex-col md:w-2/12 mx-auto">
          <label className={`p-4 mx-auto  text-4xl rounded-full text-white ${step==2 || step==3 || step==4?("bg-[#E62E2D]"):('bg-slate-300')} `}>
            <AiOutlineSetting />
          </label>
          <h6 className="mb-2 md:mt-10 mt-2 text-sm font-bold">BUSINESS INFORMATION</h6>
          <p className="text-sm">Add your all relator related listing data.</p>
        </div>
        <div className={`border-2 md:mt-8 h-16 md:h-0 mx-auto my-2 md:my-0 md:mx-0  md:w-[15%] rounded-3xl ${ step==3 || step==4?("bg-[#E62E2D] border-[#E62E2D]"):('bg-[#1E4077] border-[#1E4077]')}`}></div>
        <div className="flex flex-col md:w-2/12 mx-auto">
          <label className={`p-4 mx-auto  text-4xl rounded-full text-white ${step==3 || step==4?("bg-[#E62E2D]"): ('bg-slate-300')}`}>
            <IoMapOutline />
          </label>
          <h6 className="mb-2 md:mt-10 mt-2 text-sm font-bold">SERVICE AREA SERVED</h6>
          <p className="text-sm">Add your service area and experience.</p>
        </div>
        <div className={`border-2 md:mt-8 h-16 md:h-0 mx-auto my-2 md:my-0 md:mx-0  md:w-[15%] rounded-3xl ${ step==4?("bg-[#E62E2D] border-[#E62E2D]"):('bg-[#1E4077] border-[#1E4077]')}`}></div>
        <div className="flex flex-col md:w-2/12 mx-auto">
        <label className={`p-4 mx-auto  text-4xl rounded-full text-white ${step==4?("bg-[#E62E2D]"): ('bg-slate-300')}`}>
            <AiOutlinePicture />
          </label>
          <h6 className="mb-2 md:mt-10 mt-2 text-sm font-bold">ADD YOUR LICENSE</h6>
          <p className="text-sm">Upload your license details.</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountProgress;
