import { useEffect } from "react"
import { useState } from "react"
import {Shop} from './../shop/Shop'
import {Pokemon} from './../pokemon/Pokemon'
import { Options } from "./Options"

export const User = ({user, pokemonId, setPokemonId}) => {

    const {picture : {large}, name, login, email, dob : {date}, location, cell} = user.results[0]

    const {country, state, street, city } = location
    
    const {number, name : streetName} = street

    const {first, last} = name

    const {username, password} = login

    const [text , setText] = useState('')

    const [info , setInfo] = useState('')

    const [tienda, setTienda] = useState(false)

    const [pokemon, setPokemon] = useState(false)

    const changeUser = () => {
        setPokemonId(pokemonId + 1)
    }

    const rellenarTexto = (texto) => {

        switch (texto) {
            case 'nombre':
                setText('Hi, My name is')
                setInfo(`${first} ${last}`)
                break;
            case 'usuario':
                setText('My user name is')
                setInfo(`${username}`)
                break;
            case 'pass':
                setText('My password is')
                setInfo(`${password}`)
                break;
            case 'correo':
                setText('My e-mail is')
                setInfo(`${email}`)
                break; 
            case 'cumple':
                setText('My birthday is')
                setInfo(`${date.slice(0,10)}`)
                break;
            case 'direccion':
                setText('My address is')
                setInfo(`${number} ${streetName}`)
                break;
            case 'ciudad':
                setText('I live in the city of')
                setInfo(`${city}`)
                break;
            case 'estado':
                setText('I live in the state of')
                setInfo(`${state}`)
                break;
            case 'pais':
                setText('I live in the country of')
                setInfo(`${country}`)
                break;
            case 'telefono':
                setText('My phone number is')
                setInfo(`${cell}`)
                break;                                                                                                           
            default:
                break;
        }

    }

    const mostrarTienda = () => {

        if(tienda){
            setTienda(false)
        }else{
            setTienda(true)
            setPokemon(false)
        }

    }

    const mostrarPokemon = () => {

        if(pokemon){
            setPokemon(false)
        }else{
            setPokemon(true)
            setTienda(false)
        }

    }

    useEffect(() => {
        rellenarTexto('nombre')
    } , [user])
    
    return(

        <>

            <div className="User">

                <div className="User-wrapper">
                    <img src={large} alt="Imagen" className="User-img" />
                    <button onClick={changeUser} href="" className="User-new">New</button>
                </div>
                <p className="User-p">{text}</p>
                <p className="User-data">{info}</p>

                <div className="User-options">
                    <Options rellenarTexto={rellenarTexto} mostrarPokemon={mostrarPokemon} mostrarTienda={mostrarTienda}/>
                </div>

            </div>

            {pokemon && <Pokemon pokemonId={pokemonId} />}

            {tienda && <Shop />}

        </>

    )

}

