import { useEffect, useState } from "react"
import { User } from "./User"

export const UserMain = () => {

    const [ user, setUser ] = useState({})
    const [ pokemonId , setPokemonId ] = useState(1)

    const {VITE_API} = import.meta.env

    const getUser = async () => {

        const controller = new AbortController()

        const options = {
            signal : controller.signal
        }

        await fetch(VITE_API, options)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
        .finally(() => controller.abort())

    }

    useEffect(() => {

        getUser()

    } , [pokemonId])

    return(
        <div className="Users">

            <div className="Users-header">
                <h1 className="Users-title">RANDOM USER GENERATOR</h1>
                <p className="Users-p">Generate a random user</p>
            </div>
            
            {Object.keys(user).length != 0 && <User user={user} pokemonId={pokemonId} setPokemonId={setPokemonId}/>}

        </div>
    )

} 