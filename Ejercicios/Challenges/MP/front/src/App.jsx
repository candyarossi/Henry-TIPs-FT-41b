import "./App.css";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/payment/success" element={<h2>Pago exitoso</h2>} />
      </Routes>
    </>
  );
}

export default App;
