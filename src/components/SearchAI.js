import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import ProductDesc from './ProductDesc';
import PulseLoader from "react-spinners/PulseLoader";


export default function SearchAI() {

  const {productInfo,selectedProducts,setSelectedProducts} = useAuth();
  const [aiSearch,setAiSearch] = useState([]);
  const [input,setInput] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [tempCart,setTempCart] = useState([]);

  const fetch1 = async (e) => {
    setTempCart([]);
    e.preventDefault();
    console.log(input);
    setLoading(true); // Start loading
    try {
      const response = await fetch(`http://localhost:8000/api/product/getAllProductsByQuery/${input}`, {
        method: "GET",
      });

      
      if(response.ok){
        const res_data = await response.json();
        
        for(const p of res_data){
          console.log(p.productName);
          console.log(p.quantity);
          for(let i=0;i<p.quantity;i++){
          
          setTempCart(prev=>[...prev,p.productName]);
        }
        }
        setAiSearch(res_data);
        console.log(res_data);
      }
      
    } catch (error) {
      console.log("hiii")
    }
    finally{
      setLoading(false); // End loading
    }
}

  return (
    
    <div className='flex flex-col'>
      <div className='flex justify-center inline-center p-8 '>
        <h1 className='text-2xl'>
        Shop Smart with Your List!
        </h1>
      </div>
    <div className='flex mx-16  h-[32rem] border-2 border-black-5'>
      <div className='w-1/4 border-r-2 border-black-5'>
      <div className='flex flex-col   py-3 p-4 gap-2 h-full'>
        <div className='h-1/6 flex justify-center items-center text-xl'>
          Search Products using text
        </div>
        <form onSubmit={fetch1} className='h-5/6 flex flex-col gap-4'>
            <textarea type="text"
            name = "input"
            placeholder="Enter your Order"
            id="input"
            required
            autoComplete="on"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            className='bg-gray-100 border-2 outline-none rounded-xl p-2 h-5/6'
            />
      <button className='w-full  rounded-md p-3 h-1/6 mt-2 inline-flex w-full justify-center rounded-xl p-4 text-l font-semibold text-white shadow-sm sm:w-full bg-[#0D831E] hover:bg-[#0D831E]' type="submit">Submit</button>
      </form>
      </div>
      </div>
      <div className='w-3/4 flex flex-col  p-3 gap-2 '>
        <div className='h-1/6 flex justify-center items-center text-xl'>
          Result
        </div>
        
        <div className='h-4/6 flex '>
          {loading?
          <div className=''>
<PulseLoader color="#36d7b7" /></div>:
        <div className="flex  overflow-x-scroll snap-x scrollbar-hide gap-4">
      {productInfo.filter(p => new Set(aiSearch.map(item => item.productName)).has(p._id)).map(product => (
                 
      <div className='flex-none lg:w-1/6'>           
      <ProductDesc _id={product._id} name={product.productName} price = {product.price} description={product.quantity} picture={product.productImage}
      addToWhat={tempCart} setAddToWhat={setTempCart}
      />
       </div>
      ))}




      </div>}

          </div>
          <div className='flex h-1/6 justify-center items-center gap-4'>
        
            <button className='p-4 flex gap-1 justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FA5252" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
              Empty Cart
              </button>
 
            <button className='p-4 flex gap-1 justify-center items-center' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
              Add To Cart
              </button>
    
       
      </div>
              
      </div>
      
    </div>
    </div>
  )
}
