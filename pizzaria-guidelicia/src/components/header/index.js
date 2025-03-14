import React from "react";
import { Link } from "react-router-dom"; // Importando Link
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture>
          <img
            src="./assets/Desde1987.png"
            alt="logo pizzaria"
            width="100px"
            height="100px"
          />
        </picture>

        <nav>
          <ul>
            <li>
              <a href="#linkpdt">Produtos</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <Link to="/createcheck" className="red">
                Cadastre-se
              </Link>
            </li>
            <li>
              <Link to="/login" className="red">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
