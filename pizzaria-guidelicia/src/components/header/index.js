import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header center">
        <picture>
          <img src="./assets/Desde1987.png" alt="logo pizzaria" />
        </picture>

        <nav>
          <ul>
            <li>
              <a href="#">Produtos</a>
            </li>

            <li>
              <a href="#">Sobre</a>
            </li>

            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul class="right">
            <li>
              <a href="#">Cadastra-se</a>
            </li>
            <li>
              <a href="#">Entrar</a>
            </li>
          </ul>
        </nav>
      </div>

      
    </header>
  );
};

export default Header;
