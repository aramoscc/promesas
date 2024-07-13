import { useRef, useState } from "react"


export const Product = ({product, addToCarrito, mostrarCarrito}) => {

    const [textoAdd, setTextoAdd] = useState(false)

    const {title, price, category, description, image} = product  

    return(
        <div className="Producto">
            <h3 className="Producto-titulo">{title}</h3>
            <p className="Producto-categoria">Categoria : {category}</p>
            <p className="Producto-descripcion">{description}</p>
            <img src={image} alt="Imagen" className="Producto-img" />
            <p className="Producto-precio">Precio {price}$</p>
            {!mostrarCarrito && <button onClick={() => {
                    addToCarrito(product)
                    setTextoAdd(true)
                }} className="Boton-compra">Añadir al carrito</button>}
            {textoAdd && <p className="Producto-p" >Se ha añadido correctamente</p>}
        </div>
    )
}