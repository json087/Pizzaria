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
      <h2>Pizza Portugesa </h2>
        <div className="carro">
          <img src="./assets/pizza_portuguesa.png" alt="Pizza de Portugesa" />
          <span>Pizza Portugesa</span>
          <p></p>Deliciosa pizza com:




          <span>xx</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_frango.png" alt="Pizza de Frango" />
          <span>Pizza Frango com Catupiry</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_clabresa.png" alt="Pizza de Calabresa" />
          <span>Pizza de Calabresa</span>
        </div>
        <div className="carro">
          <img src="./assets/pizza_strogonoff.png" alt="Pizza de Strogonoff" />
          <span>pizza de strogonoff</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
