import React from 'react'
import { Profiler, useEffect, useState } from 'react';
import ProductDesc from "./ProductDesc";
import Layout from './Layout';


export default function Home() {


    const [productInfo, setProductInfo] = useState([]);
    const [input,setInput] = useState("");
  
    const getAllProducts = async()=> {
      try {
          const response = await fetch("http://localhost:8000/api/products/getAllProducts",{ 
          method:"GET"
        });
  
        if(response.ok){
          const res_data = await response.json();
          setProductInfo(res_data);
          console.log(res_data);
        }
      } catch (error) {
        console.log(error);
      }
    }
      
    const categoriesName = [...new Set(productInfo.map(p=>p.category))];
    console.log({categoriesName});
  
    useEffect(()=>{
      getAllProducts();
    },[])
  
    let products;
    if(input){
      products = productInfo.filter(p=>p.name.toLowerCase().includes(input));
    }
    else{
      products = productInfo;
    }

  return (
    <Layout>
      <input value = {input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='Search for products...' className='bg-gray-100 w-full py-2 px-4 rounded-xl '/>
      <div >
        {categoriesName.map(categoryName => (
          <div key={categoriesName} >
            {products.find(p=>p.category===categoryName)&&(
              <div>
            <h2 className='text-2xl py-5 capitalize'>{categoryName} </h2>
            <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
            {products.filter(p => p.category === categoryName).map(product => (
              <div className='px-5 snap-start'>
                <ProductDesc _id={product._id} name={product.name} price = {product.price} description={product.description} picture={product.picture}/>
              </div>
            ))}
             </div>
             </div>)
             }
          </div>
        ))}
      </div>
    </Layout>
  )
}
