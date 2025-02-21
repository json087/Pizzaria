import React, { useState } from 'react';
import './style.css';

const SecaoSobre = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="sobre">
            <div className="sobre center">
                <h2>SOBRE NÓS</h2>
                <p>
                    Fundado em 2001, em Caraguatatuba - São Paulo, a pizzaria GuiDelícia
                    iniciou suas atividades focadas em atendimento ao público com mais baixa renda, sempre proporcionando ao cliente um bom 
                    atendimento, qualidade e preço baixo.
                </p>
                <button className="btn-interacao" onClick={() => alert("Descubra mais sobre nós!")} >
                    Saiba Mais
                </button>
            </div>

            <div className="elementos-sobre">
                <picture 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img 
                        src="./assets/loja.png" 
                        alt="Nossa Loja" 
                        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s ease' }}
                    />
                </picture>
            </div>

            <div className="texto-sobre primeiro-sobre">
                <h4>NOSSAS FILIAIS</h4>
                <p>
                    Hoje temos mais de 10 filiais pelo Brasil
                </p>
                <button className="btn-interacao" onClick={() => alert("Veja nossas filiais no mapa!")}>
                    Ver Filiais
                </button>
            </div>

            <div className="texto-elementos">
                <h4>ATENDIMENTO FLEXÍVEL</h4>
                <p>
                    Nossa equipe é treinada para te atender da melhor forma possível.
                </p>
                <picture>
                    <img src="./assets/atendimento.png" alt="Atendimento" />
                </picture>
                <button className="btn-interacao" onClick={() => alert("Entre em contato conosco!")} >
                    Fale Conosco
                </button>
            </div>
        </section>
    );
}

export default SecaoSobre;
