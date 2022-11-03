import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'

const Usercart = () => {
  const [cartarray, setcartarray] = useState([])
  const [message, setmessage] = useState("")
const [checkoutprice, setcheckoutprice] = useState(0)
  const [price, setprice] = useState(0)
  let addpriceArray = []

  useEffect(() => {
   getcartdetails()
  }, [])
  
  const getcartdetails = ()=>{
    let token = localStorage.token;
    let finddetails = {token}
    console.log(token)
    let cartPoint = "http://localhost:5008/cart/cartdetails" 
    axios.post(cartPoint, finddetails).then((result)=>{
      // console.log(result)
      setcartarray(result.data.result)
      addpriceArray = result.data.result
      console.log(addpriceArray)
      let totalprice = addpriceArray.reduce((total, item)=>{
        return total + Number(item.itemprice)
      }, 0);
      setcheckoutprice(totalprice)
      console.log(totalprice)
    })
  }
  const processPayment=()=>{
    alert("are you sure you want to pay" + " " + "$" + checkoutprice)
  }

  const deleteItem = (id)=>{
    let deleteDeets = {id}
    let deletePoint = "http://localhost:5008/cart/deleteitem"
    axios.post(deletePoint, deleteDeets).then((result)=>{
      console.log("good", result)
      setmessage(result.data.message)
      
    })
    getcartdetails()
    console.log(id)
  }

  return (
    <>
    
    <div className={message?'alert alert-success':'d-none'}>{message}</div>
    <div className='bg-light cartbody cartheight'>
      <div className='col-md-7 mx-auto'>
        <div className='container-fluid'>
        {
            cartarray.map((product, number)=>(
            <>
            <div className='row bg-white shadow pt-3 mt-1 pb-4'>
              <div className='col-md-6 bg-white'>
                <img src={product.cartimage} alt="" className='h-100 bg-dark w-75' />
              </div>
              <div className='col-md-4'>
                <p>{product.itemdescription}</p>
                <b>{product.itemname}</b><br />
                <b>${product.itemprice}</b><br />
               {/* <span className='btn cartbutton '>checkout $<input type="button" className='btn' value={product.itemprice} /></span>  */}
                <button className='btn  cartbutton mt-3 shadow'  value={product.itemprice}>checkout ${product.itemprice}</button>
                <button className='btn rounded-5 h-25 bg-info mt-2 ' onClick={()=>deleteItem(product._id)}>delete product</button>
              </div>
            </div>
            
            </>

            ))

        }
        

        </div>
        <div className='row justify-content-center'>
        <input  type="button" className='btn w-75  bg-danger shadow' onClick={processPayment} value={checkoutprice}/>
        </div>
      
      </div>
      {/* <div className='row justify-content-center'> */}
      
      {/* </div> */}
    </div>
    </>
  )
}


export default Usercart;