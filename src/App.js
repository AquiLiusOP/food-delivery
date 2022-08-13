import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Nav from "./components/Nav";
import Register from "./pages/auth/Register";
import Footer from "./components/Footer";
import FoodById from "./pages/Services/FoodById";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FoodById />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
