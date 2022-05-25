import React from "react";

const AddLicense = ({step ,setStep}) => {
  return (
    <div className="w-8/12 mx-auto my-20 text-left">
      <div className="flex flex-col">
      <select className=" mb-5 bg-transparent w-5/12 text-slate-400 border-2 pl-3 py-3">
        <option selected>Select License Type</option>
      </select>
      <input
        placeholder="License Number"
        className=" mb-5 bg-transparent w-5/12 text-white border-2 pl-3 py-3"
      />
      Upload License
      <div className="w-12/12 flex flex-row mb-5">
        <div className="w-[30%] mr-auto">
          <div className=" border-2 p-3 h-32"></div>
        </div>
        <div className="w-[30%]  mr-auto">
          <div className="border-2 p-3 h-32"></div>
        </div>
        <div className="w-[30%]  mr-auto">
          <div className="border-2 p-3 h-32"></div>
        </div>
      </div>

      <button onClick={()=>setStep()} className="bg-[#E62E2D] w-3/12 text-white px-6 py-2">
        Submit
      </button>
    </div>
    </div>
  );
};

export default AddLicense;
