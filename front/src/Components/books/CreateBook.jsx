import React, { Fragment, useContext, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ApiBook from "../Api/ApiBook";
import store from "../../store";
import event from "../../eventsActions";

const CreateBook = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const formRef = useRef(null);
  const { dispatch } = useContext(store);
  const [isbn, setIsbn] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [path, setPath] = useState("");

  const onCreate = (even) => {
    ApiBook.save({
      isbn: isbn,
      name: name,
      description: description,
      author: author,
      path: path,
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((newBook) => {
            dispatch(event.saveBook(newBook));
            formRef.current.reset();
            setIsbn("");
            setName("");
            setDescription("");
            setAuthor("");
            setPath("");
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div>
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
        tabIndex="-1"
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

            <form ref={formRef} onSubmit={handleSubmit(onCreate)}>
              <div className="modal-body">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  placeholder="Ingrese el ISBN"
                  {...register("isbn", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                  onChange={(e) => {
                    setIsbn(e.target.value);
                  }}
                />
                <div className="text-danger">{errors?.isbn?.message}</div>
                <label htmlFor="name" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
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
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
