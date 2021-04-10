import axios from "axios";

const API_URL = "http://localhost:8000/";

const register = (Email, Password) => {
  return axios.post(API_URL + "backend/database/Users", {
    email: Email,
    password: Password,
  });
};

const login = (Email, Password) => {
  return axios
    .post(API_URL + "token-auth/", {
      email: Email,
      password: Password,
    })
    .then((response) => {
      if (response.data.token) {
        console.log(response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};