import React, {useState, useEffect, useContext} from "react";
import { useForm } from "react-hook-form";
import ApiUser from "../../Components/Api/ApiUser";
import event from "../../eventsActions";
import store from "../../store";
import Cookies from "universal-cookie"

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const cookies = new Cookies()
    const [accessDenied, setAccessDenied] = useState(false) 

    const onSubmit = () =>{
      ApiUser.login({username:username, password:password}).then((response)=>{
        if(response.ok){
          response.json().then((user) =>{
            if (user.isSuccess) {
              cookies.set("id", user.result.id, {path:"/"})
              window.location.href = "/home"
            }
            setAccessDenied(true)
          })
        }
      })
      .catch((response) =>{
        console.log(response)
      })
    
    }

  return (
    <form className="container mt-5 col-md-5" onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input type="text" className="form-control" id="username" 
        placeholder="Ingrese el usuario"
        {...register("username", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          onChange={(e) =>{setUsername(e.target.value)}}/>
        <div className="text-danger">{errors?.username?.message}</div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input type="password" className="form-control" id="password" 
        placeholder="Ingrese la contraseña"
        {...register("password", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength:{
              value: 8,
              message: "La contraseña debe ser mayor de 8 caracteres"
            }
          })}
          onChange={(e) =>{setPassword(e.target.value)}}/>
        <div className="text-danger">{errors?.password?.message}</div>
      </div>
      <a href="/register">¿Aun no estas registrado?</a>
      <div className="container text-center">
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </div>
      {accessDenied === true && <h5 className="text-center mt-4 text-danger">Usuario o contraseña invalido</h5>} 
    </form>
  );
};

export default Login;
