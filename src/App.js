import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/ui/Header'
import Charactergrid from './components/characters/CharacterGrid'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCharcters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)

      setCharacters(result.data)
      setIsLoading(false)
    }
    fetchCharcters()
  }, [])

  return (
    <div className="container">
      <Header />
      <Charactergrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
