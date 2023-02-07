import './App.css';
import Header from './components/header';
import CardList from './components/cardList';
import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const [user, setUser] = useState({})

  useEffect(() => {
      fetch('https://api.react-learning.ru/v2/:groupId/users/me', {
  headers: {
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }
  })
  .then(res => res.json())
  .then((result) => {
      setUser(result)
  });
  }, [])
  
  return (
    <div className="App">
      <div className="main">
        <header>
          <Header setSearchQuery={setSearchQuery} user={user}></Header>
        </header>

        <div className="cards">
          <CardList searchQuery={searchQuery} user={user}></CardList>
        </div>
      </div>
    </div>
  );
}

export default App;
