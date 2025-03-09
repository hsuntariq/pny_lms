import React from "react";
import { stats } from "./data/statData";

const Stats = () => {
  return (
    <>
      <div className="container p-3 md:p-10 mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats?.map((item, index) => {
          return (
            <>
              <div
                className={`p-5 rounded-md`}
                style={{ background: item?.color }}
              >
                <div className="flex gap-3 items-center ">
                  <img
                    src={item?.icon}
                    alt="icon"
                    className="w-[50px] h-[50px]"
                  />
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-2xl">{item?.number}</h5>
                    <p className="font-[450]">{item?.name}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stats;
