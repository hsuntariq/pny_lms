import React from "react";
import Nav from "../../../components/home/Nav";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaBookSkull, FaUserGraduate } from "react-icons/fa6";
import { Button } from "@mui/material";
import CourseModal from "../../../components/teacher/dashboard/CourseModal";
import Sidebar from "../../../components/student/Sidebar";
import Quizzess from "../../../components/student/Quizzess";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Nav />
      <div
        className="w-full  h-50 bg-[#1D3B53]"
        style={{
          backgroundImage:
            "url(https://themes.stackbros.in/eduport_r/assets/04-Bnwx2Yg_.png)",
        }}
      ></div>

      <div className="container p-3 lg:px-10 mx-auto  grid grid-cols-1 ">
        <div className="flex w-full items-start  gap-3">
          <div className="border -translate-y-[30%] border-2 w-40 aspect-square  overflow-hidden border-green-500 rounded-full   ">
            {user?.gender == 1 ? (
              <img
                src="/avatars/male.jpg"
                className="object-cover h-full w-full "
                alt=""
              />
            ) : (
              <img
                src="/avatars/female.svg"
                className="object-cover h-full w-full "
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col w-full ">
            <div className="flex gap-2 capitalize w-full items-center">
              <h3 className="text-2xl md:text-3xl font-semibold">
                {user?.name}
              </h3>
              <TbRosetteDiscountCheckFilled
                className="translate-y-1"
                color="#17A2B8"
                size={30}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full justify-start md:justify-between items-center">
              <div className="flex flex-col md:flex-row  gap-3 w-full items-start md:items-center">
                <div className="flex gap-1 items-center">
                  <FaStar color="gold" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">255</span> points
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaUserGraduate color="#FD7E14" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">7</span>{" "}
                    Completed courses
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaBookSkull color="#6F42C1" />
                  <p className="text-gray-700">
                    <span className="font-semibold text-black">52</span>{" "}
                    Completed lessons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Sidebar />
          <Quizzess />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
