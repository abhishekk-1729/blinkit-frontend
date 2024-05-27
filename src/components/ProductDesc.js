import React, { useState } from 'react'
import { useAuth } from '../store/auth'


export default function ProductDesc({_id,name,price,picture,description}) {
    
    const {selectedProducts,setSelectedProducts} = useAuth();


    const handleAddItem = () =>{
        setSelectedProducts(prev=>[...prev,_id]);
    }

    const handleDeleteItem = () => {
      setSelectedProducts(prev => {
          const index = prev.indexOf(_id);
          if (index > -1) {
              return [...prev.slice(0, index), ...prev.slice(index + 1)];
          }
          return prev;
      });
  }


    return (
    <div>



<div className="h-full p-2 bg-[#FFFFFF]  rounded-l shadow-md">
   <div className="px-4"> 
   <img class="h-auto max-w-full rounded-lg" src={`/production/${"0405001UP.png"}`} alt=""/>
   </div> 
   <div className="flex inline-flex p-1 border bg-[#EFF2F7] rounded-xl"> 
   <img src="/utils/clock.png" alt="" height="18px" width="23px" />
    <div>10 mins
      </div>
       </div>
        <div>{name}
          </div>
           <div className="py-2"> 
           <div>{description}
            </div> 
           {/* <img src="/svg/dropdown.svg" alt="" height="20px" width="20px" /> */}
            </div> 
            <div className="flex justify-between mt-1 items-center">
               <div>$ {price}</div> {
                <div className="flex gap-2 py-2 px-4 rounded-xl justify-center items-center border border-[#328616] bg-[#328616] text-[#FFFFFF]">
                  <button onClick={handleDeleteItem}>-</button>
                  <div>{selectedProducts.filter(p=>p===_id).length}</div>
                  <button onClick={handleAddItem}>+</button>
                  </div>
              //  <div className="py-2 px-4 rounded-xl border border-[#328616] bg-[#F6FFF8] text-[#328616]">
              //   ADD
              //   </div> 
                }
               </div> 
               </div>
    </div>
  )
}
