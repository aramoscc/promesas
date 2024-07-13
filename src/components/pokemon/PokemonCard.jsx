import {v4 as uuidv4} from 'uuid'

export const PokemonCard = ({pokemon}) => {

    const {name, height, weight, base_experience, abilities, types} = pokemon

    return(
        <>
            <div className="Pokemon">
                <h3 className="Pokemon-h3">{name}</h3>
                <p className="Pokemon-xp">Experiencia base : {base_experience}</p>
                <p className="Pokemon-altura">Altura : {height}m</p>
                <p className="Pokemon-peso">Peso : {weight}kg</p>
                <p className="Pokemon-habilidades">Habilidades:</p>
                {abilities?.lenght != 0 && abilities?.map(habilidad => 
                    <p className="Pokemon-habilidad" key={uuidv4()}>{habilidad.ability.name}</p>
                )}
                <p className="Pokemon-habilidades">Tipos:</p>
                {types?.lenght != 0 && types?.map(tipo => 
                    <p className="Pokemon-habilidad" key={uuidv4()}>{tipo.type.name}</p>
                )}
            </div>
        </>
    )

}