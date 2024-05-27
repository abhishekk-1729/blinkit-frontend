import React from 'react'
import { Profiler, useEffect, useState } from 'react';
import ProductDesc from "./ProductDesc";
import Layout from './Layout';
import Header from './Header.js'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom';

export default function Home() {



    const [input,setInput] = useState("");
    const {productInfo,categoryInfo} = useAuth();
  
    const categoriesName = ["Paan Corner","Cold Drink & Juices","Snacks & Munchies","Breakfast Instant","Sweet Tooth","Masala","Pharma & Wellness"];

  return (



 
    <Layout>

<div class="flex justify-center items-center">
  <img class="" src={"/cover/pan.jpg"}/>
</div>

<div className='flex overflow-x-scroll  mr-4 gap-4 p-4 snap-x scrollbar-hide'>
  <img className='w-1/4' src="/cover/Pharmacy.jpg" alt="" />
  <img className='w-1/4' src="/cover/printouts.jpg" alt="" />
  <img className='w-1/4' src="/cover/diaper.jpg" alt="" />
  <img className='w-1/4' src="/cover/pet.jpg" alt="" />
</div>


<div className='grid grid-cols-10 gap-1'>
{categoryInfo  .sort((a, b) => a.categoryNumber - b.categoryNumber).map((cur, index) => {
  const { category, categoryImage } = cur;
  return (
   
    <div key={index} >
      <Link to={`/allProduct/${category}`}>
      <div>
        {categoryImage ? (
          <img src={`/production/category/${categoryImage}`} alt={category} />
        ) : (
          <img src="/production/category/15.png" alt={""} /> // Optional: Default image path
        )}</div>
  </Link>
    </div>
    
  );

})}
 </div>

      <div >
        {[...new Set(productInfo.map(p => p.category))].map(categoryName => (
          <div key={categoryName} >
            {productInfo.find(p=>p.category===categoryName)&&(
              <div className='p-2'>
                <div className='flex justify-between items-center'>
            <h2 className='text-2xl py-5 capitalize'>{categoryName} </h2>
            <Link to={`/allProduct/${categoryName}`}>
            <div className='text-[#0D831E]'>see all</div>
            </Link>
            </div>
            <div className='flex  overflow-x-scroll snap-x scrollbar-hide gap-4'>
            {productInfo.filter(p => p.category === categoryName).map(product => (
              <div className='flex-none lg:w-1/6'>
                <ProductDesc _id={product._id} name={product.productName} price = {product.price} description={product.quantity} picture={product.productImage}/>
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