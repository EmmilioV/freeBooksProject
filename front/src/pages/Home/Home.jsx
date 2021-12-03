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
import { Link } from "react-router-dom";

const Home = () => {
  const {state: { books},dispatch} = useContext(store);
  const listBooks = books.elements;
  const isAdmin = Cookies.get("admin");
  const [bookSearch, setBookSearch] = useState("")

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

  const onSearch = (book, event) =>{
    if(event.target.value !== ""){
      setBookSearch(book)
      return
    }
    setBookSearch("")
  }

  return (
    <Fragment>
      <Navbar onSearch={onSearch}/>
      <div className="container mt-4">

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
                  <a href={`/${element.path}`} target="_blank">
                    <button className="btn btn-success" onClick={<ReadBook bookPath={element.path}/>}>Leer</button>
                  </a>
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
    </Fragment>
  );
};

export default Home;
