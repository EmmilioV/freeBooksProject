import React, { Fragment, useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiBook from "../../Components/Api/ApiBook";
import event from "../../eventsActions";

const Home = () => {
  const {
    state: { books },
    dispatch,
  } = useContext(store);
  const listBooks = books.elements;

  useEffect(() => {
    ApiBook.findAll().then((response) => {
      if (response.ok) {
        response.json().then((books) => {
          dispatch(event.findBook(books))
        });
      }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-4">
        <button className="btn btn-secondary mb-4">Agregar Nuevo libro</button>
        <table className="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">ISBN</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Descripcion</th>
              {/* <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
            {listBooks.map((element) => {
              return (
                <tr key={element.isbn}>
                  <th scope="row">{element.isbn}</th>
                  <td>{element.name}</td>
                  <td>{element.description}</td>
                  <td>{element.author}</td>
                  <td>
                    <button className="btn btn-success">Leer</button>
                  </td>
                  <td>
                    <button className="btn btn-primary">Editar</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
