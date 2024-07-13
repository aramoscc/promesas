import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"

export const Pokemon = ({pokemonId}) => {

    const [pokemon, setPokemon] = useState({})

    const pedirPokemon = async () => {

        const controller = new AbortController()

        const options = {
            signal : controller.signal
        }

        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, options)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(err => console.log(err))
        .finally(() => controller.abort())

    }   

    useEffect(() => {

        pedirPokemon()

    } , [pokemonId])

    return(
        <>
            {pokemon.lenght == 0 && <p>No hay pokemons</p>}
            {pokemon.lenght != 0 && <PokemonCard pokemon={pokemon} />}
        </>
    )

}

