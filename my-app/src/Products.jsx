import { useContext, useEffect, useState } from "react";
import { data } from "./Context";
import { Link, useNavigate } from "react-router-dom";
export function Product(){

    let {a,sweg}=useContext(data)
    let navigat=useNavigate()
    function goTo(){
        navigat("/about")
    }
    return(
        <>
        <br></br>
        <button onClick={goTo}>Go to About</button>
        <br></br>
        <select onChange={sweg}>
            <option value="All">All</option>
            <option value="men">Men</option>
            <option value="women">women</option>
            <option value="kids">Kids</option>
            <option value="homedecor">homedecor</option>
        </select><br></br>
        {
            a.map((v,i)=>{
                return(
                    <div key={i} style={{border:"1px solid black",marginTop:"25px"}}>
                        <Link to={`/product/${v.id}`}>
                            <div>
                                    <div>
                                        <img src={v.image} />
                                    </div>
                                    <h5>Brand:{v.brand}</h5>
                                    <h5>Title:{v.title}</h5>
                                    <h5>Category:{v.category}</h5>
                                    <h5>Price:{v.price}</h5>
                            </div>                    
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}