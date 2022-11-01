import React from "react";
import Sidebar from "../components/Sidebar";
import commercesignup from "../images/commercesignup.jpg"
import  { useState } from 'react';
import { Link } from "react-router-dom";
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
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [selectedproductuid, setselectedproductuid] = useState("")
  useEffect(() => {
    getallProducts()
    
    }, [])
  
  
  const [productsarray, setproductsarray] = useState([])

  const getallProducts = ()=>{
    const productsPoint = "http://localhost:5008/product/displayallproducts" 
    axios.get(productsPoint).then((result)=>{
      console.log(result)
      setproductsarray(result.data.result)

    })


  }
  const addtocart= (uid)=>{
    // setselectedproductuid(e)

   let token = localStorage.token
    const cartPoint = "http://localhost:5008/cart/savecart" 
    let cartdetails = {uid, token}
    axios.post(cartPoint, cartdetails).then((result)=>{
      console.log(result)
    })
    // console.log("good")
    console.log(uid)

    
 
  }

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
        <div className="col-md-2  dashboardbody  d-none d-md-block">
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
              <div className="col-md-5 col-9 d-flex border border-dark border-1 mx-1 align-items-center">
              <input type="text" placeholder="type your search here..." className="border-0 w-100 searchinput"/>
              <i class="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className="col-md-1 btn btn-warning col-2">search</div>
              <div className="col-md-5 d-flex justify-content-end">
                <b className="mx-1">Account</b><i class="fa-solid fa-user" id="topicons"></i>
                <b className="mx-1">shop</b><i class="fa-brands fa-shopify" id="topicons"></i>
                <Link to={"/usercart"} style={{textDecoration:"none", color:"black"}}><b>Cart</b><i class="fa-solid fa-cart-shopping" id="topicons"></i></Link>
              </div>
            </div>
          </div>

       <div className="container-fluid mt-3">
        <div className="row  justify-content-between bg-white">
        {
          productsarray.map((product, index)=>(
            <>
            <div className="col-md-3 mx-1 col-5  card productdiv shadow pb-5  my-2">
              <img src={product.imageurl} className='w-75 align-self-center h-75' alt="" />
          
             <div className="d-flex align-self-center productname">
             <p className="text-center">${product.price}.</p>
             <b className="mx-1 text-center ">{product.productname}</b>
           
              
           
               </div>
               <p className="text-center  productdescription">{product.description}</p><br />
              
              {/* <button className='btn btn-dark shadow text-bold w-75 align-self-center' onClick={(e)=>addtocart(setselectedproductuid(e.target.value))} value={product.uid}>add to cart</button> */}
              <button className='btn btn-dark shadow text-bold w-75 align-self-center'  onClick={()=>addtocart(product.uid)} >add to cart</button>
          
            </div>
            


            </>
          ))
         }
          
        </div>
       </div>
      
        

       
          {/* <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 card">
                <img src={commercesignup} className='w-100 h-100' alt="" />
                <p>$2550</p>
                <b> amoled wrist watch</b>
                <button className='btn btn-dark shadow w-75 align-self-center'><b>add to cart</b></button>
              </div>
            </div>
          </div> */}
        
        </div>
      </div>
  
    </div>
 
    </>
  );
};

export default Dashboard;
