import React, { Fragment, useState} from "react";

const DeleteBook = (props) => {

  const [isbn, setIsbn] = useState(props)
  
  const confirmed = () => {
    console.log(isbn);
  }


  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#deleteBook"
      >
        Eliminar
      </button>

      <div
        className="modal fade"
        id="deleteBook"
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
              <button type="button" onClick={confirmed} className="btn btn-danger" data-bs-dismiss="modal">
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
