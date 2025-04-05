import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";

const AddStudent = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="w-full flex justify-center items-center h-screen bg-[#E6F0F9]">
          <div className="flex flex-col">
            <h1 className="text-4xl text-gray-800 text-center font-bold">
              Welcome to our largest community
            </h1>
            <p className="text-center text-gray-800 my-1">
              Let's learn something new today!
            </p>
            <img
              src="https://themes.stackbros.in/eduport_r/assets/02-CxJqFtvR.svg"
              alt="sign up logo"
              className="my-5"
              width={"100%"}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-screen">
          <div className="p-10 w-[95%] md:w-[80%] mx-auto">
            <img
              src="https://themes.stackbros.in/eduport_r/assets/03-BSwonyT7.svg"
              alt="sign up image"
              className="w-10"
            />
            <h2 className="text-gray-800 text-4xl font-bold">
              Sign up for your account!
            </h2>
            <p className="text-gray-500 text-xl my-3">
              Nice to see you! Please Sign up with your account.
            </p>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
