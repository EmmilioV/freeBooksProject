import React, { Fragment, useContext, useEffect, useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store";
import ApiBook from "../../Components/Api/ApiBook";
import event from "../../eventsActions";
import ReadBook from "../../Components/books/ReadBook"
import CreateBook from "../../Components/books/CreateBook";
import EditBook from "../../Components/books/EditBook";
import DeleteBook from "../../Components/books/DeleteBook";
import Cookies from "js-cookie";

//Muestra los libros
const Home = () => {
  const {state: { books},dispatch} = useContext(store);
  const listBooks = books.elements;
  const isAdmin = Cookies.get("admin");
  const idUser = Cookies.get("id");
  const [bookSearch, setBookSearch] = useState("")

  console.log(idUser);

  //Hace el llamados de los libros para mostrarlos
  useEffect(() => {
    ApiBook.findAll()
      .then((response) => {
        if (response.ok) {
          response.json().then((books) => {
            dispatch(event.findBook(books));
          });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  }, [dispatch]);

  //Asigna una busqueda a la variable para mostrar en pantalla
  const onSearch = (book, event) =>{
    if(event.target.value !== ""){
      setBookSearch(book)
      return
    }
    setBookSearch("")
  }

  //Valida que si esta logeado se muestre la información

  return (
    <Fragment>
      {idUser ?
      <div>
        <Navbar onSearch={onSearch}/>
      <div className="container mt-4">

{/* Valida si es admin para mostrar los botones de modificacion */}
        {isAdmin === "true" ?
        <CreateBook />: <div></div>}

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
            {/* Valida si hay algo de la variable de busqueda para mostrar el resultado */}
            {bookSearch.length === 0 ?
            listBooks.map((element) => (
              <tr key={element.isbn} id={element.isbn}>
                <th scope="row">{element.isbn}</th>
                <td>{element.name}</td>
                <td>{element.author}</td>
                <td>{element.description}</td>
                <td>
                  <ReadBook path={element.path}/>
                </td>
                <td>
                  {isAdmin === "true" ?
                  <EditBook book={element} />: <div></div>}
                </td>
                <td>
                  {isAdmin === "true" ?
                  <DeleteBook isbn={element.isbn}/>: <div></div>}
                </td>
              </tr>

            )): 
              bookSearch.map((element) =>(
                <tr key={element.isbn}>
                <th scope="row">{element.isbn}</th>
                <td>{element.name}</td>
                <td>{element.author}</td>
                <td>{element.description}</td>
                <td>
                  <ReadBook path={element.path}/>
                </td>
                <td>
                  {isAdmin === "true" ?
                  <EditBook book={element} />: <div></div>}
                </td>
                <td>
                  {isAdmin === "true" ?
                  <DeleteBook isbn={element.isbn}/>: <div></div>}
                </td>
              </tr>
              ))

            }  
          </tbody>
        </table>
      </div>
      </div>: <h1>No se ha logeado</h1>
      }
    </Fragment>
  );
};

export default Home;
