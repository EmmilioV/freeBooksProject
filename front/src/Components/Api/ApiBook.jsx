/* eslint-disable import/no-anonymous-default-export */
const HOST_API = "http://localhost:8080/api/";

export default {
  findAll: async () => {
    return fetch(HOST_API + "books").catch((error) =>
      console.error("Error: ", error)
    );
  },
  save: async (request) => {
    return fetch(HOST_API+ "idAdmin/book", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },

  update: async (id, request) => {
    return fetch(HOST_API + "idAdmin/book"+ id, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },

  delete: async (id) => {
    return fetch(HOST_API + "idAdmin/book/"+ id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
};