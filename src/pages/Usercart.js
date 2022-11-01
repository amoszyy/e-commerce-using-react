import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Usercart = () => {
  const [cartarray, setcartarray] = useState([])

  useEffect(() => {
   getcartdetails()
  }, [])
  
  const getcartdetails = ()=>{
    let token = localStorage.token;
    let finddetails = {token}
    console.log(token)
    let cartPoint = "http://localhost:5008/cart/cartdetails" 
    axios.post(cartPoint, finddetails).then((result)=>{
      console.log(result)
      setcartarray(result.data.result)
    })
    


  }
  return (
    <>
    <div className='bg-light cartbody'>
      <div className='col-md-7 mx-auto'>
        <div className='container-fluid'>
        {
            cartarray.map((product, number)=>(
            <>
            <div className='row'>
              <div className='col-md-6 bg-light'>
                <img src={product.cartimage} alt="" className='h-100 shadow mt-3 bg-dark w-75' />
              </div>
            </div>
            </>

            ))

        }

        </div>
      </div>
   

    </div>
    </>
  )
}


export default Usercart;