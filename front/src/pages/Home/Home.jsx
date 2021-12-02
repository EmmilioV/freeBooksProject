import React, { Fragment, useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiBook from "../../Components/Api/ApiBook";
import event from "../../eventsActions";
import CreateBook from "../../Components/books/CreateBook";
import EditBook from "../../Components/books/EditBook";
import DeleteBook from "../../Components/books/DeleteBook";

const Home = () => {
  const {
    state: { books },
    dispatch,
  } = useContext(store);
  const listBooks = books.elements;
  const [contador, setContador] = useState(0)

  useEffect(() => {
    ApiBook.findAll()
      .then((response) => {
        if (response) {
          response.json().then((books) => {
            dispatch(event.findBook(books));
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-4">
        <CreateBook />

        <table className="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">ISBN</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Descripcion</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listBooks.map((element) => (
              <tr key={element.isbn} id={element.isbn}>
                <th scope="row">{element.isbn}</th>
                <td>{element.name}</td>
                <td>{element.author}</td>
                <td>{element.description}</td>
                <td>
                  <a href="/pdf" target="_blank">
                    <button className="btn btn-success">Leer</button>
                  </a>
                </td>
                <td>
                  <EditBook book={element} />
                </td>
                <td>
                  <DeleteBook isbn={element.isbn}/>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
