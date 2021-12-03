import React, { Fragment, useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiUser from "../../Components/Api/ApiUser";
import event from "../../eventsActions";
import Cookies from "js-cookie";

//Se encarga de la administracion de los usuarios
const AdministratorUsers = () => {
  const {
    state: { users },
    dispatch,
  } = useContext(store);
  const listUsers = users.elements;

  const idAdmin = Cookies.get("id");
  const isAdmin = Cookies.get("admin");
  
  //Es el método get de los usuarios para mostrarlos
  useEffect(() => {
    ApiUser.findAll(idAdmin)
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            if (user.isSuccess) {
              dispatch(event.findUser(user.result));
            }
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  }, [dispatch]);

  //Modifica los permisos de administración del usuario
  const onEdit = (even, user) => {
    user.admin = even.target.checked;
    const request = {
      id: user.id,
      admin: user.admin,
      username: user.username,
      password: user.password,
    };

    ApiUser.update(idAdmin, request)
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            if (user.isSuccess) {
              dispatch(event.updateUser(user.id, user));
            }
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  //Imprime la pagina validando si es admin
  return (
    <Fragment>
      {isAdmin === "true" ?
        <div>
          <Navbar />
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Id</th>
                  <th scope="col">Nombre de usuario</th>
                  <th scope="col">Admin</th>
                </tr>
              </thead>
              <tbody>
                {listUsers.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.username}</td>
                      <td>
                        <input
                          type="checkbox"
                          defaultChecked={element.admin}
                          onClick={(even) => {
                            onEdit(even, element);
                          }}
                        ></input>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>: <h1>No tiene permiso para estar aqui</h1>}
    </Fragment>
  );
};

export default AdministratorUsers;
