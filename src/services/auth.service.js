import axios from "axios";

const API_URL = "http://localhost:8080/";

const register = (email, password) => {
  return axios.post(API_URL + "backend/database/Users", {
    email,
    password,
  });
};

const login = (Email, password) => {
  return axios
    .post(API_URL + "token-auth/", {
      Email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
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