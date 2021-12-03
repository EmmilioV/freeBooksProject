/* eslint-disable import/no-anonymous-default-export */

const HOST_API = "http://localhost:8080/api/";

export default {
  findAll: async () => {
    return fetch(HOST_API + "books").catch((error) =>
      console.error("Error: ", error)
    );
  },
  findByCriteria: async (criteria) => {
    return fetch(HOST_API + "books/"+ criteria).catch((error) =>
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

  update: async (isbn, request) => {
    return fetch(HOST_API + "idAdmin/book/"+ isbn, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
  delete: async (isbn) => {
    return fetch(HOST_API + "idAdmin/book/"+ isbn, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
};