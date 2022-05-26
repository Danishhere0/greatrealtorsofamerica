import React from "react";
import Card from "../Components/Card";
import bannerImage from "../Assets/Images/Home.jpg";

import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const FindRealtor = () => {
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
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];
  return (
    <div>
      <div className="relative text-white bg-[#1E4077]/70 ">
        <div className="absolute w-full h-full -z-10">
          <img src={bannerImage} className="h-full w-full object-cover" />
        </div>
        <div className="py-36">
          <h1 className="text-4xl">Realtor Lists</h1>
          <p>
            Home | <span className="text-[#E62E2D]">Find Realtor</span>
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-12 text-left bg-white ">
        <label className="text-[#E62E2D] text-xl">Meet Our…</label>
        <div className="flex flex-col md:flex-row md:-ml-1 justify-between">
          <h1 className="text-6xl">Featured Agents</h1>
          <select className="mt-4 bg-transparent py-3 pr-24 pl-4 border-2 rounded-lg border-[#1E4077] mb-6 ">
            <option>Most Recent Activity</option>
          </select>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-20 md:gap-y-10">
              {features.map((feature) => (
                <Card feature={feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindRealtor;
