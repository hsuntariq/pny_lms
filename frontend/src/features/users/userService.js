import axios from "axios";

const base_url = "http://localhost:3001/api/users";

export const regUser = async (userData) => {
  const response = await axios.post(`${base_url}/register-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
export const logUser = async (userData) => {
  console.log(userData);
  const response = await axios.post(`${base_url}/login-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axios.post(`${base_url}/verify-otp/${otpData.id}`, {
    otp: otpData.otp,
  });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(`${base_url}/get-all-users`);
  return response.data;
};
