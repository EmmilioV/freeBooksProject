
const HOST_API = "http://localhost:3001/"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findAll: async (id) =>{
        return fetch(HOST_API+ "usuarios").catch((error) =>
            console.error("Error: ", error)
        )
    },
    save: async (id, request) => {
        return fetch(HOST_API, {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((error) => console.error("Error:", error));
      },
    
      update: async (id, request) => {
        return fetch(HOST_API+ id, {
          method: "PUT",
          body: JSON.stringify(request),
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((error) => console.error("Error:", error));
      },
    
      delete: async (id) => {
        return fetch(HOST_API+ id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((error) => console.error("Error:", error));
      }
}