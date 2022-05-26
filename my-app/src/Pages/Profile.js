import React from "react";
import profileImage from "../Assets/Images/profileImage.jpg";
import backgroundImage from "../Assets/Images/backgroundImage.jpg";

const Profile = () => {
  const Specializations = [
    {
      name: "acreage",
    },
    {
      name: "commercial",
    },
    {
      name: "farm & country",
    },
    {
      name: "residential",
    },
  ];
  const Areas = [
    {
      name: "Alplaus",
    },
    {
      name: "Alplaus",
    },
    {
      name: "Alplaus",
    },
    {
      name: "Auriesville",
    },
    {
      name: "Auriesville",
    },
    {
      name: "Auriesville",
    },
    {
      name: "Burlington Flats",
    },
    {
      name: "Burlington Flats",
    },
    {
      name: "Burlington Flats",
    },
  ];
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
    <div className="md:w-9/12 mx-auto">
      <div className="">
        <div className="">
          <img
            src={backgroundImage}
            className=" object-cover bg-cover md:h-[60vh] w-full "
          />
        </div>
        <div>
          <div className="flex flex-col ml-4 -mt-16 md-mt-24 items-center text-left pb-4">
            <img className="md:w-[170px] w-52 mr-auto" src={profileImage} />
            <div className="flex flex-col">
              <div className="flex flex-col md-text-white mt-4 text-[#1E4077]">
                <label className="text-xl font-semibold">Ahmed Majeed</label>
                <label>COUNTRY BOY REALTY</label>
              </div>
              <div className="flex flex-col md:mt-10 mt-4 text-[#E62E2D]">
                <label className="text-lg font-semibold">
                  Write Matthew Lader' 1st Recommendation{" "}
                </label>
                <label className="text-xs">4.6(26)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row w-11/12 mx-auto flex-col ">
        <div className="text-left md:w-8/12">
          <div className="border-b-[3px] border-[#E62E2D]">
            <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
              About Mithlesh Arya
            </h2>
            <p className="text-lg mb-3">
              Mithlesh Arya was raised in Richmondville and currently resides in
              Cobleskill with his wife Julie and their daughter Hannah and
              Olivia. He is an alumnus of SUNY Cobleskill and Cobleskill High
              School. Mathew's professional career started at Country Voy Realty
              in 1999 as a sales agent and becoming principle broker / owner in
              20212.{" "}
            </p>
            <p className="text-lg mb-3">
              Matthew has recieved multiple Sales Volume Awards, including Top
              Sales Agent for Schoharie Country for the last ten years from the
              WCR Council of Realtors. He has served as a Directory for
              Schoharie, Schecectady, and Saratoga Board of Realtors and also
              was a Director of The Capital Region Multiple Listing Service
              Board
            </p>
          </div>
          <div className="w-10/12 justify-between flex flex-col md:flex-row py-5 ">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
                Experience
              </h2>
              <p className="text-lg mb-3">22 years</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
                Price Range (last 24 months)
              </h2>
              <p className="text-lg mb-3">$4.5K-$899K</p>
            </div>
          </div>
          <div className=" border-t-[3px] border-[#E62E2D] py-5 ">
            <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
              Areas Served
            </h2>
            <div className="flex flex-wrap flex-row md:w-8/12">
              {Areas.map((x) => (
                <p className="text-lg mb-3 mx-2 md:w-4/12">{x.name},</p>
              ))}
            </div>
          </div>
          <div className=" border-t-[3px] border-[#E62E2D] py-5 ">
            <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
              Specializations
            </h2>
            <div className="flex flex-wrap flex-row md:w-8/12">
              {Specializations.map((x) => (
                <p className="text-lg mb-3 mx-2 md:w-3/12">{x.name},</p>
              ))}
            </div>
          </div>
          <div className=" border-t-[3px] border-[#E62E2D] py-5 ">
            <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
              Business Hours
            </h2>
            <div className="flex flex-col md:w-8/12">
              {Hours.map((x) => (
                <div className="flex flex-row">
                  <p className="text-lg mb-3 w-5/12 md:w-3/12">{x.day}</p>
                  <p className="text-lg mb-3 md:w-5/12">{x.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" h-fit text-left md:w-[32%] ml-auto bg-[#1E4077] p-5 text-sm text-[white]" >
          <div className=" pb-2 border-b-2 border-[#E62E2D]">
            <h2 className="text-2xl font-semibold mb-3">Contact details</h2>
            <p className=" mb-5">(518) 378-1235 Office</p>
            <p className=" mb-5">marya@realtor.com</p>
            <p className=" mb-5">Mithlesh Arya <span>Website</span></p>
          </div>
          <div className="py-8 border-b-2 border-[#E62E2D]">
            <p className=" w-6/12 py-5 ">COUNTRY BOY REALTY <span >753 E. Main Street, Cobleskill, NY, 12043</span></p>
            <p>Share Profile</p>
          </div>
          <div className="py-8 border-b-2 border-[#E62E2D]">
            <p>Social Media</p>
            <div></div>
          </div>
          <div className="w-full py-8">
            <p className="mb-5">Email Dominix Indelicato</p>
            <input placeholder="Name" className=" mb-5 bg-transparent w-full text-white border-2 pl-3 py-3" />
            <input placeholder="Email" className=" mb-5 bg-transparent w-full text-white border-2 pl-3 py-3" />
            <input placeholder="Tell about yourself" className=" mb-5 bg-transparent w-full text-white border-2 pl-3 py-3"/>
            <button className="bg-[#E62E2D] text-white px-8 py-2">Send Mail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
