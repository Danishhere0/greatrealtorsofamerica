import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ManageList = () => {
  const data = [
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
    {
      date: "18 Oct, 2021",
      user: "Ahmed Majid",
      business: "Realtor",
      status: "Pending",
    },
  ];
  return (
    <div className="">
      <div className="flex md:flex-row flex-col justify-between items-center border-b-[3px] border-[#1E4077]">
        <h1 className="text-left text-2xl font-semibold text-[#E62E2D]  py-4 px-1">
          Manage Listing
        </h1>
        <button className="text-[#E62E2D] md:mr-6">Add List</button>
      </div>
      <table class="table-fixed w-full">
        <thead>
          <tr className="h-14">
            <th>Date</th>
            <th>User</th>
            <th>Business</th>
            <th>Status</th>
            <th></th>
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
                <td>{x.status}</td>
                <td>
                  <div className="flex flex-row text-white ml-2">
                    <span className="rounded-full p-2 bg-[#1E4077] mr-2">
                      <MdModeEdit />
                    </span>
                    <span className="rounded-full p-2 bg-[#E62E2D]">
                      <RiDeleteBin2Fill />
                    </span>
                  </div>
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

export default ManageList;
