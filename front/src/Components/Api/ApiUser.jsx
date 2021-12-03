/* eslint-disable import/no-anonymous-default-export */
const HOST_API = "http://localhost:8080/api/";

export default {
  findAll: async (idAdmin) => {
    return fetch(HOST_API +idAdmin+ "/users").catch((error) =>
      console.error("Error: ", error)
    );
  },
  login: async (request) =>{
    return fetch(HOST_API+"login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }).catch((error) => console.error("Error:", error));
  },
  save: async (request) => {
    return fetch(HOST_API + "login/register", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      }
    }).catch((error) => console.error("Error:", error));
  },
  update: async (idAdmin, request) => {
    return fetch(HOST_API + idAdmin + "/user", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
};
