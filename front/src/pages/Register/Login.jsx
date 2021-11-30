import React, {useState} from "react";
import { useForm } from "react-hook-form";
import ApiUser from "../../Components/Api/ApiUser";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.username]: event.target.value,
      });
      setUser({
        ...user,
        [event.target.password]: event.target.value,
      });
    };

    const onSubmit =  async (data, e) =>{
      await ApiUser.findAll()
    }

  return (
    <form className="container mt-5 col-md-5" onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input type="text" className="form-control" id="username" 
        {...register("username", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          onChange={handleChange}/>
        <div className="text-danger">{errors?.username?.message}</div>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input type="password" className="form-control" id="password" 
        {...register("password", {
            required: {
              value: true,
              message: "Campo requerido",
            },
          })}
          onChange={handleChange}/>
        <div className="text-danger">{errors?.password?.message}</div>
      </div>
      <a href="/register">¿Aun no estas registrado?</a>
      <div className="container text-center">
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default Login;
