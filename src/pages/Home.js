import React from 'react'
import homeimage from "../images/homeimage.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='homebody'>
        <div className='homeTopcontainer '>
            <div className='homeTopimagecontainer col-md-4 col-6'>
                
            </div>
            <div className='toptext col-md-4 col-5'>
                <h4>Every Purchase Will Be Made With Pleasure</h4>
                <p>Buying and selling of goods and services using the internet.</p>
                <Link to={"/signup"}><button className='btn btn-warning mx-2' type='button'><b>join us today.</b></button></Link>
                <Link to={"/login"}><button className='btn btn-success' type='button'><b>login.</b></button></Link>
               
            </div>
        </div>
        {/* <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                <img src={homeimage} alt="" className='w-100 h-75'/>
                </div>
                <div className='col-md-3'>
                    <p>jdjndjnfdfdfx</p>
                </div>
             
            </div>
           
        </div> */}
        
        

    </div>

    </>
  )
}

export default Home;