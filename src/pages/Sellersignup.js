import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import commercesignup from "../images/commercesignup.jpg"
const Sellersignup = () => {
    let formik =useFormik({
        initialValues:{
            businessname:"",
            // lastname:"",
            email:"",
            password:"",
            businesscategory:"",
            phonenumber:""
        },
       
        onSubmit:(values)=>{
            // console.log(values)
        },
        validationSchema:yup.object({
            businessname:yup.string().required("This firstname field is needed").min(1, "fill out this field"),
            // lastname:yup.string().required("This lastname field is required").min(1, "fill out this field"), 
            email:yup.string().required("invalid email").email("invalid email"),
            password:yup.string().matches(/^[\w]{5,}$/, "must be greater than 5 characters"),
            businesscategory:yup.string().required("please select a category"),
            phonenumber:yup.string().matches(/^[\w]{10,}$/, "incorrect phone no")
        }),     
    })
    console.log(formik.errors)
    let endpoint = "http://localhost:5008/trader/tradersignup" 
    let navigate = useNavigate()
    const regUser = ()=>{
        let businessname = formik.values.businessname
        // let lastnames = formik.values.lastname
        let email = formik.values.email
        let password = formik.values.password
        let phonenumber = formik.values.phonenumber
        let businesscategory = formik.values.businesscategory
        let userDetails = {businessname, email, password, phonenumber, businesscategory}
        axios.post(endpoint, userDetails).then((result)=>{
            console.log(result.data)
            if(result.data.status)
            navigate("/sellerlogin")
        })
    }
    
  return (
    <>
       <div className='signupbody'>
        <div className='whiteround'></div>
        {/* <p className='text-center'>signup as a seller with amoscart today</p> */}
        <div className='bottomround'></div>
        <div className='signupcontain'>
            <div className='container innersignup shadow '>
                <div className='row'>
                    <div className='col-md-6  lineborder'>
                        <input type="text" className={formik.errors.businessname?'form-control my-2 is-invalid':'form-control my-2'} placeholder='businessname' onChange={formik.handleChange} name="businessname" onBlur={formik.handleBlur}/>  {formik.touched.businessname &&<div className='text-danger'>{formik.errors.businessname}</div>} 
                        {/* <input type="text" className={formik.errors.lastname?'form-control my-2 is-invalid':'form-control my-2'} placeholder='lastname' onChange={formik.handleChange} name="lastname" onBlur={formik.handleBlur}/>  {formik.touched.lastname &&<div className='text-danger'>{formik.errors.lastname}</div>}  */}
                        <input type="text" className={formik.errors.email?'form-control my-2 is-invalid':'form-control my-2'} placeholder='email' onChange={formik.handleChange} name="email" onBlur={formik.handleBlur}/>  {formik.touched.email &&<div className='text-danger'>{formik.errors.email}</div>} 
                        <input type="text" className={formik.errors.password?'form-control my-2 is-invalid':'form-control my-2'} placeholder='password' onChange={formik.handleChange} name="password" onBlur={formik.handleBlur}/>  {formik.touched.password &&<div className='text-danger'>{formik.errors.password}</div>} 
                        <input type="number" className={formik.errors.phonenumber?'form-control my-2 is-invalid':'form-control my-2'} placeholder='phonenumber' onChange={formik.handleChange} name="phonenumber" onBlur={formik.handleBlur}/>  {formik.touched.phonenumber &&<div className='text-danger'>{formik.errors.phonenumber}</div>}
                        <select name="businesscategory" id=""   className={formik.errors.businesscategory?'form-control my-2 is-invalid':'form-control my-2'} onChange={formik.handleChange}  onBlur={formik.handleBlur}>
                            <option value="fashion">fashion</option>
                            <option value="fashion">gadgets</option>
                            <option value="fashion">foodstuff</option>
                            <option value="fashion">fashion</option>
                        </select>  {formik.touched.businesscategory &&<div className='text-danger'>{formik.errors.businesscategory}</div>} 
                        <button className='btn btn-outline-dark w-100 my-2' onClick={regUser}>signup</button>
                        <button className='stylebtn btn text-white shadow btn-outline-dark w-100 my-2'>login</button>
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

export default Sellersignup;