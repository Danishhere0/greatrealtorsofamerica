import React from "react";

const Manage = () => {
const buttons = [
    {
      name: "Manage Profile",
    },
    {
      name: "Manage Listing",
    },
    {
      name: "Manage Location",
    },
    {
      name: "My Leads",
    },
    {
      name: "Ratings",
    },
    {
      name: "Notification",
    },
    {
      name: "Support Ticket",
    },
  ];
  return (
    <div className="lg:w-10/12 flex md:flex-col">
      <div className="md:w-3/12 bg-[#1E4077]">
        {buttons.map((x) => (
          <div className="flex flex-col">
            <label>{x.name}</label>
            <div></div>
          </div>
        ))}
      </div>
      <div className="md:w-3/12 bg-[]"></div>
    </div>
  );
};

export default Manage;
