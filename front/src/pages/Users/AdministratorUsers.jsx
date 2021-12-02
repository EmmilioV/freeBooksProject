/* eslint-disable array-callback-return */
import React, { Fragment, useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiUser from "../../Components/Api/ApiUser";
import event from "../../eventsActions";

const AdministratorUsers = () => {
  const {
    state: { users },
    dispatch,
  } = useContext(store);

  const listUsers = users.elements;

  useEffect(() => {
    ApiUser.findAll().then((response) => {
      if (response.ok) {
        response.json().then((users) => {
          dispatch(event.findUser(users));
        });
      }
    }).catch((response) => {
      console.log(response);
    });
  }, [dispatch]);

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
                  <input
                    type="checkbox"
                    defaultChecked={element.isAdmin}
                  ></input>
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
