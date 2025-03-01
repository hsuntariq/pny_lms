import React from "react";
import { BsPlay, BsPlayFill } from "react-icons/bs";
import { FaCheck, FaEnvelope } from "react-icons/fa";
import HeroVideo from "../../components/home/HeroVideo";
import ImagesSection from "../../components/home/ImagesSection";
const Hero = () => {
  return (
    <>
      <div className="container p-3 md:p-10  mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center flex-col gap-3">
          <h2 className="font-semibold text-[#24292D] text-4xl text-center lg:text-start lg:text-6xl">
            Limitless learning at your{" "}
            <span className="relative ">
              fingertips
              <span className="absolute top-[20px]  start-0 -z-10 w-full h-[200px]">
                <img src="/svgs/hero-svg.svg" />
              </span>
            </span>
          </h2>
          <p className="text-gray-500  text-center lg:text-start text-sm  lg:text-xl ">
            Online learning and teaching marketplace with 5K+ courses & 10M
            students. Taught by experts to help you acquire new skills.
          </p>
          <div className="flex flex-col md:flex-row center gap-2">
            <div className="flex items-center gap-1">
              <FaCheck />
              <p className="text-gray-500 whitespace-nowrap text-sm">
                Learn with experts
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck />
              <p className="text-gray-500 whitespace-nowrap text-sm">
                Get certificate
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck />
              <p className="text-gray-500 whitespace-nowrap text-sm">
                Get membership
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button className="bg-rose-100 font-semibold p-4 rounded-md capitalize text-rose-500">
              get started
            </button>

            <HeroVideo />
          </div>
        </div>
        <ImagesSection />
      </div>
    </>
  );
};

export default Hero;
