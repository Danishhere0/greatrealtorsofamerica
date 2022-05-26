import React from "react";
import CreateAccountProgress from "./CreateAccountProgress";

const BusinessInformation = ({step ,setStep}) => {
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
      <div className="md:w-10/12 w-11/12 mx-auto text-left">
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
            <div className=" md:w-9/12">
            {Hours.map((x) => (
              <div className="items-center flex justify-between w-12/12 mb-3">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black md:text-2xl md:w-32 w-[75px] text-md">{x.day}</label>
                <select className="bg-transparent text-xs md:py-3 md:pr-12 md:pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label className=" text-xs">TO</label>
                <select className="bg-transparent text-xs md:py-3 md:pr-12 md:pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
            ))}
            </div>
          </div>
          <div className="md:w-[35%] w-11/12 mx-auto mb-4">
            <div className="flex w-12/12 mx-auto">
                <textarea placeholder="Description of your business" className="border-2 p-2 w-42 h-96 h-80 w-72 flex"/>
            </div>
            <div className="flex flex-row my-6 md:w-[65%] justify-between">
              <div>
                <label className="text-sm">Upload Profile</label>
                <div className="border-[#E62E2D] border-2 border-dashed p-3" >
                  <label >Select Image</label>
                </div>
              </div>
              <div>
                <label className="text-sm">Upload Profile</label>
                <div className="border-dashed border-2 border-[#E62E2D] p-3" >
                  <label >Select Image</label>
                </div>
              </div>
            </div>
            <button onClick={()=>setStep(3)} className="bg-[#E62E2D] text-white px-6 py-2 md:w-4/12">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
