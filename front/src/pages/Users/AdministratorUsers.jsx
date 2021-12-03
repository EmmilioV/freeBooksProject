import React, { Fragment, useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiUser from "../../Components/Api/ApiUser";
import event from "../../eventsActions";

const AdministratorUsers = () => {
  const {state: { users }, dispatch} = useContext(store);
  const listUsers = users.elements;
  const valorCookie = document.cookie.split("=")
  const idAdmin = valorCookie[1]

  useEffect(() => {
    ApiUser.findAll(idAdmin).then((response) => {
      if (response.ok) {
        response.json().then((user) =>{
          if (user.isSuccess) {
            dispatch(event.findUser(user.result));
          }
        })
      }
    }).catch((response) => {
      console.log(response);
    });
  }, [dispatch]);

  const onEdit = (even, user) => {

    user.admin = even.target.checked
    const request = {
      id:user.id,
      admin:user.admin,
      username:user.username,
      password:user.password
    }

    ApiUser.update(idAdmin, request).then((response) =>{
      if (response.ok) {
        response.json().then((user) =>{
          if (user.isSuccess) {
            dispatch(event.updateUser(user.id, user));
          }
        })
      }
    }).catch((response) => {
      console.log(response);
    });

  }

  return (
    <Fragment>
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
                  <td><input
                    type="checkbox"
                    defaultChecked={element.admin}
                    onClick={(even) => {onEdit(even, element)}}
                  ></input>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AdministratorUsers;
