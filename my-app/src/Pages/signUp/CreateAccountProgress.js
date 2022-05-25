import React, { useState } from "react";
import { FiUser } from 'react-icons/fi'
import { AiOutlineSetting,AiOutlinePicture } from 'react-icons/ai'
import { IoMapOutline } from 'react-icons/io5'

const CreateAccountProgress = () => {
  const [step, setStep] = useState();
  return (
    <div className="w-8/12 mx-auto my-20">
      {/* <div className="flex w-[89%] mx-auto item-center justify-between">
        <div className="border-[2px] m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>
        <div className="border-[2px] m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>
        <div className="border-[2px] m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>
      </div> */}
      <div className="flex items-start justify-between text-[#1E4077]">
        <div className="w-2/12 mx-auto">
          <label className="bg-[#E62E2D] p-4 mx-auto rounded-full text-white"><FiUser/>
          </label>
          <h6 className="mb-2 mt-10 text-sm font-bold">CREATE ACCOUNT</h6>
          <p className="text-sm">Enter your username password details.</p>
        </div>
        <div className="border-[2px]  items-start m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>
        <div className="w-2/12 mx-auto">
          <label className="bg-[#E62E2D] p-4 m-auto rounded-full text-white"><AiOutlineSetting/></label>
          <h6 className="mb-2 mt-10 text-sm font-bold">BUSINESS INFORMATION</h6>
          <p className="text-sm">Add your all relator related listing data.</p>
        </div>
        <div className="border-[2px] m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>

        <div className="w-2/12 mx-auto">
          <label className="bg-[#E62E2D] p-4 m-auto rounded-full text-white"><IoMapOutline/></label>
          <h6 className="mb-2 mt-10 text-sm font-bold">SERVICE AREA SERVED</h6>
          <p className="text-sm">Add your service area and experience.</p>
        </div>
        <div className="border-[2px] m-auto bg-[#E62E2D] border-[#E62E2D] w-[100px] rounded-3xl "></div>

        <div className="w-2/12 mx-auto">
          <label className="bg-[#E62E2D] p-4 m-auto rounded-full text-white"><AiOutlinePicture/></label>
          <h6 className="mb-2 mt-10 text-sm font-bold">ADD YOUR LICENSE</h6>
          <p className="text-sm">Upload your license details.</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountProgress;
