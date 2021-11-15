import React,{useEffect,useState} from 'react'
import {getItems} from '../../../getItems'
import Item from './Item/Item.jsx'
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
// import ItemDetailContainer from './Item/ItemDetailContainer/ItemDetailContainer'
import './ItemList.css'

function ItemList() {
    const [itemList, setItemList] = useState([]) // estado inicial array itemList vacio
    const {categoryId}= useParams()
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(true)
        if (categoryId===undefined){
            
            getItems() // simulacion de carga de todos productos
            .then((resp)=> setItemList(resp)) 
            setLoading(false) 
        }else{
            getItems() // simulacion de carga de todos productos
            .then((resp)=> setItemList(resp.filter(item=>item.categoria===categoryId))) // filtra por categoria
            setLoading(false)   
        }
    }, [categoryId])

    return(
        
        <div className="row">
            {loading && <Spinner animation="border" variant="secondary" /> /*loading*/ } 
            {!loading &&itemList.map((item) => (   //recorro los objetos dentro de mi estado "itemList" y para cada objeto lo ingreso en compoente Item
                <div className="col-sm-6 col-lg-3 col-12">
                    <Item key={item.id} prodData= {item}/>
                </div>
            ))} 
        </div>
        
        )
    
    
    
}


export default ItemList
