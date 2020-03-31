import React, {  useState, useEffect } from 'react'
import {Link} from "react-router-dom"
function Shop(){
           
        useEffect(() =>{
            fetchItems()
            },[])
    
        const [items,setItems] = useState([])

        const fetchItems = async () => {

            const items = [
                {
                    id:1,
                    name: "primeiro",
                    type: true
                },
                {
                    id:2,
                    name: "segundo",
                    type: true
                },
                {
                    id:3,
                    name: "terceito",
                    type: false
                }
            ]
            
            console.log(items)
            setItems(items)
        }
        
      return (
            <div className="Shop">
                {
                  items.map(item =>(
                    <h1 key={item.id}>
                        <Link to ={`/shop/${item.id}`}>{item.name}</Link>
                    </h1>
                  ))  
                }
            </div>
        )
    
}

export default Shop
