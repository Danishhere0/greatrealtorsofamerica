import React from "react";
import CreateAccountProgress from "./CreateAccountProgress";

const BusinessInformation = ({step ,setStep}) => {
  return (
    <div>
      <div className="w-8/12 mx-auto text-left">
        <h3 className="text-3xl  mb-10">List Your Business</h3>
        <div className="flex flex-row text-sm text-slate-400">
          <div className="w-7/12">
            <div className=" mr-auto mb-3 flex flex-wrap justify-between">
              <input
                placeholder="Business Name"
                className="border-2 py-3 pl-3  w-[48%] mb-4 "
              />
              <input
                placeholder="Address"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
              <input
                placeholder="Post Code"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
              <input
                placeholder="Website Address"
                className="border-2 py-3 pl-3 w-[48%] mb-4"
              />
              <input
                placeholder="Category Service"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
              <input
                placeholder="Sub-Category"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
              <input
                placeholder="Price Range Max"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
              <input
                placeholder="Price Range Max"
                className="border-2 py-3 pl-3 w-[48%] mb-4 "
              />
            </div>
            <div className="">
              <div className="items-center flex justify-between w-12/12 mb-3">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Monday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Tuesday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Wednesday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center my-auto flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Thursday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center my-auto flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Friday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center my-auto flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Saturday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
              <div className="items-center my-auto flex justify-between w-12/12 mb-3 ">
                <input type="checkbox" className="rounded-full" />
                <label className="text-black text-2xl w-32">Sunday</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>9:00 AM</option>
                </select>
                <label>TO</label>
                <select className="bg-transparent py-3 pr-12 pl-4 border-2  text-slate-400">
                  <option>6:00 PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-[35%] mx-auto">
            <div className=" flex w-12/12 mx-auto">
                <textarea placeholder="Description of your business" className="border-2 p-2 w-42 h-96 h-80 w-72 flex"/>
            </div>
            <div className="flex flex-row my-6">
              <div>
                <label className="text-sm">Upload Profile</label>
                <div className="border-[#E62E2D] border-dashed p-3" >
                  <label >Select Image</label>
                </div>
              </div>
              <div>
                <label className="text-sm">Upload Profile</label>
                <div className="border-dashed border-[#E62E2D] p-3" >
                  <label >Select Image</label>
                </div>
              </div>
            </div>
            <button onClick={()=>setStep(3)} className="bg-[#E62E2D] text-white px-6 py-2">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
