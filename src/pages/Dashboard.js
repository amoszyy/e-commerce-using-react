import React from "react";
import Sidebar from "../components/Sidebar";
import commercesignup from "../images/commercesignup.jpg"
import  { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Dashboard = () => {
  const[isOpen ,setIsOpen] = useState(true);
  // const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/dashboard",
          name:"Dashboard",
          icon:<FaTh/>
      },
      {
          path:"/about",
          name:"About",
          icon:<FaUserAlt/>
      },
      {
          path:"/analytics",
          name:"Analytics",
          icon:<FaRegChartBar/>
      },
      {
          path:"/comment",
          name:"Comment",
          icon:<FaCommentAlt/>
      },
      {
          path:"/product",
          name:"Product",
          icon:<FaShoppingBag/>
      },
      {
          path:"/productList",
          name:"Product List",
          icon:<FaThList/>
      }
  ]
  
  return (
    <>
        <div className="topdashboard">
            <p>YOUR EVERYDAY, DELIVERED <span>FOR FREE</span></p>

          </div>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-2  dashboardbody d-none d-md-block">
        <div className="container-sidenav ">
           <div style={{width: isOpen ? "100%" : "50px"}} className="sidebar">
               <div className="top_section">
                   <p style={{display: isOpen ? "block" : "none"}} className="logo">amoscart</p>
                  
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
        </div>
       
        </div>
    
        <div className="col-md-10 bg-light">
          <div className="container-fluid my-2 bg-white">
            <div className="row">
              <div className="col-md-5 col-9 d-flex border border-dark border-1 mx-1">
              <input type="text" placeholder="type your search here..." className="border-0 w-100 searchinput"/>
              <i class="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className="col-md-1 btn btn-warning col-2">search</div>
              <div className="col-md-5 d-flex justify-content-end">
                <b className="mx-1">Account</b><i class="fa-solid fa-user" id="topicons"></i>
                <b className="mx-1">shop</b><i class="fa-brands fa-shopify" id="topicons"></i>
                <b>Cart</b><i class="fa-solid fa-cart-shopping" id="topicons"></i>
              </div>
            </div>
          </div>
       
      
         

       
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 card">
                <img src={commercesignup} className='w-100 h-100' alt="" />
                <p>$2550</p>
                <b> amoled wrist watch</b>
                <button className="btn btn-danger ">add to cart</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
  
    </div>
 
    </>
  );
};

export default Dashboard;
