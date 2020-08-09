import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/ui/Header'
import Charactergrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchCharcters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`)


      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchCharcters()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(ask) => setQuery(ask)} />
      <Charactergrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
