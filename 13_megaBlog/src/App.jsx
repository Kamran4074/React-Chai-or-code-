import './App.css'
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import authService from "./appwrite/auth.js"
import {login,logout} from "./store/authSlice.js"
import {Header,Footer} from './components/index.js';
import { Outlet } from 'react-router-dom';


function App() {
  const[loading,setLoading]=useState(true);
  const dispatch= useDispatch();

  useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout()) 
    }
  })
  .finally(()=> setLoading(false)) 
},[])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between justify-center bg-gray-100">
      <div className='w-full block'>
        <Header/>
        <main>
          Todo{/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>  
  ):(<div>Loading...</div>);   
  
}

export default App
