import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
import Icon from '../Icons/icon'
//import './addinng.css'
export default function Adding(){
    const location=useLocation()
    let [category,setCategory]=useState([])
    // const data=location.state.id;
  useEffect(()=>{
    const getdata=async(data)=>{
      const respose=await fetch(`http://localhost:3000/${data}`)
      const json=await respose.json();
      setCategory(json)
    }
    const data = location.state.id;
    getdata(data);
}, [location.state.id]);
    return(
      
        <div className="container">
            <h1>{location.state.id}</h1>
            <section className='news-articles'>
         {
          category.map(article=> <Icon article={article}/>)
         }
      

      </section>
        </div>
    
    )
}