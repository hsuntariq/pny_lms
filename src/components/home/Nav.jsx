import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { TextField, Typography } from "@mui/material";
import { nav_data } from "./data/navData";
import { BsThreeDots } from "react-icons/bs";
import NavbarMiddleSection from "./NavbarMiddleSection";
import { FaSearch } from "react-icons/fa";
import SmallNav from "./SmallNav";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex px-10 gap-5 justify-between  items-center">
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

        {/* navigation */}
        <NavbarMiddleSection />

        {/* search section */}
        <div className="flex gap-3 items-center">
          <div className="relative">
            <TextField
              label="Search"
              name="Search"
              size="small"
              placeholder="Search for anything..."
            />
            <FaSearch className="absolute top-[50%] -translate-y-[50%] end-2" />
          </div>
          {/* icon */}

          <div
            onClick={() => setOpen(!open)}
            className="w-5 relative cursor-pointer flex flex-col gap-1"
          >
            <div
              style={{
                transition: "all 0.3s",
              }}
              className={`w-full   ${
                open && "top-[50%] absolute rotate-[45deg]"
              } h-[2px] bg-gray-500`}
            ></div>
            <div
              className={`w-full transition ${
                open && "hidden"
              }  h-[2px] bg-gray-500`}
            ></div>
            <div
              style={{
                transition: "all 0.3s",
              }}
              className={`w-full ${
                open && "-top-[50%] absolute -rotate-[45deg]"
              }    h-[2px] bg-gray-500`}
            ></div>
          </div>

          <img
            src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
            className="w-[50px] [clip-path:circle()] h-[50px]"
            alt=""
          />
        </div>
      </div>
      <SmallNav />
    </>
  );
};

export default Nav;
