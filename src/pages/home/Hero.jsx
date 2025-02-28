import React from "react";
import { BsPlay, BsPlayFill } from "react-icons/bs";
import { FaCheck, FaEnvelope } from "react-icons/fa";
import HeroVideo from "../../components/home/HeroVideo";
const Hero = () => {
  return (
    <>
      <div className="container p-10  mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center flex-col gap-3">
          <h2 className="font-semibold text-[#24292D] text-4xl text-center lg:text-start lg:text-6xl">
            Limitless learning at your{" "}
            <span className="relative ">
              fingertips
              <span className="absolute top-[20px]  start-0 -z-10 w-full h-[200px]">
                <img src="/svg/hero-svg.svg" />
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
        <div
          style={{
            backgroundImage: "url(svgs/blob.svg)",
            backgorundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          className="image  overflow-hidden relative flex justify-center items-center"
        >
          {/* react logo */}
          <img src="/images/react.svg" alt="" className="absolute z-3 left-0" />
          {/* bulb */}
          <img
            src="/images/bulb.png"
            width={"70px"}
            alt=""
            className="absolute z-3 left-[35%] top-[20%]"
          />
          <img src="/images/figma.svg" width={"50px"} alt="" className=" z-3" />

          {/* users */}

          <div
            className="p-3 bg-green-500 rounded-xl inline-block rounded-4 z-4 shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2 -mt-7 z-10 hidden md:block"
            // style={{
            //   background:
            //     "url(/eduport_r/assets/01-B7c09dEI.png) center center / cover no-repeat",
            // }}
          >
            <p className="text-white">Our daily new students</p>
            <ul className="flex -space-x-2">
              <li className="w-8 h-8">
                <img
                  className="w-full h-full rounded-full border-2 border-white"
                  src="/eduport_r/assets/01-7N0KytgQ.jpg"
                  alt="avatar"
                />
              </li>
              <li className="w-8 h-8">
                <img
                  className="w-full h-full rounded-full border-2 border-white"
                  src="/eduport_r/assets/02-Dm08lEkH.jpg"
                  alt="avatar"
                />
              </li>
              <li className="w-8 h-8">
                <img
                  className="w-full h-full rounded-full border-2 border-white"
                  src="/eduport_r/assets/03-gME39Lw5.jpg"
                  alt="avatar"
                />
              </li>
              <li className="w-8 h-8">
                <img
                  className="w-full h-full rounded-full border-2 border-white"
                  src="/eduport_r/assets/04-Axz2kzOk.jpg"
                  alt="avatar"
                />
              </li>
              <li className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white text-sm font-semibold">
                1K+
              </li>
            </ul>
          </div>

          {/* congrats */}

          <div className="p-4 absolute bottom-[10px] z-3 rounded-xl border backdrop-blur-sm border-white">
            <div className="flex  items-center">
              <div className="flex h-[50px] w-[50px] rounded-full bg-yellow-500 items-center justify-center">
                <FaEnvelope color="white" className="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm text-white">Conratulations</h3>
                <p className="text-sm text-white">Your admission completed</p>
              </div>
            </div>
          </div>

          <div className="user-image bg h-[500px]">
            <img
              src="https://themes.stackbros.in/eduport_r/assets/07-CK3ZrEuH.png"
              className=" block"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
