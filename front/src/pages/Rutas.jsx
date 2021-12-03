import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Register/Login";
import Register from "./Register/Register";
import AdministratorUsers from "./Users/AdministratorUsers";            
import Pdf from "./pdf";

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
          <Route exact path="/pdf" element={<Pdf />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default Rutas;
