import { useNavigate } from 'react-router-dom';
import './landing.css';
export default function Landing() {
  const navigate=useNavigate();
  return (
    <div className="container1">
        <img src='https://cdn.glitch.global/a4bac7b5-445a-408e-b694-29d563c8d147/ROOT%20TO%20RETAIL.jpg?v=1715679102429' alt='logo' className='image1'/>    
          <div className='container-items'>
            <h1 className='project'>Root To Retail</h1>
            <p className='para'>Bridging Farmers and Customers Together</p>
          <div className='Category-buttons'>
            <div onClick={()=>navigate("/dash")}>Farmer</div>
            <div>Customer</div>
            </div>
            </div>
    </div>    
  );
}