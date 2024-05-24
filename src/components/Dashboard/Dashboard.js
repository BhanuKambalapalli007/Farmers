import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
import './Dashboard.css'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Fdashboard() {
    const navigate=useNavigate();
  return (
    <div className="parent">
    <nav className="navbar sticky-top navbar-expand-lg navbar-light navstyle">
        <img
          src="https://cdn.glitch.global/5fcd0bff-507e-4966-98d7-4850f5c4f73b/ROOT%20TO%20RETAIL.png?v=1714729894472"
          width="40"
          height="40"
          className="d-inline-block align-top ml-3 image"
          loading="lazy"
          alt="hii"
        />
        <span className="projectname">
          <h1>ROOT TO RETAIL</h1>
        </span>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className='nav-element' onClick={()=>navigate("/signup")}>Sign-In</button>
            <button className='nav-element' onClick={()=>navigate("/login")}>Login</button>
            
          </div>
        </div>
      </nav>
      <div className="external">
        <div class="d-flex flex-row it">
          <div class="d-flex flex-column cse">
            <h1 class="text">Field to Profit</h1>
            <p class="text">Our website highly empowers farmers and will maximize their earnings.We all know the difficulties in cultivating crops and exporting them, by leveraging our tools and resources, farmers can optimize their operations, 
                increase productivity, reduce costs, access market oppurtunities, and ultimately maximize their earnings.We provide support throughout the process, ensuring that farmers can efficiently turn their hard work into financial success.
                This direct interaction fosters transparency and trust between producers and consumers.</p>
          </div>
          <img class="external-img" src="https://media.istockphoto.com/id/1330214199/photo/indian-farmer-busy-using-mobile-phone-while-sitting-in-between-the-crop-seedlings-inside.jpg?s=612x612&w=0&k=20&c=PmGOwjZlQdOhETmjVwBoT4thL3mJn3VfEm5q9doj4aU=" alt='hlo'/>
        </div>
        <div class="d-flex flex-row it">
          <img class="external-img" src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/vegetables.jpg?quality=82&strip=1" alt='hlo'/>
          <div class="d-flex flex-column cse">
            <h1 class="text">Field to Screen</h1>
            <p class="text">Encapsulates the journey of agricultural products from the field where they are grown to the digital screen of a consumer's device,illustrates the seamless transition of agricultural products from the farm to the
                digital screen of consumers' devices, enabling convenient access to fresh, locally sourced produce through online platforms and agricultural websites. consumers receive their orders and enjoy the fresh, locally sourced agricultural
                products. Whether it's fruits, vegetables, dairy, or other farm-fresh goods, consumers can experience the quality and flavor of these products.</p>
          </div>
        </div>
        <div class="d-flex flex-row it">
          <div class="d-flex flex-column cse">
            <h1 class="text">Bridging the Gap</h1>
            <p class="text">The agricultural products are transported from the farm to distribution centers or directly to retailers, By providing a convenient way for consumers to access a wide range of products directly from farmers and producers.
                These platforms offer detailed product information, pricing, and often allow consumers to make purchases with just a few clicks.Farmers can share information about their agricultural methods, such as organic or regenerative farming 
                techniques, through online content, social media, and on-farm events. This transparency allows customers to make informed choices and fosters a sense of connection to the food they consume.</p>
          </div>
          <img class="external-img it" src="https://www.environmentenergyleader.com/wp-content/uploads/2024/03/Grocery-scaled.jpg.webp" alt='hlo'/>
        </div>
      </div>
    </div>
  );
}

 