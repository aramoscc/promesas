import { useEffect, useState } from "react"
import { Product } from "./Product"

export const Shop = () => {

    const [carrito , setCarrito] = useState([])

    const [copiaProducts, setCopiaProducts] = useState([])

    const [products , setProducts] = useState([])

    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    const [mostrarOcultar, setMostrarOcultar] = useState('Mostrar')

    

    const getProducts = async () => {

        const controller = new AbortController()

        const options = {
            signal : controller.signal
        }

        await fetch('https://fakestoreapi.com/products', options)
        .then(res => res.json() )
        .then(data =>{
            setProducts(data)
            setCopiaProducts([...data])
        })
        .catch(err => console.log(err))
        .finally(() => controller.abort())

    }

    const vaciarCarrito = () => {

        setCarrito([])

        setProducts([])

    }

    const addToCarrito = (producto) => {

        setCarrito([...carrito, producto])

    }

    const toggleCarrito = () => {

        if(!mostrarCarrito){

            setMostrarOcultar('Ocultar')

            setMostrarCarrito(true)

            setProducts(carrito)

        }else{

            setMostrarOcultar('Mostrar')

            setMostrarCarrito(false)

            setProducts(copiaProducts)

        }

        

    } 

    useEffect(() => {

        getProducts()

        vaciarCarrito()

    } , [])
    
    return(
        <>
            {/* <h2 className="Shop">Shop</h2> */}
            <div className="Botones">
                <button onClick={toggleCarrito} className="Carrito-boton">{mostrarOcultar} carrito</button>
                {mostrarCarrito && <button onClick={vaciarCarrito} className="Carrito-boton">Vaciar carrito</button>}
            </div>
            <ul className="Productos">
                {products?.length != 0 && products.map(product => 
                    <Product key={product.id} product={product} addToCarrito={addToCarrito} mostrarCarrito={mostrarCarrito} />
                )} 
            </ul>
            
        </>
    )
}

