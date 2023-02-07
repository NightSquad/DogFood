import './App.css';
import Header from './components/header';
import CardList from './components/cardList';

function App() {
  
  return (
    <div className="App">
      <div className="main">
        <header>
          <Header></Header>
        </header>

        <div className="cards">
          <CardList></CardList>
        </div>
      </div>
    </div>
  );
}

export default App;
