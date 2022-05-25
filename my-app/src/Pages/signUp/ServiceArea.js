import React from "react";

const ServiceArea = ({step ,setStep}) => {
  return (
    <div className="w-8/12 mx-auto my-20 text-left">
      <div className="w-9/12 flex flex-row mb-5">
        <div className="w-5/12 mr-auto">
          <label className="">Areas Served</label>
          <div className=" border-2 p-3 h-44">
            <label className="bg-slate-100 text-slate-500  py-1 px-2 rounded-full">
              Aiplaus
            </label>
            <label className="bg-slate-100 text-slate-500  py-1 px-2 rounded-full">
              Auriesville
            </label>
          </div>
        </div>
        <div className="w-5/12  mr-auto">
          <label className="">Specializations Tags</label>
          <div className="border-2 p-3 h-44">
            <label className="bg-slate-100 text-slate-500  py-1 px-2 rounded-full">
              Tag One
            </label>
            <label className="bg-slate-100 text-slate-500  py-1 px-2 rounded-full">
              Tag Two
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mr-auto w-9/12 ">
        <input
          placeholder="Experience"
          className=" mb-5 bg-transparent w-5/12 text-white border-2 pl-3 py-3"
        />
        <button onClick={()=>setStep(4)} className="bg-[#E62E2D] w-3/12 text-white px-6 py-2">Continue</button>
      </div>
    </div>
  );
};

export default ServiceArea;
