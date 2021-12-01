import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
      <td><button className="btn btn-secondary mb-4">Agregar Nuevo libro</button></td>
      <table class="table">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td><button className="btn btn-success">Leer</button></td>
            <td><button className="btn btn-primary">Editar</button></td>
            <td><button className="btn btn-danger">Eliminar</button></td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;
