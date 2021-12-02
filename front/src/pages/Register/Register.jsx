/* eslint-disable no-implied-eval */

import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import store from "../../store";
import event from "../../eventsActions";
import ApiUser from "../../Components/Api/ApiUser";

const Register = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const {dispatch} = useContext(store);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [nameDenied, setNameDenied] = useState(false);
  const [success, setSuccess] = useState(false);

  const saveNewUser = (even) => {

      ApiUser.save({username:username, password:password}).then((response) => {
        response.json().then((result) => {
          dispatch(event.saveUser(result));
          setNameDenied(false)
          setSuccess(true)
          setTimeout("location.href='http://localhost:3000'", 3000)
        });
      }).catch((response) =>{
        setNameDenied(true)
        console.log(response);
      })
  };

  return (
    <form
      className="container mt-5 col-md-5"
      onSubmit={handleSubmit(saveNewUser)}
    >
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Ingrese un usuario"
          {...register("username", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className="text-danger">{errors?.username?.message}</div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Ingrese una contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 8,
              message: "Debe tener minimo 8 caracteres",
            },
          })}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="text-danger">{errors?.password?.message}</div>
      </div>
      <div>
        <a href="/">Regresar al login</a>
      </div>
      <div className="container text-center">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
      {success === true && (
        <h5 className="text-center mt-5 text-success">
          Registro exitoso. Será redireccionado al login
        </h5>
      )}
      {nameDenied === true && (
        <h5 className="text-center mt-5 text-danger">
          Ya existe un usuario con ese nombre. Intente con otro
        </h5>
      )}
    </form>
  );
};

export default Register;
