import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import SecaoCapa from "./components/SecaoCapa";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Comprar from "./components/Comprar"; // Certifique-se que o arquivo existe
import Create from "./components/createcheck"; // Certifique-se que o arquivo existe
import Logar from "./components/entrar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rota principal */}
          <Route
            path="/"
            element={
              <>
                <SecaoCapa />
                <Produtos />
                <Sobre />
              </>
            }
          />
          
          {/* Rota para criar conta */}
          <Route path="/createcheck" element={<Create />} />
          <Route path="/entrar" element={<Logar />}/>
          {/* Rota para comprar */}
          <Route path="/Comprar" element={<Comprar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
