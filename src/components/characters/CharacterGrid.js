import React from 'react'
import Character from './Character'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ characters, isLoading }) => {
    return isLoading ?
        (<Spinner></Spinner>)
        :
        (<section className="cards">
            {characters.map(character => (
                <Character key={character.char_id} character={character}></Character>
            ))}
        </section>)
}

export default CharacterGrid
