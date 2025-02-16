import React from "react";
import { BiCategory } from "react-icons/bi";
import { Typography } from "@mui/material";
import { nav_data } from "./data/navData";
import { BsThreeDots } from "react-icons/bs";
const Nav = () => {
  return (
    <>
      <div className="flex px-5 gap-5 items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-[100px]"
            src="https://download.logo.wine/logo/PNY_Technologies/PNY_Technologies-Logo.wine.png"
            alt="pny logo"
          />
          <div className="bg-blue-100 p-2 rounded-md flex gap-2 items-center">
            <BiCategory color="#1A76CD" />
            <Typography
              variant="p"
              className="text-sm text-[#1A76CD] font-semibold"
            >
              Categories
            </Typography>
          </div>
        </div>

        <ul className=" flex gap-4 relative items-center">
          {nav_data?.map((item, index) => {
            return (
              <li
                className="text-gray-700 group relative font-semibold cursor-pointer "
                key={index}
              >
                <span className="hover:text-blue-600">{item?.title}</span>
                <ul className="shadow hidden  absolute  group-hover:block bg-white rounded-3 w-48  gap-3">
                  {item?.list?.map((item2, index2) => {
                    return (
                      <li className="p-1 flex justify-between items-center  hover:bg-gray-200">
                        {item2?.title} {item2?.subList && <BsThreeDots />}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
