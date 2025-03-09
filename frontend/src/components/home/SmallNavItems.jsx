import React, { useState } from "react";
import { nav_data } from "./data/navData";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

const SmallNavItems = () => {
  const [open, setOpen] = useState(null);
  const [open3, setOpen3] = useState(null);
  const [open2, setOpen2] = useState(null);
  const handleOpen = (id) => {
    setOpen(open == id ? null : id);
    // alert(id);
  };
  const handleOpen2 = (id) => {
    setOpen2(open2 == id ? null : id);
    // alert(id);
  };
  const handleOpen3 = (id) => {
    setOpen3(open3 == id ? null : id);
    // alert(id);
  };

  return (
    <>
      <ul className="flex flex-col gap-3 relative items-start justify-start w-full">
        {nav_data?.map((item, index) => {
          return (
            <li
              className="text-gray-500  px-5 pb-3 border border-b-1 border-gray-300 w-full border-t-0 border-e-0 border-s-0   relative font-semibold cursor-pointer "
              key={index}
            >
              <span
                onClick={() => handleOpen(index)}
                className="hover:text-blue-600 w-full justify-between pt-3 flex  items-center gap-2"
              >
                {item?.title}{" "}
                <span
                  className={`transition duration-300 ${
                    open == index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {item?.icon}
                </span>
              </span>

              <ul
                className={`flex  transition-all duration-300 flex-col  ${
                  open == index ? "p-2 h-[300px] overflow-y-scroll" : "h-0"
                } overflow-hidden gap-3 w-full bg-white shadow`}
              >
                {item?.list?.map((item2, index2) => {
                  return (
                    <li
                      className="text-gray-500   px-5 pb-3 border border-b-1 border-gray-300 w-full border-t-0 border-e-0 border-s-0   relative font-semibold cursor-pointer "
                      key={index2}
                    >
                      <span
                        onClick={() => handleOpen2(index2)}
                        className="w-full flex justify-between items-center"
                      >
                        {item2.title} {item2?.subList && <BsThreeDots />}
                      </span>
                      {item2?.subList && (
                        <>
                          <ul
                            className={`flex bg-gray-100 ${
                              open2 == index2
                                ? "p-2 my-3 h-[300px] overflow-y-scroll"
                                : "h-0"
                            }  transition-all duration-300 flex-col overflow-hidden gap-3 w-full  shadow`}
                          >
                            {item2?.subList?.map((item3, index3) => {
                              return (
                                <li
                                  className="text-gray-500   px-5 pb-3 border border-b-1 border-gray-300 w-full border-t-0 border-e-0 border-s-0   relative font-semibold cursor-pointer "
                                  key={index3}
                                >
                                  <span
                                    onClick={() => handleOpen3(index3)}
                                    className="flex items-center justify-between"
                                  >
                                    {item3.title}{" "}
                                    {item3?.subSubList && <BsThreeDots />}
                                  </span>
                                  {item3?.subSubList && (
                                    <>
                                      <ul
                                        className={`flex bg-gray-100 ${
                                          open3 == index3
                                            ? "p-2 my-3 h-[300px] overflow-y-scroll"
                                            : "h-0"
                                        }  transition-all duration-300 flex-col overflow-hidden gap-3 w-full  shadow`}
                                      >
                                        {item3?.subSubList?.map(
                                          (item4, index4) => {
                                            return (
                                              <li
                                                className="text-gray-500   px-5 pb-3 border border-b-1 border-gray-300 w-full border-t-0 border-e-0 border-s-0   relative font-semibold cursor-pointer "
                                                key={index4}
                                              >
                                                <span className="flex items-center justify-between">
                                                  {item4.title}{" "}
                                                  {item4?.subSubList && (
                                                    <BsThreeDots />
                                                  )}
                                                </span>
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    </>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )}
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
