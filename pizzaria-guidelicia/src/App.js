import './App.css';
import Header from './components/header';
import SecaoCapa from './components/SecaoCapa';
import Produtos from './components/Produtos';
import SecoaSobre from './components/Sobre'

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
      <SecoaSobre/>
    </div>
  );
}

export default App;

