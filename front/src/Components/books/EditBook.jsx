/* eslint-disable no-unused-expressions */
import React, { Fragment, useContext, useState } from "react";
import store from "../../store";
import ApiBook from "../../Components/Api/ApiBook";
import event from "../../eventsActions";
import { useForm } from "react-hook-form";

const EditBook = ({ book }) => {
  const { dispatch } = useContext(store);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const idBotonModal = "#editBook" + book.isbn;
  const idModal = "editBook" + book.isbn;

  const isbn = useState(book.isbn);
  const [name, setName] = useState(book.name);
  const [description, setDescription] = useState(book.description);
  const [author, setAuthor] = useState(book.author);
  const [path, setPath] = useState(book.path);

  const onEdit = () => {
    ApiBook.update(isbn, {
      isbn: isbn,
      name: name,
      description: description,
      author: author,
      path: path,
    }).then((response) => {
        if (response.ok) {
          response.json().then((result) =>{
              dispatch(event.updateBook(isbn, result))
          })
        }
      }).catch((response) => {
        console.log(response);
      });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target={idBotonModal}
      >
        Editar
      </button>

      <div
        className="modal fade"
        id={idModal}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Ingrese los nuevos datos
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={handleSubmit(onEdit)}>
              <div className="modal-body">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  value={isbn}
                  disabled
                  placeholder="Ingrese el ISBN"
                />
                <label htmlFor="name" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  placeholder="Ingrese el nombre del libro"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="text-danger">{errors?.name?.message}</div>
                <label htmlFor="description" className="form-label">
                  Descripcion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  placeholder="Ingrese una breve descripción"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <div className="text-danger">
                  {errors?.description?.message}
                </div>
                <label htmlFor="author" className="form-label">
                  Autor
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={author}
                  placeholder="Ingrese el autor del libro"
                  {...register("author", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
                <div className="text-danger">{errors?.author?.message}</div>
                <label htmlFor="path" className="form-label">
                  Ruta del libro
                </label>
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
                  value={path}
                  placeholder="Ingrese la ruta del libro"
                  {...register("path", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setPath(e.target.value);
                  }}
                />
                <div className="text-danger">{errors?.path?.message}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Salir
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;
