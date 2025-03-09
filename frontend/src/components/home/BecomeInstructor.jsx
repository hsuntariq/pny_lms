import { Button } from "@mui/material";
import React from "react";

const BecomeInstructor = () => {
  return (
    <>
      <div className="p-3 md-p-10">
        <div className="container rounded-md  mx-auto p-3 md:p-10">
          <div className="grid  bg-[#17A2B8] p-10 md:px-20 px-10 rounded-md place-content-center grid-cols-1 relative md:grid-cols-2 items-center">
            <img
              src="/svgs/circle-big.svg"
              alt=""
              className="absolute left-10"
            />
            <img
              src="/svgs/circle-sm.svg"
              alt=""
              width={500}
              className="absolute right-1/3"
            />
            <div className="flex gap-3 flex-col relative z-2">
              <h3 className="text-3xl text-white font-semibold">
                Become an Instructor!
              </h3>
              <p className=" text-white">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="border p-2 font-semibold px-5 rounded-md  capitalize text-yellow-400 border-2 hover:bg-yellow-400 hover:text-black cursor-pointer transition-all duration-150 border-yellow-400">
                start teaching today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
