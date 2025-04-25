import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após login
import './entrar.css';

const Logar = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    // Carrega o email e a senha do localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');

    if (storedEmail) setEmail(storedEmail);
    if (storedSenha) setSenha(storedSenha);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o carregamento

    console.log('Dados de login antes de enviar:', { email, senha });

    try {
      const response = await fetch(
        'http://localhost:3002/api/authentication/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, senha }), // Ajuste para 'senha'
        }
      );

      // Verificação de resposta
      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();

      console.log('Resposta do servidor:', data); // Verifique a resposta que está sendo retornada

      // Armazenando os dados no localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);
      localStorage.setItem('token', data.token); // Armazena o token
      localStorage.setItem('nome', data.nome); // Salva o nome, caso queira usar

      // Navega para a página de Produtos
      navigate('/Produtos');

      console.log('Login bem-sucedido:', data);
    } catch (error) {
      setError(error.message);
      console.error('Erro ao fazer login:', error);
    } finally {
      setLoading(false); // Desativa o carregamento
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        {/* <a href="#" className="Esenha">Esqueci minha senha!</a> */}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Logar;
