import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

export default function Orders() {

 const [orders,setOrders] = useState([]);
 const {phone} = useAuth();

 const fetchOrders = async ()=> {
    try {
        const response = await fetch(`https://abhishek.nssiitd.in/ecommerce/api/order/getAllOrdersPhone/${phone}`,{
            method:"GET"
        });

        const res_data = await response.json();
        // console.log(res_data);
        if(response.ok){
            setOrders(res_data);
            
        }
        
    } catch (error) {
        // console.log("nahi aaya");
    }
 }

  useEffect(()=>{
    fetchOrders();
 },[phone])

  return (
    <div className='w-3/4 p-8 flex flex-col'>
{


orders.map((cur)=>{

    const {orderId,orderStatus,orderTotal,timeOfOrder} = cur;
return(


            <div className='flex justify-between items-center py-4 border-b-2 border-black-5'>
                <div className='flex gap-4 justify-center items-center'>
                    <div>
                        <img src="/utils/order.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div>{orderId}  ₹{orderTotal}</div>
                        <div>Placed on {timeOfOrder}</div>
                    </div>
                    <div className='bg-[#999999] text-[#FFFFFF] p-1 rounded-xl'>
                        {orderStatus}
                    </div>

                </div>
                <div>
                    <Link to={`/success/${orderId}`}>
                    <button className='border-2 border-black-5 text-[#0D831E] rounded-md p-1'>
                        View Details 
                    </button>
                    </Link>
                </div>

            
    </div>)
    })
}
</div>
  )
}
