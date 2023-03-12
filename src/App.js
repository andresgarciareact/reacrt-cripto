import "./App.css";
import Navbarapp from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom"
import InicioApp from "./components/Inicio/inicio";
import CriptoApp from "./components/Cripto/Cripto";
import Search from "./components/SearchCripto/Search";
import TopCripto from "./components/TopCripto/TopCripto";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Navbarapp />}>
          <Route path="/" element={<InicioApp />}></Route>
          <Route path="/inicio" element={<InicioApp />}></Route>
          <Route path="/cripto" element={<CriptoApp />}></Route>
          <Route path="/top" element={<TopCripto />}></Route>
          <Route path="/mercado" element={<Search />}></Route>
        </Route>
      </Routes>
  </div>
  );
}

export default App;
