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

{categoryInfo.map((cur, index) => {
  const { category, categoryImage } = cur;
  return (
    <div key={index}>
      <div>
        {category}
      </div>
      <div>
        {categoryImage ? (
          <img src={`/production/category/${categoryImage.slice(0, -4)}.png`} alt={category} />
        ) : (
          <img src="/production/category/15.png" alt={""} /> // Optional: Default image path
        )}
      </div>
    </div>
  );
})}


      <div >
        {[...new Set(productInfo.map(p => p.category))].map(categoryName => (
          <div key={categoryName} >
            {productInfo.find(p=>p.category===categoryName)&&(
              <div className='m-10'>
                <div className='flex justify-between items-center'>
            <h2 className='text-2xl py-5 capitalize'>{categoryName} </h2>
            <Link to={`/allProduct/${categoryName}`}>
            <div>See All</div>
            </Link>
            </div>
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