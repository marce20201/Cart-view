import { productos } from "./productos";
const items= productos // defino items igual al array contenido en el archivo importado productos.js 
        const task = new Promise((resuelto, rechazado)=>{
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                    resuelto(items)
                    
                },2000)
            }else{
                rechazado('rechazado')
            }
    
        }) 
    
    export const getItems=()=>{
        return(task)
    }