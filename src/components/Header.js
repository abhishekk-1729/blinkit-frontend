import {React,useEffect,useState,useRef}from 'react'
import { useLocation } from "react-router-dom";
import { useRoute } from '@react-navigation/native';
import { NavLink,Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import "../App.css"
import Login from './Login';
import UserDropdown from './DropDown';
import AddressDropDown from './AddressDropDown';
import SearchAI from "./SearchAI";



export default function Header() {

    const {phone,addresses} = useAuth();
    const [aiSearch,setAiSearch] = useState(false);
    const {input,setInput,token} = useAuth();
    const [placeholderText, setPlaceholderText] = useState(""); 
    const placeholderList = ['Search "rice"', 'Search "egg"', 'Search "butter"', 'Search "paneer"','Search "milk"','Search "bread"','Search "curd"','Search "sugar"','Search "chips"','Search "chocholate"']; 
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const nextIndex = (placeholderList.indexOf(placeholderText) + 1) % placeholderList.length;
        setPlaceholderText(placeholderList[nextIndex]);
      }, 2000);
  
      return () => clearInterval(intervalId); 
    }, [placeholderList, placeholderText]);

    const location = useLocation();
    const path = location.pathname;

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
              {' Girnar '}
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
          <Link to="/search">
          <div>
            <input  value = {input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder={placeholderText} className='bg-gray-100 w-full py-3 pl-2 pr-80 rounded-xl outline-none'/>
          </div>
          </Link>
        </div>
        </Link>
        </div>


        <div className='flex justify-center items-center'>
          <Link to="/searchAI">
          <img src="/utils/ai.png" alt="" height="40px" width="40px"/>
          </Link>
        </div>

        
   

        <div className='flex justify-center items-center py-2 px-16'>
          {/* <NavLink className='px-2' to="/admin">
            Admin
          </NavLink> */}
        <div className="flex gap-2">
        <button onClick={()=>{setTryLogin(!tryLogin)}} className="flex">
        <div>{phone?"Account":"Login"}</div> 

      
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
       <AddressDropDown dropdownRef={dropdownRef} setAddress={setAddress}/> :<></>}




    {tryLogin&&!token?<Login dropdownRef={dropdownRef} setTryLogin={setTryLogin} tryLogin={tryLogin} />:<>{
      tryLogin?<UserDropdown setTryLogin={setTryLogin}/>:<></>
    }
    </>}

    {aiSearch?<SearchAI/>:<></>}
   

    </div>
  )
}

