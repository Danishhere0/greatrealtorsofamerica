import React, { useState } from "react";

import { VscDebugStackframeDot } from "react-icons/vsc";

const MyLeads = () => {
  const [status,setStatus] =useState(1);
  const data = [
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Accepted",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Rejected",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
  ];
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-between items-center border-b-[3px] border-[#1E4077]">
        <h1 className="text-left text-2xl font-semibold text-[#E62E2D]  py-4 px-1">
          My Leads
        </h1>
      </div>
      <div>
        <div className="flex md:flex-row flex-col justify-around w-8/12 items-center my-6">
        <button onClick={()=>setStatus(1)} className={` px-4 py-2 font-semibold text-xl ${status==1?('border-b-[3px] border-[#1E4077] text-[#1E4077]'):('text-slate-500')}`}>Pending</button>
        <button onClick={()=>setStatus(2)} className={` px-4 py-2 font-semibold text-xl ${status==2?('border-b-[3px] border-[#1E4077] text-[#1E4077]'):('text-slate-500')}`}>Accepted</button>
        <button onClick={()=>setStatus(3)} className={` px-4 py-2 font-semibold text-xl ${status==3?('border-b-[3px] border-[#1E4077] text-[#1E4077]'):('text-slate-500')}`}>Rejected</button>
        </div>
        <div>
          {data.map((x) => (
            <div className="flex flex-row bg-[#E8F3FF] text-md font-semibold text-[#1E4077] h-14 justify-around my-4 items-center">
              <p>{x.date}</p>
              <p>{x.user}</p>
              <p>{x.business}</p>
              <p
                className={`items-center flex flex-row ${
                  x.status == "Pending" ? ("text-yellow-400"):(x.status == "Accepted"?(' text-green-300'):(x.status == "Rejected"?(' text-red-600'):(null)))
                }`}
              >
                <VscDebugStackframeDot />
                {x.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLeads;
