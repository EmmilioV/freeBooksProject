import React, { Fragment } from "react";
import logo from "../../Img/book.png";

const Navbar = () => {
  
  const deleteCookie = () => {
    let now = new Date (0); 
    let expireTime = now.getTime(); 
    now.setTime(expireTime); 
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/users"
                >
                  Administrar usuarios
                </a>
              </li>
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
              />
              <button className="btn btn-outline-success" type="submit">
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
