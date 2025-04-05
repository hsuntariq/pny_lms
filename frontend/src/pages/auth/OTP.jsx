import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userReset, verifyOTPData } from "../../features/users/userSlice";
export default function App() {
  const [otp, setOtp] = useState("");

  const { user, userError, userSuccess, userMessage, userLoading } =
    useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      toast.success("OTP verified!");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  const handleOTP = () => {
    const otpData = {
      id: user?._id,
      otp,
    };
    dispatch(verifyOTPData(otpData));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center text-center p-10 shadow-xl border border-2 border-green-500">
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputStyle="w-[50px]"
          inputType="number"
          renderSeparator={<span className="mx-2 text-xl">-</span>}
          renderInput={(props) => (
            <input
              {...props}
              className="min-w-[60px] text-center h-[50px] border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        <div className="flex justify-end items-center gap-3">
          <button
            onClick={() => setOtp("")}
            className={`mt-4 ${
              otp ? "hover:bg-red-700  bg-red-600" : "bg-gray-600"
            } cursor-pointer  px-6 py-2 text-white font-semibold rounded-md `}
          >
            Clear
          </button>
          <button
            disabled={otp.length != 5}
            onClick={handleOTP}
            className={`mt-4 px-6 py-2 ${
              otp.length == 5 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-600"
            }  text-white font-semibold rounded-md `}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}
