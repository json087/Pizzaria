import React from "react";
import './style.css';

const Produtos = () => {
  return (
    <div className="produtos-container">
      <div className="product-section">
        <h1 id="linkpdt">NOSSOS PRODUTOS</h1>
        <p>
          Trabalhamos com pizzas artesanais, preparadas com ingredientes frescos
          e selecionados. Nossa especialidade são as pizzas clássicas e de
          sabores exclusivos, feitas com massa fininha e crocante. Todos os
          nossos preços são super acessíveis e garantimos a melhor qualidade no
          sabor! Venha experimentar a pizza dos seus sonhos!
        </p>

        <div className="produtos-grid">
          {/* Pizza Portuguesa */}
          <div className="produto">
            <img src="/assets/pizza_portuguesa.png" alt="Pizza Portuguesa" />
            <div className="descricao-e-preco">
              <h2>Pizza de Portuguesa</h2>
              <p>
                A pizza portuguesa é composta por molho de tomate, queijo
                mussarela, presunto, linguiça calabresa, ovos cozidos,
                azeitonas, pimentões e cebolas.
              </p>
              <p className="preco">R$ 35,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          {/* Pizza Frango com Catupiry */}
          <div className="produto">
            <img
              src="/assets/pizza_frango.png"
              alt="Pizza Frango com Catupiry"
            />
            <div className="descricao-e-preco">
              <h2>Pizza Frango com Catupiry</h2>
              <p>
                Massa de pizza, molho de tomate, queijo mussarela, frango
                desfiado temperado e Catupiry.
              </p>
              <p className="preco">R$ 38,00</p>
              <br></br>
                <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          {/* Pizza Calabresa */}
          <div className="produto">
            <img src="/assets/pizzacalabresa.png" alt="Pizza Calabresa" />
            <div className="descricao-e-preco">
              <h2>Pizza Calabresa</h2>
              <p>
                Massa tradicional com molho de tomate, queijo mussarela,
                calabresa fatiada, cebola, e orégano.
              </p>
              <p className="preco">R$ 36,00</p>
              <br></br>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>


          {/* Pizza margueirta */}
          <div className="produto">
            <img
              src="/assets/pizza_marguerita.jpg"
              alt="Pizza de Margureita"
            />
            <div className="descricao-e-preco">
              <h2>Pizza margueirta</h2>
              <p>
              Massa crocante com molho de tomate, queijo mussarela, tomate fresco e manjericão. Simples, leve e cheia de sabor!
              </p>
              <p className="preco">R$ 35,00</p>
              <br></br>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          {/* Pizza de bauru*/}
          <div className="produto">
            <img
              src="/assets/pizza_bauru.png"
              alt="Pizza de Bauru"
            />
            <div className="descricao-e-preco">
              <h2>Pizza de bauru</h2>
              <p>
              Massa crocante com presunto, queijo mussarela, tomate e orégano. Uma combinação clássica e deliciosa!
              </p>
              <p className="preco">R$ 35,00</p>
              <br></br>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          {/* Pizza de brocolis */}
          <div className="produto">
            <img
              src="/assets/pizza_brocolis.png"
              alt="Pizza de brocolis"
            />
            <div className="descricao-e-preco">
              <h2>Pizza de brocólis</h2>
              <p>
              Massa crocante com brócolis frescos, bacon crocante e cremoso catupiry. Uma mistura saborosa e irresistível!
              </p>
              <p className="preco">R$ 35,00</p>
              <br></br>
              <br></br>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

          {/* Pizza de doce de leite */}
          <div className="produto">
            <img
              src="/assets/pizza_docedeleite.webp"
              alt="Pizza Romeu e Julieta"
            />
            <div className="descricao-e-preco">
              <h2>Pizza de doce de leite com coco</h2>
              <p>
              Uma deliciosa pizza de doce de leite com coco, com massa leve e crocante, coberta por doce de leite cremoso e finalizada com coco 
              ralado, oferecendo uma experiência doce e tropical.
              </p>
              <p className="preco">R$ 35,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>     

           {/* Pizza Romeu e Julieta */}
          <div className="produto">
            <img
              src="/assets/pizza_romeuejulieta.png"
              alt="Pizza Romeu e Julieta"
            />
            <div className="descricao-e-preco">
              <h2>Pizza Romeu e Julieta</h2>
              <p>
                Massa crocante com queijo mussarela e goiabada, criando a
                combinação perfeita entre o salgadinho e o doce. Irresistível!
              </p>
              <p className="preco">R$ 35,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>

            {/* Pizza brigadeiro */}
            <div className="produto">
            <img
              src="/assets/pizza_brigadeiro.png"
              alt="Pizza Romeu e Julieta"
            />
            <div className="descricao-e-preco">
              <h2>Pizza de brigadeiro</h2>
              <p>
                Massa doce com brigadeiro cremoso, coberta com granulado. Uma
                explosão de sabor para os amantes de chocolate!
              </p>
              <p className="preco">R$ 35,00</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
            </div>
    
           
          </div>
        </div>
  );
}

export default Produtos;