import React from "react";
import { nav_data } from "./data/navData";
import { BsThreeDots } from "react-icons/bs";

const SmallNavItems = () => {
  return (
    <>
      <ul className=" flex flex-col gap-6 relative items-start justify-start w-full">
        {nav_data?.map((item, index) => {
          return (
            <li
              className="text-gray-500 flex group relative font-semibold cursor-pointer "
              key={index}
            >
              <span className="hover:text-blue-600 flex items-center gap-2">
                {item?.title} {item?.icon}
              </span>
              <ul className="shadow-xl mt-6  hidden  absolute  group-hover:block bg-white rounded-3 w-52 text-gray-500  gap-3">
                {item?.list?.map((item2, index2) => {
                  return (
                    <li className="p-2 px-4 group/sub relative flex justify-between items-center  hover:bg-blue-100">
                      <div className="flex gap-1 items-center">
                        {item2.icon} {item2?.title}{" "}
                      </div>
                      {item2?.subList && <BsThreeDots />}
                      <ul
                        style={{ transition: "all 0.7s" }}
                        className="shadow-xl  opacity-0  absolute top-0 bg-white rounded-md w-52 text-gray-500 gap-3 group-hover/sub:opacity-100  group-hover/sub:translate-x-[90%]"
                      >
                        {item?.list[index2]?.subList?.map((item3, index3) => {
                          return (
                            <li
                              key={index3}
                              className="p-2 px-4 flex group/subsub relative justify-between items-center hover:bg-blue-100"
                            >
                              {item3?.title}

                              <ul
                                style={{ transition: "all 0.7s" }}
                                className="shadow-xl  opacity-0  absolute top-0 bg-white rounded-md w-52 text-gray-500 gap-3 group-hover/subsub:opacity-100  group-hover/subsub:translate-x-[90%]"
                              >
                                {item3?.subSubList?.map((item4, index4) => {
                                  return (
                                    <li
                                      key={index4}
                                      className="p-2 px-4 flex justify-between items-center hover:bg-blue-100"
                                    >
                                      {item4?.title}
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SmallNavItems;
