import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import AdministratorUsers from "./pages/Users/AdministratorUsers";
import { StoreProvider } from "./store";
import Pdf from "./pages/pdf"

function App() {
  return (
    <StoreProvider>
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
          <Route exact path="/pdf" element={<Pdf/>} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
