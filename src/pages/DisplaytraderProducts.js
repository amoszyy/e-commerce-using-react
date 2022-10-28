import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
const DisplaytraderProducts = () => {
  useEffect(() => {
    displaytraderProduct();
  }, []);
  const [productarray, setproductarray] = useState([]);
  const displaytraderProduct = () => {
    let productPoint = "http://localhost:5008/product/displaytraderproduct";
    let token = localStorage.token;
    let productDetails = { token };
    axios.post(productPoint, productDetails).then((result) => {
      console.log(result);
      console.log(result.data.result);
      setproductarray(result.data.result);
    });
  };
  return (
    <>
      <div className="traderProductbody d-flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <div className="row mx-1">
            {productarray.map((product, index) => (
              <>
                <div className="col-md-3 text-center card shadow mx-1 mt-2 productdiv  pb-5">
                  <img
                    src={product.imageurl}
                    alt=""
                    className="w-75 align-self-center h-75 mt-3 product"
                  />
                  <div className="d-flex align-self-center">
                    <b>${product.price}</b>
                    <p className="mx-1">{product.productname}</p>
                  </div>
                  <button className="btn btn-dark shadow w-75 align-self-center">
                    <b>delete product</b>
                  </button>
                  {/* <p>{product.productname}</p> */}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaytraderProducts;
