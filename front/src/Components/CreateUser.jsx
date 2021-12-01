/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";

const CreateUser = () => {

  const onSubmit = () =>{
    
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Agregar un nuevo libro
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Ingrese los datos para el nuevo libro
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label for="isbn" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                placeholder="Ingrese el ISBN"
              />
              <label for="name" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingrese el nombre del libro"
              />
              <label for="description" className="form-label">
                Descripcion
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Ingrese una breve descripción"
              />
              <label for="author" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Ingrese el autor del libro"
              />
              <label for="path" className="form-label">Ruta del libro</label>
              {/* <input
                type="file"
                className="form-control"
                id="path"
                onChange={event =>{
                  console.log(event.target.files)
                }}
              /> */}
              <input
                type="text"
                className="form-control"
                id="path"
                placeholder="Ingrese la ruta del libro"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Salir
              </button>
              <button type="button" className="btn btn-primary" onClick={onSubmit}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateUser;
