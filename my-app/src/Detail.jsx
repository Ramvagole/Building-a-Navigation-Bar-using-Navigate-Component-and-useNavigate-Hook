import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { data } from "./Context"
export function Detail(){
    let f=useParams()
    let {b,detail}=useContext(data)
    useEffect(()=>{
        detail(f.id)
    },[])
    return(
        <>
        <div>
            <div>
                <img src={b.image} />
            </div>
            <h5>Brand:{b.brand}</h5>
            <h5>Title:{b.title}</h5>
            <h5>Category:{b.category}</h5>
            <h5>Price:{b.price}</h5>
        </div> 
        </>
    )
}