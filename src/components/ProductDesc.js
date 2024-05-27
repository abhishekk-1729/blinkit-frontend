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

  const truncateName = (name,length) => {
    const maxLength = length;
    if (name.length > maxLength) {
        return name.substring(0, maxLength) + '...';
    }
    return name;
};



    return (
    <div>



<div className="w-full h-full bg-[#FFFFFF] border-2  rounded-xl shadow-xl pb-2 my-2">
   <div className="px-4"> 
   <img class="h-auto w-full rounded-lg" src={`/production/${picture}`} alt=""/>
   </div> 
   <div className='px-2'>
   <div className="flex inline-flex p-1 border bg-[#EFF2F7] rounded-xl"> 
   <img src="/utils/clock.png" alt="" height="18px" width="23px" />
    <div>10 mins
      </div>
       </div>
       <div className='flex flex-col h-full'>
        <div className='flex-1 min-h-[3rem]  max-h-[3rem]'>{truncateName(name,35)}
          </div>
           <div className="flex-1 my-2  w-full min-h-[2rem]  max-h-[3rem]"> 
{description}

           {/* <img src="/svg/dropdown.svg" alt="" height="20px" width="20px" /> */}
            </div> 
            <div className='flex-1 min-h-[3rem] max-h-[3rem]'>
            <div className="flex justify-between items-center w-full">
               <div>$ {price}</div>
               <div>{

                selectedProducts.find(p=>p===_id)?
                <div className="flex gap-2 py-2 px-4 rounded-xl justify-center items-center border border-[#328616] bg-[#328616] text-[#FFFFFF]">
                 
                  <button onClick={handleDeleteItem}>-</button>
                  <div>{selectedProducts.filter(p=>p===_id).length}</div>
                  <button onClick={handleAddItem}>+</button>
                  </div>:
               <button onClick={handleAddItem} className="py-2 px-4 rounded-xl border border-[#328616] bg-[#F6FFF8] text-[#328616]">
                ADD
                </button> 
                }
                </div> 


                </div>
               </div> 
               </div>
               </div>
               </div>
    </div>
  )
}
