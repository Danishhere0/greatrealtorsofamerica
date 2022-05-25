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
    <div>
      <div
        className="relative w-12/12 m-auto text-left bg-[#1E4077]/70 flex justify-around items-center text-white py-24 px-12 bg-center bg-cover bg-no-repeat "
        // style={{
        //   backgroundImage: `url(${bannerImage})`,
        // }}
      ><div className="absolute h-full w-full -z-10">
        <img src={bannerImage} className="h-full w-full object-cover"/>
      </div>
        <div className="w-4/12">
          <h1 className="text-12 text-4xl mb-10">
            Great Agents Find Great Properties!
          </h1>
          <p className="mb-10">
            This is where Great Agents connect with serious buyers – those who
            demand only the best guidance and knowledge of the local area. Our
            Great Real Estate Agents are proven, tested, and vetted so you can
            rest assured you’re getting only the best.
          </p>
          <div className="w-9/12 flex justify-between">
            <button className="bg-[#E62E2D] border-2 py-2 px-6 border-[#E62E2D]">
              Get a Free qoute
            </button>
            <button className="border-2 px-6 py-2 border-[#E62E2D]">
              See our works
            </button>
          </div>
        </div>
        <div>
        <div className="flex flex-col pt-6 pb-20 px-16 backdrop-blur-lg">
          <div>
            <p className="text-lg">Find a REALTOR </p>
            <span className=" divide-black divide-x-8 "></span>
          </div>
          <select
            className="bg-transparent py-3 pr-32 pl-4 border-2 my-6 border-white"
          >
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
      <div className="w-12/12 m-auto justify-between flex flex-row my-20">
        <div className="w-6/12 flex flex-row justify-around h-6/6">
          <img className="w-[200px]" src={second1} />
          <img className="w-[200px]" src={second2} />
          <img className="w-[200px]" src={second3} />
        </div>
        <div className="w-5/12 mx-auto text-left">
          <h5 className="text-[#E62E2D] text-lg mb-2">What We Do</h5>
          <h1 className=" text-5xl mb-4">The Agent-Client Matchmaking Portal</h1>
          <p className="">
            Now you can skip property-browsing sites – find a Great Agent who
            knows the area you’re interested in and can help you find the best
            homes, for the best values, in the best locations. Our Great Agents
            help you find the perfect property, in a fraction of the time.
          </p>
        </div>
      </div>
      <div className="py-3 flex text-center items-center justify-center bg-[#1E4077] text-white">
        {/* <p>
          How do we work for you? <span>Watch our video</span>
        </p> */}
      </div>
      <div className="w-10/12 m-auto py-12 text-left bg-white ">
        <label className="text-[#E62E2D] text-xl">Meet Our…</label>
        <h1 className="text-6xl">Featured Agents</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-10">
              {features.map((feature) => (
                <Card feature={feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="text-left w-9/12 my-6 mx-auto">
        <div className="">
          <p className="text-4xl mb-3 ">Are YOU a Great Agent?</p>
        </div>
        <div className="flex justify-between">
          <p className="w-8/12">
            Only the best Real Estate Agents qualify to be Great Agents. Find
            out how you can raise your status by connecting with Great Clients
            to build your business. Dare to be Great. Enter here.
          </p>
          <button className="bg-[#E62E2D] text-white px-8 py-2 rounded">
            Apply Now
          </button>
        </div>
      </div>
      <div className="relative bg-[#1E4077]/90 text-white my-20">
      <div className="absolute h-full w-full -z-10">
        <img src={bannerImage} className="h-full w-full object-cover"/>
      </div>
        <div className="mb-10 pt-16">
          <div className="  text-5xl w-3/12 mx-auto text-center mb-10">
            <h1>What Makes Great Agents Different</h1>
          </div>
          <div>
            <p className=" w-5/12 text-lg mx-auto">
              Great Agents are highly qualified agents with experience, local
              specialties, and lots of positive feedback from people just like
              you. If you demand the best, then look no further!
            </p>
          </div>
        </div>
        <div className="flex w-8/12 pb-16 mx-auto text-center justify-between">
          <div className="border p-16">
            <h1 className="text-8xl">05</h1>
            <p>Year of Experience</p>
            <p>Qualified Great Agents</p>
          </div>
          <div className="flex flex-wrap items-center w-8/12">
            <div className="w-5/12 ">
              <p>VETTED AGENTS – QUALITY GUARANTEED</p>
            </div>
            <div className="w-5/12 ">
              <p>THE FASTEST WAY TO BUY OR SELL A HOME</p>
            </div>
            <div className="w-5/12 ">
              <p>OUR AIM: PERFECT 5-STAR SERVICE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto my-20 text-left">
        <div className="mb-10">
          <p className="text-xl text-[#E62E2D]">What are people saying?</p>
          <h2 className="text-3xl font-bold text-[#1E4077]">
            Our Clients Love Us.
          </h2>
        </div>
        <div className="flex items-center justify-between ">
          <img
            className="w-[300px] h-[300px] rounded-full border-t-8 border-l-4 border-r-4  border   border-[#E62E2D]"
            src={profile}
          />
          <div className="w-8/12 text-left ">
            <h4 className="text-3xl font-bold text-[#1E4077]">ELVET STAIN</h4>
            <p className="text-2xl text-[#E62E2D]">Retailer</p>
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
