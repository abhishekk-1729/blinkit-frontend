import {React,useEffect,useState,useRef}from 'react'
import { useLocation } from "react-router-dom";
import { useRoute } from '@react-navigation/native';
import { NavLink,Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import "../App.css"
import Login from './Login';
// import './App.css';


export default function Header() {


    const {input,setInput} = useAuth();
    const [placeholderText, setPlaceholderText] = useState(""); // Initial placeholder text
    const placeholderList = ['Search "rice"', 'Search "egg"', 'Search "butter"', 'Search "paneer"','Search "milk"','Search "bread"','Search "curd"','Search "sugar"','Search "chips"','Search "chocholate"']; // List of placeholder values
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const nextIndex = (placeholderList.indexOf(placeholderText) + 1) % placeholderList.length;
        setPlaceholderText(placeholderList[nextIndex]);
      }, 2000);
  
      return () => clearInterval(intervalId); 
    }, [placeholderList, placeholderText]);

    const location = useLocation();
    const path = location.pathname;
    const {phone,addresses} = useAuth();

    const [tryLogin,setTryLogin] = useState(false);
    const [address,setAddress] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAddress(false);
        setTryLogin(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    const handleDeleteUser = async (id) =>{

      console.log(id);
      try {
          const response = await fetch(`http://localhost:8000/api/address/deleteAddress`,{
              method: "DELETE",
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({_id:id})
          })

          const res_data = await response.json();
          if(response.ok){
              console.log(res_data);
          }
      } catch (error) {
          console.log(error);
      }
  }
    

  return (
    <div className='sticky top-0 bg-white p-0'>
    <div className='p-0 flex justify-between border-b-2 border-black-5  overflow-x-scroll snap-x scrollbar-hide'>

      <div className='py-2 px-5 flex justify-center items-center border-r-2 border-black-5'>

        <Link to="/">
        <div className=''>
        <img src="/logo.png" alt="" height="70px" width="140px"/>
       
        </div>
        </Link>

      </div>


        <div className='flex justify-center items-center py-2 px-16'>
            {/* <Link to ="/address"> */}
            <div className="flex-column">
            <div className="address">
              Delivery in {8} minutes
            </div>
            <div className="pb-2">
            </div>
            <div className="flex justify-between">
              
              <div>
                Home - 
              {' Girnar House'}
              </div>

              <button type="button" className="justify-self-end" id="menu-button" aria-expanded="true" aria-haspopup="true">

                <svg onClick={()=>{setAddress(!address)}} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                <path d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z" fill="#33363F"/>
                </svg>

              </button>

            </div>

            </div>
            {/* </Link> */}
        </div>

      

       <div className='flex justify-center items-center py-2'>

       <Link to="/address">
        <div className='flex justify-center items-center bg-gray-100 w-full   rounded-xl'>
          
          
          <div className="mx-2">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
          </div>
          <Link to="/address">
          <div>
            <input  value = {input} onChange={(e)=>{e.preventDefault()}} type="text" placeholder={placeholderText} className='bg-gray-100 w-full py-3 pl-2 pr-80 rounded-xl'/>
          </div>
          </Link>
        </div>
        </Link>
        </div>

        
   

        <div className='flex justify-center items-center py-2 px-16'>
          <NavLink className='px-2' to="/admin">
            Admin
          </NavLink>
        <div className="flex gap-2">
        <button onClick={()=>{setTryLogin(true)}} className="flex">
        <div>{phone?phone:"Account"}</div> 

      
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
              <path d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z" fill="#33363F"/>
              </svg>
              </button>
        </div>

        </div>
        <div className="pr-3">

        </div>
        <div className="flex justify-center items-center py-2">
        <div className="flex p-3  gap-2   bg-[#0D831E] text-white rounded-[12px] ">
        <NavLink to="/checkout">
        <div>
        <a className={(path==="/checkout"?'text-emerald-500':"") + ""}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </a>
        </div>
        </NavLink>
        
        <div>My Cart </div> 

        </div>
        </div>
        
    </div>
    {address?
    <div ref={dropdownRef} className='address-dropdown w-1/3 z-2 mx-20 p-4 flex-column  bg-[#F3F6FB]' role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div className='p-3'>
    <div className='flex justify-between items-center'>
    <button onClick={()=>{}} className={`my-2 py-2 px-4 rounded-xl border border-[#328616] bg-[#F6FFF8] text-[#328616]`}>
      Add Address
    </button>

    <div>
    <svg onClick={()=>{setAddress(false)}} xmlns="http://www.w3.org/2000/svg" fill="#000000" height="10px" width="10px" version="1.1" id="Capa_1" viewBox="0 0 490 490" >
<polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161   11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "/>
</svg>
    </div>
    </div>
    <div>Your saved addresses</div>
    </div>

    <div className='flex-column overflow-y-auto h-80'>
        {
          addresses.map((cur)=>{
            return (
              <>
              <div className='flex-column p-3'>
              <div className="flex bg-white rounded-[12px] gap-3 items-center p-2">
                <div className="bg-[#F3F6FB] rounded-lg p-2 self-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FAB005" viewBox="0 0 64 64" width="30px" height="30px"><path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"/></svg>

                </div>
                <div className="flex-column">
                    <div>{cur.name}</div>
                    <div>{cur.address}</div>
                   <div className="flex gap-2">
                    <div><Link to ="/address/edit">
                      
                      <div className='rounded-full m-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#40C057" viewBox="0 0 32 32" width="20px" height="20px"><path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/></svg>
                      </div>
                      </Link></div>
                    <button onClick={()=>handleDeleteUser(cur._id)}>
                      <div className='rounded-full m-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#FA5252" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
                        </div></button></div>
                   
                    </div>
                    </div>
                   

              </div>
              </>
            )
          })
        }
    </div>

</div>
    :<></>}

    {tryLogin?<Login dropdownRef={dropdownRef} setTryLogin={setTryLogin} tryLogin={tryLogin} />:<></>}
    </div>
  )
}

