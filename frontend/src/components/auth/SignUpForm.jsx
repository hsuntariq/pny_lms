import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { regUserData, userReset } from "../../features/users/userSlice";
import { Hourglass } from "react-loader-spinner";
const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    c_password: "",
    batch_no: "",
    course_name: "",
    role: "",
  });

  const {
    name,
    username,
    email,
    password,
    gender,
    c_password,
    batch_no,
    course_name,
    role,
  } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const { user, userError, userSuccess, userMessage, userLoading } =
    useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      toast.success("User registered");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleRegister = () => {
    if (password != c_password) {
      toast.error("Passwords do not match");
      return;
    }

    const userData = {
      name,
      username,
      email,
      password,
      gender,
      course_name,
      batch_no,
      role,
    };
    dispatch(regUserData(userData));
  };

  return (
    <>
      <form className="text-gray-500 my-5 overflow-y-scroll h-[80vh]">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="my-2">
            <label htmlFor="">Name *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                value={name}
                onChange={handleChange}
                name="name"
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
                value={username}
                onChange={handleChange}
                name="username"
                type="text"
                className="outline-0 w-full text-gray-700"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="my-2">
            <label htmlFor="">Course Name *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                value={course_name}
                onChange={handleChange}
                name="course_name"
                type="text"
                className="outline-0 w-full text-gray-700"
                placeholder="Course Name"
              />
            </div>
          </div>
          <div className="my-2">
            <label htmlFor="">Batch No. *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                value={batch_no}
                onChange={handleChange}
                name="batch_no"
                type="number"
                className="outline-0 w-full text-gray-700"
                placeholder="Batch Number"
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
              value={email}
              onChange={handleChange}
              name="email"
              type="email"
              className="outline-0 w-full text-gray-700"
              placeholder="E-Mail"
            />
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="">Role *</label>
          <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
            <FaEnvelope size={20} className="text-gray-400" />
            <select
              value={role}
              onChange={handleChange}
              name="role"
              className="outline-0 w-full text-gray-700"
              placeholder="E-Mail"
            >
              <option selected disabled>
                Select Role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {/* password */}
          <div className="my-2">
            <label htmlFor="">Password *</label>
            <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
              <FaEnvelope size={20} className="text-gray-400" />
              <input
                value={password}
                onChange={handleChange}
                name="password"
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
                value={c_password}
                onChange={handleChange}
                name="c_password"
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
              <input
                value={1}
                onChange={handleChange}
                name="gender"
                type="radio"
              />
            </div>
            <div className="flex justify-between p-4 bg-gray-100">
              <label htmlFor="">Female</label>
              <input
                value={0}
                onChange={handleChange}
                name="gender"
                type="radio"
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleRegister}
          variant="contained"
          className="w-full"
          style={{ margin: "0.5rem 0", padding: "10px" }}
        >
          {userLoading ? (
            <>
              <Hourglass
                visible={true}
                height="25"
                width="25"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["white", "yellow"]}
              />
            </>
          ) : (
            " Sign Up"
          )}
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
