import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { TextField, Typography } from "@mui/material";
import { nav_data } from "./data/navData";
import { BsThreeDots } from "react-icons/bs";
import NavbarMiddleSection from "./NavbarMiddleSection";
import { FaSearch } from "react-icons/fa";
import SmallNavItems from "./SmallNavItems";
const SmallNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex bg-white shadow-lg py-10 flex-col px-2 gap-5 justify-between  items-center">
        <div className="flex items-center gap-2 w-full p-3">
          <div className="bg-blue-100 w-full p-2 rounded-md flex gap-2 items-center">
            <BiCategory color="#1A76CD" />
            <Typography
              variant="p"
              className="text-sm w-full text-[#1A76CD] font-semibold"
            >
              Categories
            </Typography>
          </div>
        </div>

        {/* navigation */}
        <SmallNavItems />

        {/* search section */}
        <div className="flex w-full gap-3 items-center">
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
