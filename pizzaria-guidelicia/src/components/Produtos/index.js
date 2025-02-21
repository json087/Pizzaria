import React from "react";
import './style.css';

const Produtos = () => {
  return (
    <div className="produtos-container">
      <div className="product-section">
        <h1 id="linkpdt">NOSSOS PRODUTOS</h1>
        <p>
          Trabalhamos com pizzas artesanais, preparadas com ingredientes frescos e selecionados. Nossa especialidade são as
          pizzas clássicas e de sabores exclusivos, feitas com massa fininha e crocante. Todos os nossos preços são super acessíveis
          e garantimos a melhor qualidade no sabor! Venha experimentar a pizza dos seus sonhos!
        </p>

        <div className="produtos-grid">
          <div className="produto">
            <img src="/assets/pizza_portuguesa.png" alt="Pizza Portuguesa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Portuguesa</h2>
              <p>A pizza portuguesa é composta por molho de tomate, queijo mussarela, presunto, linguiça calabresa, ovos cozidos, azeitonas, pimentões e cebolas.</p>
              <p className="preco">R$ 35,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          <div className="produto">
            <img src="/assets/pizza_frango.png" alt="Pizza Frango com Catupiry" />
            <div className="descricao-e-preco">
              <h2>Pizza Frango com Catupiry</h2>
              <p>A Pizza Frango com Catupiry é feita com massa de pizza, molho de tomate, queijo mussarela, frango desfiado temperado e uma generosa camada de Catupiry.</p>
              <p className="preco">R$ 38,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          <div className="produto">
            <img src="/assets/pizza_calabresa.png" alt="Pizza de Calabresa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Calabresa</h2>
              <p>A pizza de calabresa é feita com molho de tomate, queijo mussarela, e uma camada generosa de calabresa fatiada, criando uma combinação saborosa e picante.</p>
              <p className="preco">R$ 30,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          <div className="produto">
            <img src="/assets/pizza_calabresa.png" alt="Pizza de Calabresa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Calabresa</h2>
              <p>A pizza de calabresa é feita com molho de tomate, queijo mussarela, e uma camada generosa de calabresa fatiada, criando uma combinação saborosa e picante.</p>
              <p className="preco">R$ 30,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          <div className="produto">
            <img src="/assets/pizza_calabresa.png" alt="Pizza de Calabresa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Calabresa</h2>
              <p>A pizza de calabresa é feita com molho de tomate, queijo mussarela, e uma camada generosa de calabresa fatiada, criando uma combinação saborosa e picante.</p>
              <p className="preco">R$ 30,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          <div className="produto">
            <img src="/assets/pizza_calabresa.png" alt="Pizza de Calabresa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Calabresa</h2>
              <p>A pizza de calabresa é feita com molho de tomate, queijo mussarela, e uma camada generosa de calabresa fatiada, criando uma combinação saborosa e picante.</p>
              <p className="preco">R$ 30,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
