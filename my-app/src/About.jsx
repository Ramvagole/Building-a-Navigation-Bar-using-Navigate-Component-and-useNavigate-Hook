import { useNavigate } from "react-router-dom"

export function About(){
    let nav=useNavigate()
    function goHome(){
        nav("/")
    }
    return(
        <>
        <h1>This page is About.jsx file</h1>
        <button onClick={goHome}>Go to Home</button>
        </>
    )
}