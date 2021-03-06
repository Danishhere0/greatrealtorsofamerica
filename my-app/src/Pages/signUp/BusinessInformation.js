import React, { useRef } from "react";
import CreateAccountProgress from "./CreateAccountProgress";
import { TiUploadOutline } from "react-icons/ti";

const BusinessInformation = ({ step, setStep }) => {
  const profileRef = useRef();
  const backgroundRef = useRef();
  const Hours = [
    {
      day: "Monday",
      time: "9:00 AM - 6:00PM",
    },
    {
      day: "Tuesday",
      time: "9:00 AM - 6:00PM",
    },
    {
      day: "Wednesday",
      time: "9:00 AM - 6:00PM",
    },
    {
      day: "Thursday",
      time: "9:00 AM - 6:00PM",
    },
    {
      day: "Friday",
      time: "9:00 AM - 6:00PM",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 6:00PM",
    },
  ];
  return (
    <div>
      <div className="lg:w-10/12 w-11/12 mx-auto text-left">
        <h3 className="text-3xl  mb-10">List Your Business</h3>
        <div className="flex flex-col md:flex-row text-sm text-slate-400">
          <div className="md:w-7/12 w-11/12 mx-auto md:ml-0 md:mr-auto">
            <div className=" mx-auto md:mr-auto mb-3 flex flex-col md:flex-row md:flex-wrap md:justify-between">
              <input
                placeholder="Business Name"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Address"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Post Code"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Website Address"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4"
              />
              <input
                placeholder="Category Service"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Sub-Category"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Price Range Max"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
              <input
                placeholder="Price Range Max"
                className="border-2 py-3 pl-3 md:w-[48%] mb-4 "
              />
            </div>
            <div className=" lg:w-9/12">
              {Hours.map((x) => (
                <div className="items-center flex flex-row justify-between w-12/12 mb-3">
                  <input type="checkbox" className="rounded-full" />
                  <label className="text-black lg:text-2xl md:text-xl md:w-28 lg:w-32 text-md">
                    {x.day}
                  </label>
                  <select className="bg-transparent text-xs lg:py-3 md:py-2 lg:pr-12 lg:pl-4 border-2  text-slate-400">
                    <option>9:00 AM</option>
                  </select>
                  <label className=" text-xs">TO</label>
                  <select className="bg-transparent text-xs lg:py-3 lg:pr-12 md:py-2 lg:pl-4 border-2  text-slate-400">
                    <option>6:00 PM</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[35%] w-11/12 mx-auto mb-4">
            <div className="flex w-12/12 mx-auto">
              <textarea
                placeholder="Description of your business"
                className="border-2 p-2 w-42 h-80 w-72 flex"
              />
            </div>
            <div className="flex flex-row my-6 lg:w-[65%] justify-between">
              <div>
                <label className="text-sm">Upload Profile</label>
                <div onClick={()=>profileRef.current.click()} className="mt-3 cursor-pointer border-[#E62E2D] border-2 flex flex-col border-dashed p-3">
                  <label className="text-[#E62E2D] text-6xl mx-auto  items-center">
                    <TiUploadOutline />
                  </label>
                  <label>Select Image</label>
                </div>
              </div>
              <input className="hidden" type="file" ref={backgroundRef} />
              <input className="hidden" type="file" ref={profileRef} />
              <div>
                <label className="text-sm mb-2">Upload Background</label>
                <div  onClick={()=>backgroundRef.current.click()} className=" cursor-pointer mt-3 flex flex-col border-dashed border-2 border-[#E62E2D] p-3">
                  <label className="text-[#E62E2D] text-6xl mx-auto items-center">
                    <TiUploadOutline />
                  </label>
                  <label className="text-sm">Select Image</label>
                </div>
              </div>
            </div>
            <button
              onClick={() => setStep(3)}
              className="bg-[#E62E2D] text-white px-6 py-2 lg:w-4/12"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
