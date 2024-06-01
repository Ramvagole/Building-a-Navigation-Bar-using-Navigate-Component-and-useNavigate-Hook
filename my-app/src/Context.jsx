import { createContext } from "react"
import { useEffect,useState } from "react"
 

 export let data=createContext()
 export function Context({children}){
    let [b,set]=useState({})
    let [a,setval]=useState([])
    let [group,setAll]=useState([])
    
    function sweg(e){
        let name=e.target.value
        if((name=="All")){
            setval(group)
        }else{
            let c=group.filter((v)=>{
                return (v.category===name)
            })
            console.log(c)
            setval(c)
        }
    }
    function detail(i){
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${i}`).
        then((res)=>res.json()).
        then((res)=>{set(res.data)})
        console.log("hello")
    }
    function fetchData(){
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").
        then((res)=>res.json()).
        then((res)=>{setval(res.data)})
    }
    useEffect(()=>{
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").
        then((res)=>res.json()).
        then((res)=>{setAll(res.data)})
        fetchData()
    },[])
    return(
        <data.Provider value={{a,b,fetchData,detail,sweg}}>
            {children}
        </data.Provider>
    )
 }