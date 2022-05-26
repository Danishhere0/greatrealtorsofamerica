import React from "react";
import bannerImage from "../Assets/Images/Home.jpg";

const About = () => {
  const about1 = [
    {
      h1: "Where Serious Home Shoppers",
      h2: "Can Find A Seriously Great Agent.",
      p: "If you are a serious home buyer, we don’t want to waste your time. Here is the most comprehensive online resource instantly connecting you to the best, most professional real estate agents in your area and across the country.",
      p2: "Searching for property is stressful, and only a Great Agent has the skills and experience to ease your worries, and put you on the road to finding that perfect purchase."
    },
    {
      h1:"This site is different.",
      p:"The Great Agents we recommend to you are property finders and problem solvers of the highest professional caliber. Simply fill out our search form below, and we’ll confidently present you with proven, vetted agents that won’t waste your time, either."
    },
    {
      h1:"Attention: if you are a Great Agent, we want you.",
      p:"If you have *much* higher standards than your peers… If you have your sights, mind and goals aimed toward working with the world’s most discerning clientele… AND, if you have the track record to prove your commitment, we want you to sign up now! "
    },
    {
      h1:"Great Agents get the world’s greatest clients.",
      p:"We intend to deliver to you outstanding, qualified home buyers who will challenge your skills and push you to show what it really means to be a Great Agent. "
    },
    {
      h1:"Tell us about yourself.",
      p:"You have a terrific  story that needs to be shared, and our platform will get the word out to a prequalified audience of clients guaranteed to expand your reach beyond any marketing you are doing right now.",
      p2:"You know the power of marketing, and this is the latest, most focused marketing tool in existence, helping you to grab qualified and ready-to-buy customers. We work around the clock to deliver them to you. "
    },
  ];
  return (
    <div className="">
      <div className="relative text-white bg-[#1E4077]/70 ">
        <div className="absolute w-full h-full -z-10">
          <img src={bannerImage} className="h-full w-full object-cover" />
        </div>
        <div className="py-28">
          <h1 className="text-4xl">About Us</h1>
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 text-left mx-auto my-6">
        {about1.map((x) => (
          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">{x.h1}</h2>
            <h2 className="text-2xl mb-3 text-[#E62E2D]">{x.h2}</h2>
            <p className="text-lg mb-3">{x.p}</p>
            <p className="text-lg mb-3">{x.p2}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]"></h2>
      <h2 className="text-2xl mb-3 text-[#E62E2D]"></h2>
      <p className="text-lg mb-3"></p>
    </div>
  );
};

export default About;
