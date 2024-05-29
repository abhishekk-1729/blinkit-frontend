import React from 'react'
import { Link,Outlet ,useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth'


export default function Account() {

    const {phone,LogoutUser} = useAuth();
    const navigate = useNavigate();

  return (

            <div className='flex m-20 min-h-32  gap-2 border-2 border-black-5 '>
       
                    <div className='w-1/4 flex flex-col min-h-32 border-r-2 border-black-5  '>
                        <div className='p-4 flex justify-center border-b-2 border-black-5'>{phone}</div>
                        <Link to="/account/addresses">
                        <div className='p-4 border-b-2 border-black-5'>My Address</div></Link>
                        <Link  to="/account/orders">
                        <div className='p-4 border-b-2 border-black-5'>My Orders</div></Link>
                        <Link  to="/account/wallet">
                        <div className='p-4 border-b-2 border-black-5'>My Wallet</div></Link>
                        <Link  to="/account/privacy">
                        <div className='p-4 border-b-2 border-black-5'>Account Privacy</div></Link>
                        
                        <button className=' text-left p-4' onClick={()=>{LogoutUser(); navigate("/");}}>Logout</button>
                    </div>
           
            <Outlet/>
            </div>

  )
}
