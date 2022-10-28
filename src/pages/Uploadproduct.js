import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Uploadproduct = () => {
  useEffect(() => {
    displaytraderProduct()
 
  }, [])
  
    const [myfile, setmyfile] = useState("")
    const [price, setprice] = useState(0)
    const [description, setdescription] = useState("")
    const [imageurl, setimageurl] = useState("")
    const [productname, setproductname] = useState("")
    const [productarray, setproductarray] = useState([])
    const getfile = (e)=>{
        console.log(e.target.files[0])
        const pickedFile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(pickedFile) 
        reader.onload=()=>{
          console.log(reader.result)
          setmyfile(reader.result)
        }

    }
    const uploadProduct = ()=>{
      let uploadpoint =  "http://localhost:5008/product/uploadproduct" 
      let token = localStorage.token
      let uid = Math.floor(100000 + Math.random() * 900000);
     
      let uploadDetails = {myfile, productname, imageurl, token, price, description,uid}
      axios.post(uploadpoint, uploadDetails).then((result)=>{
        console.log(result)
        console.log(result.data.uploadedimage)
        setimageurl(result.data.uploadedimage)
      })

    }

    const displaytraderProduct= ()=>{
      let productPoint = "http://localhost:5008/product/displaytraderproduct" 
      let token = localStorage.token
      let productDetails = {token}
      axios.post(productPoint, productDetails).then((result)=>{
        console.log(result)
        console.log(result.data.result)
        setproductarray(result.data.result)
      })
    }


  return (
    <>
    <div className='uploadbody'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-md-6  shadow pb-5 pt-3'>
          <input type="text" placeholder='name' className='form-control' onChange={(e)=>setproductname(e.target.value)}/>
          <input type="number" placeholder='price' className='form-control my-2' onChange={(e)=>setprice(e.target.value)}/>
          <input type="text" placeholder='description'  className='form-control my-2'  onChange={(e)=>setdescription(e.target.value)}/>
          <input type="file" placeholder='upload relevant image...' className='form-control my-2' onChange={(e)=>getfile(e)} />
          <button className='btn btn-light w-100'  data-bs-toggle="modal" data-bs-target="#modelId">upload</button>
          <Link to={"/traderproducts"}><button className='btn btn-dark w-100 my-2' type='button'><b>view your products.</b></button></Link>
          </div>

        </div>
      </div>
    
    </div>

    {/* <button className='btn btn-success my-2' >set question</button> */}
     

    <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">proceed</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <b></b>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
            <b style={{color:"red"}} >are you sure you the product details are correct this action might be irreversible</b>
            
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={uploadProduct}>confirm upload</button>
        </div>
      </div>
    </div>
  </div> 


    </>
  )
}

export default Uploadproduct;