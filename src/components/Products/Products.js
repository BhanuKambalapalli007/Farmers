
import {useState,useEffect} from 'react'
//import './App.css';
import News from '../Cards/cards'
import './Products.css'
//import Adding from './Adding'
//import Another from './another'
import { useNavigate } from 'react-router-dom'
function Products() {
  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState([])
 const navigate=useNavigate()
  
  useEffect(()=>{
    const getdata=async()=>{
      const respose=await fetch('http://localhost:3000/Crops')
      const json=await respose.json();
      setArticles(json)
      setCategory(json)
    }
    getdata()
  },[])
  const filter=(event)=>{
    setCategory(articles.filter(f=>f
      .name.toLowerCase().includes(event.target.value))
    )
  }
  
  
  return (
    <div className='body2'>
    <div className='App'>
      <header className='header'>
          <h1 className='header1'>Root To Retail</h1>
          <input type='text' placeholder='search' onChange={filter}/>
      </header>
      <section className='news-articles'>
         {
          category.map(article=> <News article={article}/>)
         }
       <button onClick={()=>navigate('/Modal')}>
         upload
        </button>   
      

      </section>
         
    </div>
    </div>
  );
}

export default Products;