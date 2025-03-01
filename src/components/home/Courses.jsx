import React, { useState } from "react";
import { courses } from "./data/courseCategory";
import { coursesData } from "./data/courses";
import {
  FaCalendar,
  FaClock,
  FaHeart,
  FaHeartBroken,
  FaStar,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Courses = () => {
  const [selected, setSelected] = useState("web design");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleFilter = (value) => {
    let newCourses = filteredCourses?.filter((item, index) => {
      return item.category.toLowerCase() == value;
    });

    setFilteredCourses(newCourses);
  };

  const handleMyFilter = (item) => {
    setSelected(item);
    handleFilter(item);
  };

  return (
    <>
      <div className="container p-3 md:p-10 mx-auto">
        <h1 className="text-3xl font-semibold lg:text-5xl text-center capitalize">
          Most Popular Courses
        </h1>
        <p className="text-gray-600 my-2 text-center">
          Choose from hundreds of courses from specialist organizations
        </p>

        <div className="w-full rounded-lg   p-4 bg-[#E6F0F9]">
          <div className="w-2/3 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">
            {courses?.map((item, index) => {
              return (
                <button
                  onClick={() => handleMyFilter(item)}
                  className={`text p-3 py-2 w-max rounded-md cursor-pointer text-center capitalize  ${
                    item == selected
                      ? "bg-[#066AC9] text-white"
                      : "text-[#3B89D5] bg-transparent"
                  } `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCourses?.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md shadow-xl overflow-hidden h-full flex flex-col"
              >
                <img src={item?.image} alt="" />
                <div className="p-5 flex flex-col h-full">
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-sm font-semibold px-3 py-1 rounded-md ${
                        item?.levelColor === "#F0ECF9"
                          ? "text-purple-600"
                          : "text-green-600"
                      }`}
                      style={{ background: item?.levelColor }}
                    >
                      {item?.level}
                    </h3>
                    <span className="text-sm">
                      <CiHeart size={25} cursor="pointer" />
                    </span>
                  </div>

                  <h5 className="text-2xl my-2 text-gray-800 font-semibold">
                    {item?.title}
                  </h5>
                  <p className="text-gray-500 mb-2">{item?.desc}</p>

                  <div className="flex gap-1 items-center">
                    {Array.from({ length: item?.rating }).map((_, index) => (
                      <FaStar key={index} color="gold" />
                    ))}
                    <p className="text-sm ms-4 font-semibold">
                      {item?.rating} / 5
                    </p>
                  </div>

                  {/* Align HR at the bottom */}
                  <hr className="w-full border-0 h-[1px] bg-gray-300 mt-auto" />
                  <div className="flex justify-between my-3 items-center">
                    <div className="flex gap-3 items-center">
                      <FaClock className="text-rose-500" />
                      <p className="text-gray-500">{item?.time}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <FaCalendar className="text-orange-400" />
                      <p className="text-gray-500">{item?.lectures} Lectures</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
