import React,{useEffect , useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import {getItems} from '../../../../../getItems'

import './ItemDetailContainer.css'



function ItemDetailContainer() {
    const [item, setItem]=useState({})
    const {itemId}=useParams()
    useEffect(() => {
        
        if (itemId===undefined){
            
            getItems() // simulacion de carga de todos productos
            .then((resp)=> setItem(resp)) 
        
        }else{
            getItems() // simulacion de carga de todos productos
            .then((resp)=> setItem(resp.filter(item=>item.id===itemId))) // filtra por categoria
    
        }
    }, [itemId])







 

    
    return (
        <>
        <div className='detail-container'>
            <h2 className="detalle-tit">Detalles del Producto Seleccionado</h2>
                <ItemDetail item={item[0]} />  {/*paso mi estado "item" a ItemDetail */}
        </div>
            
        </>
    )
}   

export default ItemDetailContainer
