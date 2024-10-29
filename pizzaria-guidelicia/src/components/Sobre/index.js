import React from 'react';
import './style.css';

const SecaoSobre = () => {
    return (
        <section id="sobre">
            <div className="sobre center">
                <h2>SOBRE NÓS</h2>
                <p>
                    Fundado em 2001, em Caraguatatuba - São Paulo, a pizzaria GuiDelícia
                    iniciou suas atividades focadas em atendimento ao público com mais baixa renda, sempre proporcionando ao cliente um bom 
                    atendimento, qualidade e preço baixo.
                </p>
            </div>

            <div className="elementos-sobre">
                <picture>
                    <img src="./assets/loja.png" alt="Nossa Loja" />
                </picture>
            </div>

            <div className="texto-sobre primeiro-sobre">
                <h4>NOSSAS FILIAIS</h4>
                <p>
                    Hoje temos mais de 10 filiais pelo Brasil
                </p>
            </div>

            <div className="texto-elementos">
                <h4>ATENDIMENTO FLEXÍVEL</h4>
                <p>
                    Nossa equipe é treinada para te atender da melhor forma possível.
                </p>
                <picture>
                    <img src="./assets/atendimento.png" alt="Atendimento" />
                </picture>
            </div>
        </section>
    );
}

export default SecaoSobre;
