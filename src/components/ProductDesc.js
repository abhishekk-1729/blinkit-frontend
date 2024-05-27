import React, { useState } from 'react'
import { useAuth } from '../store/auth'

export default function ProductDesc({_id,name,price,picture,description}) {
    
    const {setSelectedProducts} = useAuth();


    const handleSubmit = () =>{
        setSelectedProducts(prev=>[...prev,_id]);
    }

    return (
    <div>
      {/* <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src={picture} alt="" />
            </div>
            <div className='mt-2'>
              <h3 className='font-bold text-lg'>{name}</h3>
            </div>
            <p className='text-sm mt-1 leading-4 text-gray-500'> 
              {description}
            </p>
            <div className="flex mt-1">
              <div className='text-2xl font-bold grow'>${price}</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
              onClick={handleSubmit}>
                +
              </button>
            </div>
          </div> */}


<div className="h-full p-2 bg-[#FFFFFF]  rounded-l shadow-md">
   <div className="px-4"> 
   <img class="h-auto max-w-full rounded-lg" src={`/production/01010001UP.png`} alt=""/>
   </div> 
   <div className="flex inline-flex p-1 border bg-[#EFF2F7] rounded-xl"> 
   <img src="/utils/clock.png" alt="" height="18px" width="23px" />
    <div>10 mins
      </div>
       </div>
        <div>{name}
          </div>
           <div className="py-2"> 
           <div>{"20g"}
            </div> 
           {/* <img src="/svg/dropdown.svg" alt="" height="20px" width="20px" /> */}
            </div> 
            <div className="flex justify-between mt-1 items-center">
               <div>$ {price}</div> 
               <div className="py-2 px-4 rounded-xl border border-[#328616] bg-[#F6FFF8] text-[#328616]">ADD</div> 
               </div> 
               </div>
    </div>
  )
}
{/* <div className="flex-column p-2 bg-[#FFFFFF] rounded-l">

<div className="px-4"> <img class="h-auto max-w-full rounded-lg" src="/soft_drinks/limca.png" alt=""/></div>
    <div className="flex inline-flex p-1 border bg-[#EFF2F7] rounded-xl">
    <img src="/utils/clock.png" alt="" height="18px" width="23px" />
      <div>10 mins</div>
        </div>
      <div>Limca Limca Limca Limca Limca</div>
      <div className="flex justify-between p-2 border rounded-l">
        <div>2 x 750ml</div>
        <img src="/svg/dropdown.svg" alt="" height="20px" width="20px" />
      </div>
      <div className="flex justify-between mt-1">
        <div>Rs. 75</div>
        <div className="py-2 px-4 rounded-xl border border-[#328616] bg-[#F6FFF8] text-[#328616]">ADD</div>
      </div>


</div>  <div className="flex-column p-2 bg-[#FFFFFF] rounded-l">

<div className="px-4"> <img class="h-auto max-w-full rounded-lg" src="/soft_drinks/limca.png" alt=""/></div>
    <div className="flex p-1"><div>icon</div>
      <div>10 mins</div>
        </div>
      <div>Name</div>
      <div className="flex justify-between p-2">
        <div>2 x 750ml</div>
        <div>Dropdown</div>
      </div>
      <div className="flex justify-between">
        <div>Rs. 75</div>
        <div className="p-2 rounded-l">Add</div>
      </div>


</div>            <div className="flex-column p-2 bg-[#FFFFFF] rounded-l">

<div className="px-4"> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/></div>
    <div className="flex p-1"><div>icon</div>
      <div>10 mins</div>
        </div>
      <div>Name</div>
      <div className="flex justify-between p-2">
        <div>2 x 750ml</div>
        <div>Dropdown</div>
      </div>
      <div className="flex justify-between">
        <div>Rs. 75</div>
        <div className="p-2 rounded-l">Add</div>
      </div>


</div>             <div className="px-4"> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/></div>
                      <div className="flex p-1"><div>icon</div>
                        <div>10 mins</div>
                          </div>
                        <div>Name</div>
                        <div className="flex justify-between p-2">
                          <div>2 x 750ml</div>
                          <div>Dropdown</div>
                        </div>
                        <div className="flex justify-between">
                          <div>Rs. 75</div>
                          <div className="p-2 rounded-l">Add</div>
                        </div>      <input  value = {input} onChange={()=>{}} type="text" placeholder={"place"} className='bg-gray-100 w-full py-3 pl-2 pr-80 rounded-xl'/>         <input value = {input} onChange={handleInput} type="text" placeholder={"one"} className='bg-gray-100 w-full py-2 pl-2 pr-32'/>            <div className="flex justify-start">
              
              <div>
                Home - 
              {1111111111111}
              </div>

              <div className="justify-self-end">

                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z" fill="#33363F"/>
                </svg>

              </div>

            </div>
            <div className='w-1/6'></div> */}