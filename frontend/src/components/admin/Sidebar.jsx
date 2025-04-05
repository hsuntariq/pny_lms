import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { sidebar_data } from "./data/sidebar_data";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(null);
  const handleClick = (id) => {
    setOpen(open == id ? null : id);
  };
  return (
    <>
      <div className="min-h-screen overflow-y-scroll text-white p-5 bg-[#24292D]">
        <img
          src="https://themes.stackbros.in/eduport_r/assets/logo-light-C-qw19RF.svg"
          alt="logo"
          width={200}
        />
        <div
          onClick={() => setSelected("Dashboard")}
          className={`flex gap-3 items-center px-5 mt-10 py-3 rounded-full mb-5 cursor-pointer ${
            selected == "Dashboard" && "bg-green-500 text-white"
          } `}
        >
          <FaHome />
          <h5 className="text-sm font-semibold">Dashboard</h5>
        </div>

        <p className="text-gray-500">Pages</p>
        <ul className="flex flex-col unstyled gap-3">
          {sidebar_data?.map((item, index) => {
            return (
              <div key={index} onClick={() => setSelected(item?.title)}>
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex flex-col py-2 my-3 justify-between hover:bg-gray-700 px-4 rounded-full cursor-pointer gap-3 ${
                    selected == item?.title && "bg-green-500 text-white"
                  } `}
                >
                  <div className="flex gap-3 justify-between items-center">
                    <div className="flex gap-3 items-center">
                      {item?.icon}
                      <h5 className="text-sm font-semibold">{item?.title}</h5>
                    </div>
                    {item?.list && <RiArrowDropDownLine />}
                  </div>
                </li>
                {item?.list && (
                  <>
                    <ul
                      className={`flex transition-all delay-200 duration-200 flex-col unstyled gap-3 ${
                        open == index
                          ? "h-[100px] opacity-100"
                          : "h-0 overflow-hidden opacity-0"
                      } `}
                    >
                      {item?.list?.map((item2, index2) => {
                        return <li className="ms-10">{item2?.title}</li>;
                      })}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
