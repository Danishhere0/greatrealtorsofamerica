import React from "react";
import bannerImage from "../Assets/Images/Home.jpg";
import second1 from "../Assets/Images/second-1.jpg";
import second2 from "../Assets/Images/second-2.jpg";
import second3 from "../Assets/Images/second-3.jpg";
import profile from "../Assets/Images/profile.jpg";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Card from "../Components/Card";

const Home = () => {
  const features = [
    {
      name: "Michael Field - Associate Broker",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];
  return (
    <div className="">
      <div className="relative w-12/12 m-auto text-left bg-[#1E4077]/70 flex items-center text-white md:py-24 bg-center bg-cover bg-no-repeat ">
        <div className="absolute h-full w-full -z-10">
          <img src={bannerImage} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col lg:w-10/12 lg:mx-auto lg:flex-row justify-around">
          <div className="lg:w-5/12 md:w-10/12 w-11/12 md:mx-auto my-6">
            <h1 className="text-12 text-4xl mb-10">
              Great Agents Find Great Properties!
            </h1>
            <p className="mb-10">
              This is where Great Agents connect with serious buyers – those who
              demand only the best guidance and knowledge of the local area. Our
              Great Real Estate Agents are proven, tested, and vetted so you can
              rest assured you’re getting only the best.
            </p>
            <div className="w-11/12 md:flex-row md:w-7/12 lg:w-10/12 flex flex-col justify-between">
              <button className="bg-[#E62E2D] md:w-5/12 md:mb-0 mb-4 items-center border-2 py-2 px-2 border-[#E62E2D]">
                Get a Free qoute
              </button>
              <button className="border-2 px-6 md:w-5/12 py-2 border-[#E62E2D]">
                See our works
              </button>
            </div>
          </div>
          <div className="md:mr-auto md:px-16 lg:px-0 lg:mr-0 lg:ml-auto">
            <div className="flex flex-col md:ml-auto pt-6 pb-20 px-4 md:px-16 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg">Find a Agent </p>
                </div>
                <div className=" flex border-2 m-0 p-0 h-0 rounded-3xl bg-[#E62E2D] border-[#E62E2D] w-6/12"></div>
              </div>
              <select className="bg-transparent py-3 pr-32 pl-4 border-2 my-6 border-white">
                <option selected>Agent Type</option>
              </select>
              <select className="bg-transparent py-3 pr-32 pl-4 border-2 mb-6 border-white">
                <option>City or zip</option>
              </select>
              <select className="bg-transparent py-3 pr-32 pl-4 border-2 mb-6 border-white">
                <option>Agent Name</option>
              </select>
              <button className="bg-[#1E4077]  py-3 ">Search</button>
            </div>
            <div className="border-4 border-[#E62E2D] w-6/12 mx-auto -mt-[1px] rounded-3xl"></div>
          </div>
        </div>
      </div>
      <div className="w-12/12 mx-auto justify-between flex flex-col-reverse lg:flex-row my-10 lg:my-20">
        <div className="w-6/12 md:mt-6 md:w-11/12 flex flex-row justify-around h-6/6">
          <img className="w-[200px]" src={second1} />
          <img className="w-[200px]" src={second2} />
          <img className="w-[200px]" src={second3} />
        </div>
        <div className="w-11/12 lg:w-5/12 mx-auto text-left">
          <h5 className="text-[#E62E2D] text-lg mb-2">What We Do</h5>
          <h1 className=" text-5xl mb-4">
            The Agent-Client Matchmaking Portal
          </h1>
          <p className="">
            Now you can skip property-browsing sites – find a Great Agent who
            knows the area you’re interested in and can help you find the best
            homes, for the best values, in the best locations. Our Great Agents
            help you find the perfect property, in a fraction of the time.
          </p>
        </div>
      </div>
      <div className="py-3 flex text-center items-center justify-center bg-[#1E4077] text-white">
        <p>
          How do we work for you? <span>Watch our video</span>
        </p>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto md:py-12 text-left bg-white ">
        <label className="text-[#E62E2D] text-xl">Meet Our…</label>
        <h1 className="text-6xl">Featured Agents</h1>
        <div className="max-w-7xl mx-auto">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-20 md:gap-y-10">
              {features.map((feature) => (
                <Card feature={feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="text-left md:w-10/12 w-11/12 my-6 mx-auto">
        <div className="">
          <p className="text-4xl mb-3 ">Are YOU a Great Agent?</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <p className="md:w-7/12 my-3">
            Only the best Real Estate Agents qualify to be Great Agents. Find
            out how you can raise your status by connecting with Great Clients
            to build your business. Dare to be Great. Enter here.
          </p>
          <button className="bg-[#E62E2D] text-white md:w-[30%] lg:w-1/5 w-3/5 my-auto px-8 py-2 ">
            Apply Now
          </button>
        </div>
      </div>
      <div className="relative bg-[#1E4077]/90 text-white md:my-20">
        <div className="absolute h-full w-full -z-10">
          <img src={bannerImage} className="h-full w-full object-cover" />
        </div>
        <div className="mb-10 pt-16">
          <div className="text-5xl md:w-11/12  lg:w-3/12 mx-auto text-center mb-10">
            <h1>What Makes Great Agents Different</h1>
          </div>
          <div>
            <p className="lg:w-5/12 md:w-11/12 text-lg mx-auto px-1">
              Great Agents are highly qualified agents with experience, local
              specialties, and lots of positive feedback from people just like
              you. If you demand the best, then look no further!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-11/12 md:flex-row md:w-8/12 pb-16 mx-auto text-center justify-between">
          <div className="border p-8 md:p-16">
            <h1 className="text-8xl">05</h1>
            <p>Year of Experience</p>
            <p>Qualified Great Agents</p>
          </div>
          <div className="flex md:flex-wrap md:flex-row flex-col items-center text-left md:w-8/12">
            <div className="md:w-5/12 md:mt-0 mt-6">
              <p>VETTED AGENTS – QUALITY GUARANTEED</p>
            </div>
            <div className="md:w-5/12 md:my-0 my-6">
              <p>THE FASTEST WAY TO BUY OR SELL A HOME</p>
            </div>
            <div className="md:w-5/12 ">
              <p>OUR AIM: PERFECT 5-STAR SERVICE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto md:my-20 text-left my-6">
        <div className="mb-10">
          <p className="text-xl text-[#E62E2D]">What are people saying?</p>
          <h2 className="text-3xl font-bold text-[#1E4077]">
            Our Clients Love Us.
          </h2>
        </div>
        <div className="flex flex-col md:w-11/12 md:mx-auto md:items-center md:flex-row justify-between ">
          <div className="md:w-[25%]">
            <img
              className="w-[300px] h-[300px]  md:mr-auto mb-3 rounded-full border-t-8 border-l-4 border-r-4  border   border-[#E62E2D]"
              src={profile}
            />
          </div>
          <div className="md:w-[70%] text-left ">
            <h4 className="text-3xl font-bold text-[#1E4077] mb-1">
              ELVET STAIN
            </h4>
            <p className="text-2xl text-[#E62E2D] mb-1">Retailer</p>
            <p>
              Great Agents are highly qualified agents with experience, local
              specialties, and lots of positive feedback from people just like
              you. If you demand the best, then look no further!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
