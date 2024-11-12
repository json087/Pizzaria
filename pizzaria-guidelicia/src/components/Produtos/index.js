import React from "react";
import './style.css';

const Produtos = () => {
  return (
    <div className="produtos-container">
      <h1>NOSSOS PRODUTOS</h1>
      <p>
        Trabalhamos com pizzas artesanais, preparadas com ingredientes frescos e selecionados. Nossa especialidade são as
        pizzas clássicas e de sabores exclusivos, feitas com massa fininha e crocante. Todos os nossos preços são super acessíveis
        e garantimos a melhor qualidade no sabor! Venha experimentar a pizza dos seus sonhos!
      </p>

      <div className="produto">
        <h2>Pizza de Portuguesa</h2>
        <p>
          A pizza portuguesa é composta por molho de tomate, queijo mussarela, presunto, linguiça calabresa, ovos cozidos, azeitonas, pimentões e cebolas. Essa combinação
          resulta em uma pizza saborosa e com um equilíbrio de sabores salgados e defumados.
        </p>
      </div>

      <div className="produto">
        <h2>Pizza Frango com Catupiry</h2>
        <p>
          A Pizza Frango com Catupiry é feita com massa de pizza, molho de tomate, queijo mussarela,
          frango desfiado temperado e uma generosa camada de Catupiry, o requeijão cremoso. O frango é preparado
          com temperos que realçam seu sabor, enquanto o Catupiry adiciona uma textura cremosa e suave, criando uma
          combinação deliciosa e equilibrada.
        </p>
      </div>

      <div className="produto">
        <h2>Pizza de Calabresa</h2>
        <p>
          A pizza de calabresa é feita com molho de tomate, queijo mussarela, e uma camada generosa de calabresa fatiada,
          criando uma combinação saborosa e picante. Ideal para quem gosta de sabores intensos.
        </p>
      </div>

      <div className="produto">
        <h2>Pizza de Brigadeiro</h2>
        <p>
          A pizza de brigadeiro é uma sobremesa feita com massa de pizza doce, coberta com brigadeiro cremoso e,
          às vezes, decorada com granulado, raspas de chocolate ou frutas. É uma combinação deliciosa de crocância e
          sabor intenso de chocolate.
        </p>
      </div>

      <div className="produto">
        <h2>Pizza de Romeu e Julieta</h2>
        <p>
          A pizza de Romeu e Julieta é uma combinação deliciosa de queijo mussarela, molho de tomate e pedaços de goiabada.
          O sabor suave e salgado do queijo se mistura com a doçura da goiabada, criando um contraste único e irresistível.
          É uma opção perfeita para quem gosta de sabores inusitados, onde o doce e o salgado se complementam de maneira harmônica.
        </p>
      </div>
    </div>
  );
}

export default Produtos;
