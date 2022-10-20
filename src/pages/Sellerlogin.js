import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import commercesignup from "../images/commercesignup.jpg"
import axios from 'axios'
import { useState } from 'react'


const Sellerlogin = () => {
  const [message, setmessage] = useState("")
  let formik = useFormik({
    initialValues:{
      email:"",
      password:""

  },
  onSubmit:(values)=>{
      console.log(values)

  },
    validationSchema:yup.object({
      firstname:yup.string().required("This firstname field is needed").min(1, "please fill out this field"),
      lastname:yup.string().required("This lastname field is required").min(1, "please fill out this field"),
      email:yup.string().required("invalid email").email("invalid email address"),
      password:yup.string().matches(/^[\w]{5,}$/, "must be greater than 5 characters")

  })


  })
  let endpointL = "http://localhost:5008/trader/authenticateseller  " 
  let navigate = useNavigate()
  const login = ()=>{
    
    let email = formik.values.email
    let password = formik.values.password
    let loginDetails = {email, password}
    axios.post(endpointL, loginDetails).then((result)=>{
      
      let loggedInuser = result.data;
      console.log(loggedInuser)
       
      setmessage(result.data.message)
      if(result.data.status){
        localStorage.token = loggedInuser.user._id  
        console.log(result.data.user._id) 
        navigate("/uploadproduct")
      }
    
    
  })

  }
  return (
    <>
    <div className='signupbody'>
        <div className='whiteround'></div>
        <div className='bottomround'></div>
        <div className='signupcontain'>
       
            <div className='container innersignup shadow '>
            <b style={{color:"black"}}>{message}</b>
                <div className='row'>
                    <div className='col-md-6  lineborder'>
                    <input type="text" className={formik.errors.email?'form-control my-2 is-invalid':'form-control my-2'} placeholder='email' onChange={formik.handleChange} name="email" onBlur={formik.handleBlur}/>  {formik.touched.email &&<div className='text-danger'>{formik.errors.email}</div>} 
                        <input type="text" className={formik.errors.password?'form-control my-2 is-invalid':'form-control my-2'} placeholder='password' onChange={formik.handleChange} name="password" onBlur={formik.handleBlur}/>  {formik.touched.password &&<div className='text-danger'>{formik.errors.password}</div>} 
                        <button className='btn btn-outline-dark w-100'>signup</button>
                        <button className='stylebtn btn  shadow btn-outline-dark w-100 my-2' onClick={login}>login</button>
                    </div>
                    {/* <div className='col-md-1'></div> */}
                  <div className='col-md-5 my-3 d-none d-md-block'>
                    <img src={commercesignup} className='w-100 h-75'  alt="" />
                  </div>
                    
                    

                </div>
                
                
            </div>

        </div>
   </div>
    </>
  )
}

export default Sellerlogin; 