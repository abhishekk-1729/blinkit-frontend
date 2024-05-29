import React from 'react'

export default function Orders() {
  return (
    <div className='w-3/4 p-8 flex flex-col'>

            <div className='flex justify-between items-center py-4 border-b-2 border-black-5'>
                <div className='flex gap-4 justify-center items-center'>
                    <div>
                        <img src="/utils/order.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div>ORD249152028  ·  ₹226</div>
                        <div>Placed on fri, 19 apr'24, 10:12 am</div>
                    </div>
                    <div className='bg-[#999999] text-[#FFFFFF] p-1 rounded-xl'>
                        delivered
                    </div>

                </div>
                <div>
                    <button className='border-2 border-black-5 text-[#0D831E] rounded-md p-1'>
                        View Details
                    </button>
                </div>

            </div>


            

           
    </div>
  )
}
