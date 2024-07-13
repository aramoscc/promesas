

export const Options = ({rellenarTexto, mostrarTienda, mostrarPokemon}) => {

    return(
        <>
            <button onClick={() => rellenarTexto('nombre')} className="Option">Name</button>
            <button onClick={() => rellenarTexto('usuario')} className="Option">User</button>
            <button onClick={() => rellenarTexto('pass')} className="Option">Password</button>
            <button onClick={() => rellenarTexto('correo')} className="Option">E-mail</button>
            <button onClick={() => rellenarTexto('cumple')} className="Option">Birthday</button>
            <button onClick={() => rellenarTexto('direccion')} className="Option">Address</button>
            <button onClick={() => rellenarTexto('ciudad')} className="Option">City</button>
            <button onClick={() => rellenarTexto('estado')} className="Option">State</button>
            <button onClick={() => rellenarTexto('pais')} className="Option">Country</button>
            <button onClick={() => rellenarTexto('telefono')} className="Option">Phone number</button>
            <button onClick={mostrarPokemon}  className="Option">Pokemon</button>
            <button onClick={mostrarTienda} className="Option">Tienda</button>
        </>
    )
}