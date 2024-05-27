import React from 'react'
import { Profiler, useEffect, useState } from 'react';
import ProductDesc from "./ProductDesc";
import Layout from './Layout';
import Header from './Header.js'
import { useAuth } from '../store/auth'

export default function Home() {



    const [input,setInput] = useState("");
    const {productInfo} = useAuth();
  
    // let products;
    // if(input){
    //   products = productInfo.filter(p=>p.name.toLowerCase().includes(input));
    // }
    // else{
    //   products = productInfo;
    // }

    const categoriesName = ["Paan Corner","Cold Drink & Juices","Snacks & Munchies","Breakfast Instant","Sweet Tooth","Masala","Pharma & Wellness"];

  return (

 
    <Layout>
      
      <div >
        {categoriesName.map(categoryName => (
          <div key={categoriesName} >
            {productInfo.find(p=>p.category===categoryName)&&(
              <div>
            <h2 className='text-2xl py-5 capitalize'>{categoryName} </h2>
            <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
            {productInfo.filter(p => p.category === categoryName).map(product => (
              <div className='px-5 snap-start'>
                <ProductDesc _id={product._id} name={product.productName} price = {product.price} description={product.description} picture={product.productImage}/>
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


//  <div className='flex border'>
//                 {productInfo.filter(p => p.category === categoryName).map(product => (
//                   <div className='w-1/6'>
//                     <ProductDesc _id={product._id} name={product.name} price = {product.price} description={product.description} picture={product.picture}/>
//                   </div>
//                 ))}
//                 </div>