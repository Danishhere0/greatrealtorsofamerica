import React from "react";
import bannerImage from "../Assets/Images/Home.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      h1: "Services (Shopping For An Agent)",
      h2: "Can Find A Seriously Great Agent.",
      h3: "To Make Shopping For A Home Easy",
      p: "Connect with the top experts in your area who have the commitment, availability, and product knowledge of your desired neighborhoods.",
      p2: "A Great Agent can give you the lowdown on civic services, schools, transportation, “real” market value, and a lot more.",
      p3: "Our registered Great Agents have all the relevant background information online right here, so you can get to know them immediately, including comments and ratings from other customers! ",
    },
  ];
  return (
    <div className="">
      <div className="relative text-white bg-[#1E4077]/70 ">
        <div className="absolute w-full h-full -z-10">
          <img src={bannerImage} className="h-full w-full object-cover" />
        </div>
        <div className="py-28">
          <h1 className="text-4xl">Services</h1>
        </div>
      </div>
      <div className="lg:w-8/12 w-11/12 text-left mx-auto my-6">
        <div className="my-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
            Services (Shopping For An Agent)
          </h2>
          <h2 className="text-2xl mb-3 text-[#E62E2D]">
            We Deliver Great Agents
          </h2>
          <h2 className="text-xl mb-3 text-[#E62E2D]">
            To Make Shopping For A Home Easy
          </h2>
          <p className="text-lg mb-3">
            Connect with the top experts in your area who have the commitment,
            availability, and product knowledge of your desired neighborhoods.
          </p>
          <p className="text-lg mb-3">
            A Great Agent can give you the lowdown on
            <span className=" font-semibold">
              civic services, schools, transportation, “real” market value, and
              a lot more.
            </span>
          </p>
          <p className="text-lg mb-3">
            Our registered Great Agents have all the relevant background
            information online right here, so you can get to know them
            immediately, including comments and ratings from other customers!
          </p>
        </div>

        <div className="my-10">
          <h2 className="text-2xl font-semibold mb-3 text-[#1E4077]">
            Don’t just dream about a dream home... Find a Great Home with a
            Great Agent!
          </h2>
          <p className="text-lg mb-3">
            This is the site you needed to go beyond wishful thinking and into
            serious, knowledgeable selection.
          </p>
          <button className="text-lg mb-3 px-3 py-2 text-white bg-[#E62E2D]">
            <Link to="/find-realtor">I’m looking for a home.</Link>
          </button>
          <p className="text-lg my-3 font-semibold">
            Need an investment property specialist
          </p>
          <p className="text-lg mb-3">
            Find the Great Agent who has the knack of scouring the market to
            present the perfect investment opportunities for you in the markets
            you want. It takes specialized skills, and this is the place to find
            the Great Agent who is ready to assist you
          </p>
          <button className="text-lg mb-3 px-3 py-2 text-white bg-[#E62E2D]">
            <Link to="/find-realtor">I’m looking for investment property.</Link>
          </button>
        </div>
        <div className="my-10">
          <h2 className="text-xl mb-3 text-[#E62E2D]">
            Services (Real Estate Agents)
          </h2>
          <p className="text-lg mb-3 font-semibold">
            Become one of our Great Agents, and grow with us.
          </p>
          <p className="text-lg mb-3">
            Fill your sales funnel like never before with serious customers who
            have expressed an intention to work with a Great Agent.
          </p>
          <button className="text-lg mb-3 px-3 py-2 text-white bg-[#E62E2D] "><Link to="/sign-up">Apply Now</Link></button>
          <p className="text-lg my-4 font-semibold">
            Greatness is more than its own reward.
          </p>
          <p className="text-lg mb-3">
            Our database is growing and delivering more results day by day.
            Expect a boost in your business, a boost in your earnings, and a
            boost in your professional reputation.
          </p>
          <p className="text-lg mb-3">
            Our system is designed so that every lead you receive will be a
            perfect fit for you, and you can get right down to business. No
            other realtor portal has the focus on delivering successful
            opportunities that match your talents.
          </p>
          <button className="text-lg mb-3 px-3 py-2 text-white bg-[#E62E2D]">
            <Link to="/sign-up">Let’s get started.</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
