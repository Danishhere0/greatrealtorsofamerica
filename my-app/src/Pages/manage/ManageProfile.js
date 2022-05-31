import React from "react";
import { FiUser } from "react-icons/fi";

const ManageProfile = () => {
  const inputs = [
    {
      name: "",
      placeholder: "Name",
    },
    {
      name: "",
      placeholder: "Last Name",
    },
    {
      name: "",
      placeholder: "Email",
    },
    {
      name: "",
      placeholder: "Phone",
    },
    {
      name: "",
      placeholder: "Password",
    },
    {
      name: "",
      placeholder: "Confirm Password",
    },
  ];
  return (
    <div className="">
        <div>
            <h1 className="text-left text-2xl font-semibold text-[#E62E2D] border-b-[3px] border-[#1E4077] py-4 px-1">Manage Profile</h1>
        </div>
      <div
        style={{ backgroundImage: <FiUser /> }}
        className="rounded-full w-[200px] h-[200px] shadow-xl "
      >
        <span></span>
      </div>
      <div className="lg:w-10/12 lg:mr-auto lg:ml-0 w-11/12 md:mx-auto mt-12 mb-3 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        {inputs.map((x) => (
          <input
            placeholder={x.placeholder}
            className="border py-3 pl-3 w-full md:w-[49%] mb-4 "
          />
        ))}
      </div>
      <div className="w-11/12 md:flex-row md:w-7/12 lg:w-6/12 flex flex-col justify-between">
        <button
          className="bg-[#E62E2D] w-[48%] text-white mb-10 px-10 py-2 "
        >
        UPDATE
        </button>
        <button
          className="border-[#E62E2D] w-[48%] border-2 text-[#E62E2D] mb-10 px-10 py-2 "
        >
          RESET
        </button>
      
      </div>
    </div>
  );
};

export default ManageProfile;
