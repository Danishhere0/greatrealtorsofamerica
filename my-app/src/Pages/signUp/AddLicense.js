import React, { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const AddLicense = ({ step, setStep }) => {
  const licenseRef = useRef();
  const certificateRef = useRef();
  const idRef = useRef();
  
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto my-20 text-left">
      <div className="flex flex-col">
        <select className=" mb-5 bg-transparent md:w-5/12 text-slate-400 border-2 pl-3 py-3">
          <option selected>Select License Type</option>
        </select>
        <input
          placeholder="License Number"
          className=" mb-5 bg-transparent md:w-5/12 text-white border-2 pl-3 py-3"
        />
        <input className="hidden" type="file" ref={licenseRef} />
        <input className="hidden" type="file" ref={certificateRef} />
        <input className="hidden" type="file" ref={idRef} />

        Upload License
        <div className="bg w-12/12 flex mt-1 text-white flex-col md:flex-row mb-5">
          <div onClick={()=>certificateRef.current.click()} className="bg-[#E62E2D] border-[#1E4077] border-4 md:w-[30%] w-full mr-auto items-center">
            <p className="flex flex-row justify-center items-center h-36 m-auto">
              <span className="text-4xl mr-2">
                <IoIosAddCircleOutline />
              </span>{" "}
              ADD CERTIFICATE
            </p>
          </div>
          <div onClick={()=>licenseRef.current.click()} className="bg-[#E62E2D] border-[#1E4077] border-4 md:w-[30%] w-full  mr-auto">
            <p className="flex flex-row justify-center items-center h-36 m-auto">
              <span className="text-4xl mr-2">
                <IoIosAddCircleOutline />
              </span>
              ADD LICENSE
            </p>
          </div>
          <div onClick={()=>idRef.current.click()} className="bg-[#E62E2D] border-[#1E4077] border-4 md:w-[30%] w-full  mr-auto">
            <p className="flex flex-row justify-center items-center h-36 m-auto">
              <span className="text-4xl mr-2">
                <IoIosAddCircleOutline />
              </span>
              ADD PERSONAL ID
            </p>
          </div>
        </div>
        <button
          onClick={() => setStep()}
          className="bg-[#E62E2D] md:w-3/12 text-white px-6 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddLicense;
