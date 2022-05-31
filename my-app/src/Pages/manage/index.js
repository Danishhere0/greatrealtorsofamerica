import React, { useState } from "react";
import ManageList from "./ManageList";
import ManageProfile from "./ManageProfile";
import MyLeads from "./MyLeads";
import Rating from "./Rating";
import Ticket from "./Ticket";
import { FiUser } from "react-icons/fi";
import { AiOutlineUnorderedList,AiOutlineStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgScreenMirror } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import Notification from "./Notification";
import ManageLocation from "./ManageLocation";


const Manage = () => {
  const [manage,setManage] =useState(1) 
const buttons = [
    {
      name: "Manage Profile",
      key:1,
      icon:<FiUser/>
    },
    {
      name: "Manage Listing",
      key:2,
      icon:<AiOutlineUnorderedList/>
    
    },
    {
      name: "Manage Location",
      key:3,
      icon:<HiOutlineLocationMarker/>
    
    },
    {
      name: "My Leads",
      key:4,
      icon:<CgScreenMirror/>
    
    },
    {
      name: "Ratings",
      key:5,
      icon:<AiOutlineStar/>
    
    },
    {
      name: "Notification",
      key:6,
      icon:<BsBell/>
    
    },
    {
      name: "Support Ticket",
      key:7,
      icon:<MdOutlineAddBox/>
    
    },
  ];
  console.log(manage);
  return (
    <div className="lg:w-10/12 mx-auto flex md:flex-row flex-col justify-between my-4">
      <div className="md:w-[20%] bg-[#1E4077] text-white text-left p-3 h-fit">
        {buttons.map((x) => (
          <div className="flex flex-row p-2 justify-between items-center">
            <button onClick={()=>setManage(x.key)} className="text-left flex items-center flex-row"><span className="text-xl mr-2">{x.icon}</span>{x.name}</button>
            <div className={`${manage==x.key?('border-4 rounded-lg border-[#2C5B8F] bg-[#2C5B8F] my-auto w-16 -mr-5'):(null)}`}></div>
          </div>
        ))}
      </div>
      <div className="md:w-9/12 bg-[] shadow-xl p-6">
      {manage==1?(<ManageProfile/>):(null)}
      {manage==2?(<ManageList/>):(null)}
      {manage==3?(<ManageLocation/>):(null)}
      {manage==4?(<MyLeads/>):(null)}
      {manage==5?(<Rating/>):(null)}
      {manage==6?(<Notification/>):(null)}
      {manage==7?(<Ticket/>):(null)}
      </div>
    </div>
  );
};

export default Manage;
