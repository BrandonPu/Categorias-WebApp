import { useState } from "react"
 
//Functional component
export const GifApp = () => {
 
    //hook = useState = renderizar un componente cuando haya un cambio en su valor
    const [categorias, setCategorias] = useState([])
 
    const reqCategorias = async() => {
        await fetch(`http://localhost:8085/categorias`).then((resp)=> {
            resp.json().then((data)=>{
                setCategorias(data)
            })
        }).catch(console.warn)
    }
 
    console.log(categorias)
 
    return (
        //fragment
        <>
                <button onClick={reqCategorias}>Cargar Categorias</button>
            <ul>
            {
                categorias.map(({id, nombreCategoria})=>(
                    <li>{`ID: ${id} Nombre:${nombreCategoria}`}</li>
                ))
            }
            </ul>
        </>
    )
}