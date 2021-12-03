import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PDFReader from "../Components/toReadPDF/PDFReader";
import Home from "./Home/Home";
import Login from "./Register/Login";
import Register from "./Register/Register";
import AdministratorUsers from "./Users/AdministratorUsers";

const Rutas = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<AdministratorUsers />} />
        </Routes>
        <Routes>
          <Route exact path="/readbook/:bookpath" element={<PDFReader />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default Rutas;
