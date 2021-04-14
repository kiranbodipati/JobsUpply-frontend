import axios from "axios";

const API_URL = "http://localhost:8000/";

const register = (Email, Password) => {
  return axios.post(API_URL + "backend/database/Users", {
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

const update = (updatedDict) => {
  return axios.put(API_URL + "backend/database/Users", updatedDict)
  .then((response) => {
    if (response.data.email) {
      console.log(response.data.email+" updated.");
      let currUser = JSON.parse(localStorage.getItem("user"));
      currUser.user.name = updatedDict.name;
      currUser.user.university = updatedDict.university;
      currUser.user.major = updatedDict.major;
      currUser.user.minor = [updatedDict.minor];
      localStorage.setItem("user", JSON.stringify(currUser));
    }
    return response.data;
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
  update,
  login,
  logout,
  getCurrentUser,
};