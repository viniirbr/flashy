import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header/index';
import Home from './pages/Home/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
