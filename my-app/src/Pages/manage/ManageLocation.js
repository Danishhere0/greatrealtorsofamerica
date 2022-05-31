import React from "react";
import { BiSearch } from "react-icons/bi";

const ManageLocation = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center border-b-[3px] border-[#1E4077]">
        <h1 className="text-left text-2xl font-semibold text-[#E62E2D]  py-4 px-1">
          Manage Location
        </h1>
      </div>
      <div>
        <div className="flex flex-row items-center bg-white p-4 mt-6 border-[3px] justify-between">
          <input
            className=" text-slate-400 outline-none w-full"
            placeholder="Find your location"
          />
          <span className="text-[#E62E2D] text-4xl">
            <BiSearch />
          </span>
        </div>
        <p className="text-right text-sm text-[#1E4077] font-semibold mt-1">You can add maximum 5 location</p>
      </div>
    </div>
  );
};

export default ManageLocation;
