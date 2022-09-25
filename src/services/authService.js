import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/auth";

export const register = async (userForRegister) => {
  const { data } = await axios.post(url + "/register", userForRegister);
  return data;
};

export const login = async (userForLogin) => {
  const { data } = await axios.post(url + "/login", userForLogin);
  return data;
};
