import React, { Fragment, useContext } from "react";
import ApiBook from "../Api/ApiBook";
import store from "../../store";
import event from "../../eventsActions";

const DeleteBook = (props) => {

  const { dispatch } = useContext(store);
  const isbn = props.isbn

    const onDelete = () => {
      ApiBook.delete(isbn).then((response) => {
        if(response.ok) {
            dispatch(event.DeleteBook(isbn));
          }
        })
        .catch((response) => {
          console.log(response);
        });
     
    }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Eliminar
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Está seguro que quiere eliminar?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Volver
              </button>
              <button type="button" onClick={onDelete} className="btn btn-danger" data-bs-dismiss="modal">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteBook;
