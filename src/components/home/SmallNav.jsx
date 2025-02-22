import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { TextField, Typography } from "@mui/material";
import { nav_data } from "./data/navData";
import { BsThreeDots } from "react-icons/bs";
import NavbarMiddleSection from "./NavbarMiddleSection";
import { FaSearch } from "react-icons/fa";
import SmallNavItems from "./SmallNavItems";
const SmallNav = ({ open }) => {
  return (
    <>
      <div
        className={`flex ${
          open ? "" : "h-0"
        }  overflow-hidden transition-all pb-3 bg-white shadow-lg   flex-col px-2  justify-between  items-center`}
      >
        <div className="flex items-center gap-2 w-full p-3">
          <div className="bg-blue-100 border-t-0 border-e-0 border-s-0 border  border-b-1 border-gray-300 w-full p-4 rounded-md flex gap-2 items-center">
            <BiCategory color="#1A76CD" />
            <Typography
              variant="p"
              className="text-sm w-full text-[#1A76CD] font-semibold"
            >
              Categories
            </Typography>
          </div>
        </div>

        <hr className="border-gray-300 w-full mt-3 my-2" />
        {/* navigation */}
        <SmallNavItems />

        {/* search section */}
        <div className="flex mt-3 w-full gap-3 items-center">
          <div className="relative w-full">
            <TextField
              label="Search"
              name="Search"
              className="w-full"
              size="small"
              placeholder="Search for anything..."
            />
            <FaSearch className="absolute top-[50%] -translate-y-[50%] end-2" />
          </div>
          {/* icon */}
        </div>
      </div>
    </>
  );
};

export default SmallNav;
