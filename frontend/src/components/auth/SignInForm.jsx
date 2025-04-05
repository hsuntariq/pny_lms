import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logUserData, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";

const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    u_mail: "",
    password: "",
  });

  const { u_mail, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLoading, userSuccess, userMessage, userError, user } =
    useSelector((state) => state.auth);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      // check user role
      if (user?.role == "student") {
        navigate("/student/dashboard");
      } else if (user?.role == "teacher") {
        navigate("/teacher/dashboard");
      }
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleLogin = () => {
    const userData = {
      u_mail,
      password,
    };

    dispatch(logUserData(userData));
  };

  return (
    <>
      <form className="text-gray-500 my-5">
        {/* email */}
        <div className="my-2">
          <label htmlFor="">Email *</label>
          <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
            <FaEnvelope size={20} className="text-gray-400" />
            <input
              type="email"
              name="u_mail"
              value={u_mail}
              onChange={handleChange}
              className="outline-0 w-full text-gray-700"
              placeholder="E-Mail"
            />
          </div>
        </div>

        {/* password */}
        <div className="my-2">
          <label htmlFor="">Password *</label>
          <div className="flex mt-2 bg-gray-100 p-4 rounded-sm gap-4 items-center">
            <FaEnvelope size={20} className="text-gray-400" />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="outline-0 w-full text-gray-700"
              placeholder="********"
            />
          </div>
        </div>
        {/* gender */}

        <Button
          onClick={handleLogin}
          variant="contained"
          className="w-full"
          style={{ margin: "0.5rem 0", padding: "10px" }}
        >
          Sign In
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
            Signin with google
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
            Signin with facebook
          </Button>
        </div>

        <p className="text-center my-3">
          New to the app?{" "}
          <Link to={"/sign-up"} className="text-blue-500">
            Sign up here
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
