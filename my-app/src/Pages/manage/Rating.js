import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const Rating = () => {
  const data = [
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      rating: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      rating: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      rating: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      rating: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      rating: "Pending",
    },
  ];
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-between items-center border-b-[3px] border-[#1E4077]">
        <h1 className="text-left text-2xl font-semibold text-[#E62E2D]  py-4 px-1">
          Rating
        </h1>
      </div>
      <table class="table-fixed w-full">
        <thead>
          <tr className="h-14">
            <th>Date</th>
            <th>User</th>
            <th>Business</th>
            <th>Rating</th>
            </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <>
              <tr
                className="bg-[#E8F3FF] text-sm font-semibold text-[#1E4077] h-14"
                style={{ margin: "10px" }}
              >
                <td>{x.date}</td>
                <td>{x.user}</td>
                <td>{x.business}</td>
                <td>{x.rating}</td>
                <td>
                </td>
              </tr>
              <tr className="h-6"></tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rating;
