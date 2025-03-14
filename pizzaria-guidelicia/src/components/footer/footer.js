import React from 'react';

const Footer = () => {
  return(
    <footer style={{backgroundColor: '#D9D9D9', padding: '30px', color: '#fff', fontFamily: 'Arial, sans-serif'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
        {/* Logo e informações principais */}
        <div>
          <img src="logo.png" alt="Logo Pizzaria" style={{width: '120px', height: 'auto', marginBottom: '10px'}} />
          <p style={{fontSize: '16px', color: '#2D6A4F'}}>A melhor pizza da cidade, feita com ingredientes frescos e muito amor!</p>
        </div>
        
        {/* Links de navegação */}
        <div>
          <h4 style={{color: '#D32F2F'}}>Navegação</h4>
          <ul style={{listStyleType: 'none', padding: 0}}>
            <li><a href="#home" style={{color: '#2D6A4F', textDecoration: 'none'}}>Início</a></li>
            <li><a href="#menu" style={{color: '#2D6A4F', textDecoration: 'none'}}>Cardápio</a></li>
            <li><a href="#about" style={{color: '#2D6A4F', textDecoration: 'none'}}>Sobre</a></li>
            <li><a href="#contact" style={{color: '#2D6A4F', textDecoration: 'none'}}>Contato</a></li>
          </ul>
        </div>
        
        {/* Redes sociais */}
        <div>
          <h4 style={{color: '#D32F2F'}}>Siga-nos</h4>
          <div style={{display: 'flex', gap: '10px'}}>
            <a href="https://www.instagram.com" style={{color: '#2D6A4F', textDecoration: 'none', fontSize: '24px'}}>Instagram</a>
            <a href="https://www.facebook.com" style={{color: '#2D6A4F', textDecoration: 'none', fontSize: '24px'}}>Facebook</a>
            <a href="https://www.twitter.com" style={{color: '#2D6A4F', textDecoration: 'none', fontSize: '24px'}}>Twitter</a>
          </div>
        </div>
      </div>
        
      {/* Copyright */}
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <p style={{fontSize: '14px', color: '#2D6A4F'}}>&copy; 2025 Pizzaria Deliciosa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
