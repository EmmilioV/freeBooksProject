import React, { Fragment, useState } from "react";
import logo from "../../Img/book.png";
import Cookies from "js-cookie";
import ApiBook from "../Api/ApiBook";

//Es la barra de navegación
const Navbar = (props) => {

  const [nameBook, setNameBook] = useState("")
  const isAdmin = Cookies.get("admin");

  //Hace la consulta del libro al escribir en la barra de busqueda y envia los datos al home
  const search = (event) => {
    setNameBook(event.target.value)
    ApiBook.findByCriteria(nameBook).then((response) =>{
      if (response.ok) {
        response.json().then((book) => {
          props.onSearch(book, event)
        });
      }
    })
  }

  //Elimina los cookies del usuario cargados en el login al darle en Salir
  const deleteCookie = () => {
    let now = new Date (0); 
    let expireTime = now.getTime(); 
    now.setTime(expireTime); 
    document.cookie =document.cookie+';expires='+now.toUTCString()+';path=/';   
    document.cookie =document.cookie+';expires='+now.toUTCString()+';path=/';   
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={logo} alt="" width="50" height="50" />
            FreeBooksProject
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Inicio
                </a>
              </li>
              {/* Valida si es admin para mostrar el boton de administracion de usuarios */}
              {isAdmin === "true" ? 
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/users"
                >
                  Administrar usuarios
                </a>
              </li>: <div></div>}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={deleteCookie}
                >
                  Salir
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ingrese el libro"
                onChange={search}
              />
              <button className="btn btn-outline-success" type="button" onClick={search}>
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
