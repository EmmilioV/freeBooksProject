import React, {useState, useEffect, useContext} from "react";
import { useForm } from "react-hook-form";
import ApiUser from "../../Components/Api/ApiUser";
import event from "../../eventsActions";
import store from "../../store";
import md5 from "md5"


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const {state:{users}, dispatch} = useContext(store)


    useEffect(() => {
      ApiUser.findAll().then((response) => {
        if (response.ok) {
          response.json().then((users) => {
            dispatch(event.findUser(users));
            console.log("users"+ users);
            console.log("users, elem"+ users.elements);
            console.log("response: "+ response);
          });
        }
      });
      const listUser = users
      console.log("listUser: "+listUser);
      console.log("listUser. elem: "+listUser.element);
      console.log("listUser. elems: "+listUser.elements);
    }, [dispatch]);

    const validateUser = (listUser) => {
      listUser.map((element)=>{
        if (username === element.username && md5(password === element.password)) {
          return element.id
        }
      })
    }

    const login = (verified) => {
      ApiUser.findById(verified).then(response =>{
        console.log(response.data);
      })
      .catch(error =>{
        console.log(error);
      })
    }

    const onSubmit = () =>{
      // eslint-disable-next-line array-callback-return
      // const verified = validateUser(listUser)
      // login(verified)
      const listUser = users
      console.log(listUser);
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
          onChange={(e) =>{setUsername(e.target.value)}}/>
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
          onChange={(e) =>{setPassword(e.target.value)}}/>
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
