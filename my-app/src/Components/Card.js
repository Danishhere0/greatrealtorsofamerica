import React from "react";
import profile from "../Assets/Images/profile.jpg";
import {AiTwotoneStar} from 'react-icons/ai'
 
const Card = (feature) => {
    const {name,description} = feature
  return (
    <div className="bg-[#1E4077] text-white pb-6">
      <img src={profile} className="w-full h-[350px] border-b-8"/>
      <div className="px-4">
      <p className=" text-lg font-semibold text-left">Michael Field - Associate Broker</p>
      <div className="flex font-thin justify-between">
        <p>(518) 708-6591</p>
        <p className="flex items-center"><span className="text-2xl"><AiTwotoneStar/></span>4.5 (26)</p>
      </div>
      </div>
    </div>
  );
};

export default Card;
