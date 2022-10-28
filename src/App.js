import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Sellersignup from './pages/Sellersignup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Uploadproduct from './pages/Uploadproduct';
import Sellerlogin from './pages/Sellerlogin';
import DisplaytraderProducts from './pages/DisplaytraderProducts';
import Usercart from './pages/Usercart';


function App() {
  return (
   <>
   
   <Routes>
    <Route path='/uploadproduct' element={<Uploadproduct/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/login" element={<Login />} />
    <Route path='/usercart' element={<Usercart/>}/>
    <Route path="/sellersignup" element={<Sellersignup/>} />
    <Route path='/sellerlogin' element={<Sellerlogin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/traderproducts' element={<DisplaytraderProducts/>}/>
   </Routes>

   </>
  );
}

export default App;
