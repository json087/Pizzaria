import React from "react";
import './style.css';

const Produtos = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="produtos">
      <h1>NOSSOS PRODUTOS</h1>
      <h2 className="propaganda">
      Trabalhamos com pizzas artesanais, preparadas com ingredientes frescos e selecionados. Nossa especialidade são as 
      pizzas clássicas e de sabores exclusivos, feitas com massa fininha e crocante. Todos os nossos preços são super acessíveis 
      e garantimos a melhor qualidade no sabor! Venha experimentar a pizza dos seus sonhos!
      </h2>

    <br></br>
    <br></br>
      <div className="carros-antigos">
    
        <div className="carro">
          <img src="./assets/pizza_portuguesa.png" alt="Pizza de Portugesa" />
          <span>Pizza Portugesa</span>
          <br></br>
          <h3 className="descricao">A pizza portuguesa é composta por molho de tomate, queijo mussarela, presunto, 
            linguiça calabresa, ovos cozidos, azeitonas, pimentões e cebolas. Essa combinação 
            resulta em uma pizza saborosa e com um equilíbrio de sabores salgados e defumados.
            </h3>
        </div>

        <div className="carro">
          <img src="./assets/pizza_frango.png" alt="Pizza de Frango" />
          <span>Pizza Frango com Catupiry</span>
          <br></br>
          <h3 className="descricao">
          A Pizza Frango com Catupiry é feita com massa de pizza, molho de tomate, queijo mussarela, 
          frango desfiado temperado e uma generosa camada de Catupiry, o requeijão cremoso. O frango é preparado 
          com temperos que realçam seu sabor, enquanto o Catupiry adiciona uma textura cremosa e suave, criando uma 
          combinação deliciosa e equilibrada.
          </h3>
        </div>

        <div className="carro">
          <img src="./assets/pizza_brigadeiro.png" alt="Pizza de Calabresa" />
          <span>Pizza de Brigadeiro</span>
          <br></br>
          <h3 className="descricao">
          A pizza de brigadeiro é uma sobremesa feita com massa de pizza doce, coberta com brigadeiro cremoso e, 
          às vezes, decorada com granulado, raspas de chocolate ou frutas. É uma combinação deliciosa de crocância e 
          sabor intenso de chocolate.
          </h3>
        </div>


        <div className="carro">
          <img src="./assets/pizza_romeuejulieta.png" alt="Pizza de Romeu e Julieta" />
          <span>pizza de Romeu e Julieta</span>
          <br></br>
          <h3 className="descricao">
          A pizza de Romeu e Julieta é uma combinação deliciosa de queijo mussarela, molho de tomate e pedaços de goiabada. 
          O sabor suave e salgado do queijo se mistura com a doçura da goiabada, criando um contraste único e irresistível. 
          É uma opção perfeita para quem gosta de sabores inusitados, onde o doce e o salgado se complementam de maneira harmônica.
          </h3>
>>>>>>> 0295111149e30fa9b2d98fe5b007d49d04726a15
        </div>
      </div>
    </div>
  );
}

export default Produtos;
