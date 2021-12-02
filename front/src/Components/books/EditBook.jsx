import React, { Fragment, useContext, useState } from "react";
import store from "../../store";
import ApiBook from "../../Components/Api/ApiBook";
import event from "../../eventsActions";
import { useForm } from "react-hook-form";

const EditBook = (props) => {
  const { dispatch } = useContext(store);
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [isbn, setIsbn] = useState(props.element.isbn);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [path, setPath] = useState("");

//   console.log(isbn);

  const onEdit = (isbn) => {
      console.log(isbn);
    // ApiBook.delete(isbn)
    //   .then((response) => {
    //     if (response.ok) {
    //       dispatch(event.deleteBook(isbn));
    //     }
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target="#editBook"
      >
        Editar
      </button>

      <div
        className="modal fade"
        id="editBook"
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

            <form>
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
                <button type="button" onClick={onEdit} className="btn btn-primary">
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
