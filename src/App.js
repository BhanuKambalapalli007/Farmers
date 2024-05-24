import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Modal from './components/Modal/Modal';
import Products from './components/Products/Products';
import Adding from './components/Adding/adding';
import LoginForm from './components/Login/login';
import SignUp from './components/Signup/Sign-up';
import Landing from './components/Landing/Landing';
import Fdashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/home' Component={Home}></Route>
      <Route path='/Modal' Component={Modal}></Route>
      <Route path='/Products' Component={Products}></Route>
      <Route path='/add' Component={Adding}></Route>
      <Route path='/login' Component={LoginForm}></Route>
      <Route path='/signup' Component={SignUp}></Route>
      <Route path='/' Component={Landing}></Route>
      <Route path='/dash' Component={Fdashboard}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
