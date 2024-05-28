import React, { useState,useRef } from 'react'
import { useAuth } from '../store/auth';
import { Link, useNavigate, Navigate } from "react-router-dom";
import otpVerification from './OtpVerify';


export default function Login({dropdownRef}) {

    const [phone,setPhone] = useState();

    const [isComplete, setIsComplete] = useState(false);
    const [phoneSet,setPhoneSet] = useState(false);
    const handleInput = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
          setPhone(input);
          setIsComplete(input.length === 10);
        }
      };

  
    const navigate = useNavigate();
    const handleSubmit = async(event) => {

        const new_body = {phone:phone}
        event.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/loginPhone",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(new_body)//send otp

        })

        const res_result = await response.json();

        if(response.ok){
            // storeTokenInLS(res_result.token);
            setPhone(phone);
            console.log(res_result.otp);
            console.log(res_result.token);
        }
        else{
            console.log(res_result.otp);
        }

        setPhoneSet(true);

        // navigate("/otp", { state: { OTP: res_result.otp ,token:res_result.token,phone:phone} });
       
    }

  return (
    <div>








  <div  class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity">



  <div  class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        
        {/* hi */}
        
        {!phoneSet?<>

    <div ref={dropdownRef} class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">


            <div className='absolute mt-4 ml-4'>
                    <img src="/svg/left-arrow.svg" alt=""height = "30px" width = "30px" />
                    </div>
                 

  <div class="bg-white sm:p-6 sm:pb-4">

                <div class="sm:flex flex-col sm:items-center gap-1 justify-center items-center">
                            <div className='w-full flex justify-center items-center p-2'>

                            <div class="mx-auto flex h-16 w-full flex-shrink-0 items-center justify-center sm:mx-0 sm:h-16 sm:w-16">
                                
                                <img src="/icon.jpg" alt="" />
                                
                            </div>
                            </div>
                <div class=" text-center  sm:mt-0 sm:text-left">
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">India's Last Minute App</h3>

                    <div class=" flex justify-center ">
                    <p class="text-sm text-gray-500">Log in or Sign up</p>
                    </div>
                </div>
    </div>

    <div class="px-4 py-3 sm:flex sm:flex-col sm:px-6 justify-center items-center">
    <form onSubmit={handleSubmit} className='flex flex-col'>
                      <div className='flex justify-center items-center bg-gray-100 w-full   rounded-xl gap-2'>
                         <div className='mx-2'>
                          +91
                         </div>
                          <input type="phone"
                          name = "phone"
                          placeholder="Enter Phone Number"
                          id="phone"
                          required
                          autoComplete="off"
                          value={phone}
                          onChange={handleInput}
                          className='bg-gray-100 w-full border-none outline-none rounded-xl p-4'
                           />

                  
                     </div>
                     <button type="submit"  className={`mt-2 inline-flex w-full justify-center rounded-xl p-4 text-sm font-semibold text-white shadow-sm sm:w-full ${isComplete ? 'bg-[#0D831E] hover:bg-[#0D831E]' : 'bg-[#9C9C9C] hover:bg-[#9C9C9C]'}`}>
  Continue</button>
    
                 
                  </form>

    
  </div>
            <div>
            By continuing, you agree to our Terms of service & Privacy policy
            </div>

  </div>
  </div>
  </>:<>hi</>
}



    
    </div>
  </div>
  </div>


    </div>
  )
}
