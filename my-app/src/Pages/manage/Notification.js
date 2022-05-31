import React from "react";
import { BsBell } from "react-icons/bs";

const Notification = () => {
  const data = [
    {
      notification:
        'New Realtor has been ("df").Check it out in the Listed Page',
      time: "April 8, 2021, 9:23 am",
      by: "Admin",
    },
    {
      notification:
        'New Realtor has been ("df").Check it out in the Listed Page',
      time: "April 8, 2021, 9:23 am",
      by: "Admin",
    },
    {
      notification:
        'New Realtor has been ("df").Check it out in the Listed Page',
      time: "April 8, 2021, 9:23 am",
      by: "Admin",
    },
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center border-b-[3px] border-[#1E4077]">
        <h1 className="text-left text-2xl font-semibold text-[#E62E2D]  py-4 px-1">
          Notification
        </h1>
      </div>
      <div className="w-11/12 mx-auto">
        {data.map((x) => (
          <div className="flex flex-row items-center my-4 ">
            <span className=" rounded-full p-4 text-2xl bg-[#E62E2D] text-white mr-4"><BsBell/></span>
            <div className="text-left">
              <p className=" text-[#1E4077] text-sm font-semibold">{x.notification}</p>
              <label className="text-xs">
                {x.time} By {x.by}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
