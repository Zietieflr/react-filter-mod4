import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card';

const url = 'https://rickandmortyapi.com/api/character/'

function App() {
  
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const fetchCharacters = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }

  const handleClick = (event) => {
    let filtered = characters.filter(character => character.status === 'Alive')
    setCharacters(filtered)
  }

  const filtered = characters.filter(character => character.name.toLowerCase().includes(search))

  const showCharacters = (characters) => characters.map(character => <Card {...character} key={character.id} />)

  const sortCharacters = () => { 
    setSort(!sort)
    let sorted = [...characters].sort((a,b) => {
      let condition = !sort ? (a.name < b.name) : (a.name > b.name)
      return condition ? -1 : 1
    })
    setCharacters([...sorted])
  }

  useEffect(fetchCharacters, [])
  
  return (
    <div className="App">
      <h1>SEARCH FILTER</h1>
      <button onClick={handleClick}>Alive</button>
      <button onClick={sortCharacters}>A / Z ↕</button>
      <input name='search' value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())}/>
      <ul>
        {showCharacters(filtered)}
      </ul>
    </div>
  );
}

export default App;
