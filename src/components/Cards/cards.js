import { useNavigate } from "react-router-dom"
import './cards.css'
//import {useState} from 'react'
export default function News(props){
   const Navigate=useNavigate()
    //const [data,setDate]=useState([])
    //const id=5 
    function goto(){
       const value=props.article.name;
    console.log(value)
        Navigate('/add',{state: {id:value}})
       //setDate(props.article.name)
    }
   return(
    <div className="news">
        <button onClick={goto}>
        <div className="news-img">
            <img src={props.article.image} alt="toimage"/>
        </div>
        <h1>{props.article.name}</h1>
        </button>
    </div>
   )
}