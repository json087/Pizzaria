import React from "react";
import './style.css';

const Produtos = () => {
  return (
    <div className="produtos">
      <h1>NOSSOS PRODUTOS</h1>
      <p>
        Trabalhamos com vendas de carros novos e semi-novos, a maioria de nosso estoque é relacionada ao VolksWagen Fusca.
        Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado!
      </p>

      <div className="carros-antigos">
        <h2></h2>
        <div className="carro">
          <img src="./assets/pizza_portuguesa.png" alt="Pizza de Portugesa" />

          <span>xx</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_frango.png" alt="Pizza de Frango" />
          <span>xx</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_clabresa.png" alt="Pizza de Calabresa" />
          <span>xx</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_strogonoff.png" alt="Pizza de Strogonoff" />
          <span>xx</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
