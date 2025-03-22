import { Button } from "@mui/material";
import React from "react";
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <form className="text-gray-500 my-5">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="my-2">
            <label htmlFor="">Name *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                type="text"
                className="outline-0 w-full text-gray-700"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="">Username *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                type="text"
                className="outline-0 w-full text-gray-700"
                placeholder="Username"
              />
            </div>
          </div>
        </div>

        {/* email */}
        <div className="my-2">
          <label htmlFor="">Email *</label>
          <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
            <FaEnvelope size={20} className="text-gray-400" />
            <input
              type="email"
              className="outline-0 w-full text-gray-700"
              placeholder="E-Mail"
            />
          </div>
        </div>

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {/* password */}
          <div className="my-2">
            <label htmlFor="">Password *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                type="password"
                className="outline-0 w-full text-gray-700"
                placeholder="********"
              />
            </div>
          </div>
          {/* conform password */}
          <div className="my-2">
            <label htmlFor="">Confirm Password *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                type="password"
                className="outline-0 w-full text-gray-700"
                placeholder="********"
              />
            </div>
          </div>
        </div>

        {/* gender */}
        <div className="my-2">
          <label htmlFor="">Gender *</label>
          <div className="grid gap-2 grid-cols-2">
            <div className="flex justify-between p-4 bg-gray-100">
              <label htmlFor="">Male</label>
              <input type="radio" value="male" name="gender" />
            </div>
            <div className="flex justify-between p-4 bg-gray-100">
              <label htmlFor="">Female</label>
              <input type="radio" value="female" name="gender" />
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          className="w-full"
          style={{ margin: "0.5rem 0", padding: "10px" }}
        >
          Sign Up
        </Button>

        <div className="flex items-center my-4 gap-2">
          <hr className="w-full border-0 h-[1px] bg-gray-200" />
          <p className="text-gray-500 text-sm">OR</p>
          <hr className="w-full border-0 h-[1px] bg-gray-200" />
        </div>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
          <Button
            size="small"
            startIcon={<FaGoogle />}
            variant="contained"
            style={{
              background: "#3C7FF1",
              padding: "7px",
            }}
          >
            Signup with google
          </Button>
          <Button
            size="small"
            startIcon={<FaGoogle />}
            variant="contained"
            style={{
              background: "#5D82D1",
              padding: "7px",
            }}
          >
            Signup with facebook
          </Button>
        </div>

        <p className="text-center my-3">
          Alreay have an account?{" "}
          <Link to={"/sign-in"} className="text-blue-500">
            Sign in here
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
