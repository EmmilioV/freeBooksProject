import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const saveUser = (e) => {
    console.log()
  };

  return (
    <form className="container mt-5 col-md-5" onSubmit={handleSubmit(saveUser)}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Ingrese un nombre"
          {...register("username", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          
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
        />
        <div className="text-danger">{errors?.password?.message}</div>
      </div>
      <div className="container text-center">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Register;