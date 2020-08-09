import React from 'react'
import Character from './Character'

const CharacterGrid = ({characters, isLoading}) => {
    return isLoading ?(<h1>Loading...</h1>):(<section className="cards">
        {characters.map(character => (
            <Character key={character.char_id} character={character}></Character>
        ))}
    </section>)
}

export default CharacterGrid
