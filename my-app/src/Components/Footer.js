import React from "react";
import AppStore from "../Assets/Images/iphone.png";
import PlayStore from "../Assets/Images/android.png";
import logo from "../Assets/Images/logo.png";
import {BiPhoneCall} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className="bg-[#1E4077] font-thin text-left text-white">
      <div className="bg-[#E62E2D] text-center flex justify-center flex-col text-white p-5">
      <p className="text-7xl mx-auto mb-2"><BiPhoneCall/></p>
        <p className="">You can also reach our offices directly at any time: Call (555) 555-5555 now!</p>
      </div>
      <div className="flex flex-col md:items-center md:flex-row justify-between lg:w-9/12 mx-auto mt-4 text-sm p-5">
        <div className="md:w-4/12">
          <img src={logo} className='w-9/12 bg-white px-4 py-2 rounded-md' />
          <p className="pt-3 pb-2">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also
          </p>
          <p className="pb-3">Now Available On Your Smart Phone</p>
          <div  className="w-[34%] flex flex-row">
            <img className='w-11/12 mr-2' src={AppStore}></img>
            <img className='w-11/12' src={PlayStore}></img>
          </div>
        </div>
        <div className="md:w-[19%] my-5">
          <label className=" text-lg mb-3">Our Services</label>
          <p className="pt-3 pb-2">Factory Construction</p>
          <p className="pb-2">Home Building</p>
          <p>Architectural Art</p>
        </div>
        <div className="md:w-[19%]">
          <h5 className="text-lg font-semibold">Main office</h5>
          <p className="pt-3 pb-2">2536 Cedarwood Ct udson, Ohio (OH), 44236</p>
          <h5 className="text-lg font-semibold pb-2 ">Phone</h5>
          <p  className="pb-2">+9994 44 333 2145</p>
        </div>
        <div className="md:w-[19%] mt-5 flex flex-col">
          <h5 className="text-lg">Contact us</h5>
          <h5 className="pt-3 pb-2">Email</h5>
          <a className="pb-2">contact@sitename.com</a>
          <a className="pb-2">support@sitename.com</a>
        </div>
      </div>
      <div className=" border-t-2 md:p-5 py-2 text-center"><p>2021 Great Relators of America. All rights reserved. <span className=" underline">Privacy Statement</span></p></div>
    </div>
  );
};

export default Footer;
