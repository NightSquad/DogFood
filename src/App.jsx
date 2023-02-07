import './App.css';
import Header from './components/header';
import CardList from './components/cardList';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <div className="App">
      <div className="main">
        <header>
          <Header setSearchQuery={setSearchQuery}></Header>
        </header>

        <div className="cards">
          <CardList searchQuery={searchQuery}></CardList>
        </div>
      </div>
    </div>
  );
}

export default App;
