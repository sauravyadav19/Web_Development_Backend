import Card from "./components/Card"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
export default function App(){

    const [card,setResponse] = useState([])
    useEffect(()=>{
        // Here we are requesting to an address that is not our address ; we are running our frontend on port 5174 even though vite runs on 5173 we are already running backend on that so it goes to next availabe address that is 5174.
        // what does this means ?
        // right now our frontend runs on localhost:5174 but we are requesting localhost:5173 which browser treats as differnt address even though it just the ports are differnt
        // why does this happens ? this is a security mechansim there to protect user so that a malicous site does not endup runnign a malicious script on our behalf to a sever pretending to be us.
        // this is called CORS. and browser is blocking this Cross origin request.
        // to pass this we need to configure our server in a way to make sure that it know to accept request from a differnt address. in this case accept request from our frontedn which runs at port 5174 
         const response = axios.get("http://localhost:5173/api/card")
         .then((response)=>{
            setResponse(response.data.data)
        })
    },[])

    return(
        <div>
            <center><h1>House Targaygren</h1></center>
            <div className="cardMainContainer">
                {card.map((card,index)=>{
                   return <Card title={card.name} img={card.img} info={card.info} key={index}/>
                })}
            </div>
        </div>
    )

}