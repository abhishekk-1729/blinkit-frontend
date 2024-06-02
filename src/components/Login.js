import React, { useState,useRef } from 'react'
import { useAuth } from '../store/auth';
import { Link, useNavigate, Navigate } from "react-router-dom";
import otpVerification from './OtpVerify';


export default function Login({dropdownRef,setTryLogin,tryLogin}) {

    const [phoneTemp,setPhoneTemp] = useState();
    const [resend,setResend] = useState(false);
    const [otp,setOtp] = useState();//what needs to be entered and checked
    const [OTP,setOTP] = useState();
    const [token,setToken] = useState();
    const {storeTokenInLS,setPhone} = useAuth();
    const [isComplete, setIsComplete] = useState(false);
    const [phoneSet,setPhoneSet] = useState(false);


    const handleInput = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
          setPhoneTemp(input);
          setIsComplete(input.length === 10);
        }
      };

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
    const new_body = {phone:phoneTemp}
    console.log(new_body);
    event.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/loginPhone",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(new_body)
        
        //send otp

    })

        const res_result = await response.json();
        // console.log(res_result);

        if(response.ok){
            // setPhoneTemp(phoneTemp);
            setOTP(res_result.otp);
            // console.log(OTP)
            setToken(res_result.token);
        }
        else{
            console.log("dikkat h");
        }
        console.log(res_result.otp)
        setPhoneSet(true);
    }

    const handleOtpVerify = (e) => {

        e.preventDefault();
        if(otp===OTP){
            console.log("same");
            console.log(OTP);
            console.log(token);
            console.log(phoneTemp);
            storeTokenInLS(token);
            setPhone(phoneTemp);
            navigate("/");
            setTryLogin(false);
            setPhoneSet(false);
        }
        else{
            console.log(OTP);
            console.log(otp);
            console.log("different")
        }
        
    }

    const handleInput2 = (e) => {
        const enteredOtp = e.target.value;
        setOtp(enteredOtp);
        if(enteredOtp===OTP){
            storeTokenInLS(token);
            setPhone(phoneTemp);
            navigate("/");
            setTryLogin(false);
            setPhoneSet(false);
        }
    }

  return (
    <div>
  <div  class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity">
  <div  class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        
        {/* hi */}
        
     

    <div ref={dropdownRef} class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
 

            <button onClick={()=>{setTryLogin(phoneSet?true:false); setPhoneSet(!phoneSet)}} className='absolute mt-4 ml-4'>
                    <img src="/svg/left-arrow.svg" alt=""height = "30px" width = "30px" />
                    </button>


  <div class="bg-white sm:p-6 sm:pb-4">
  {(tryLogin&&!phoneSet)?<>

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
                          name = "phoneTemp"
                          placeholder="Enter Phone Number"
                          id="phoneTemp"
                          required
                          autoComplete="on"
                          value={phoneTemp}
                          onChange={handleInput}
                          className='bg-gray-100 w-full border-none outline-none rounded-xl p-4'
                           />

                  
                     </div>
                     <button type="submit"  className={`mt-2 inline-flex w-full justify-center rounded-xl p-4 text-sm font-semibold text-white shadow-sm sm:w-full ${isComplete ? 'bg-[#0D831E] hover:bg-[#0D831E]' : 'bg-[#9C9C9C] hover:bg-[#9C9C9C]'}`}>
  Continue</button>
    
                 
                  </form>

    
  </div>
            <div>
            By continuing, you agree to our Terms of service & Privacy policy.<br/>
            Note: OTP can be found in console in test mode
           </div>
         
 
           </>:
           
  <>
<div className='flex flex-col justify-center items-center gap-3'>

    <div>OTP Verification</div>
    <div>We have sent a verification code to  </div>
    <div>+91-{phoneTemp} </div>
    <div>    <form onSubmit={handleOtpVerify} className='flex flex-col'>
                    
                          <input type="text"
                          name = "otp"
                          placeholder="Enter otp"
                          id="otp"
                          required
                          autoComplete="off"
                          value={otp}
                          onChange={handleInput2}
                          className='bg-gray-100 w-full border-none outline-none rounded-xl p-4'
                           />
                     <button type="submit"  className={`mt-2 inline-flex w-full justify-center rounded-xl p-4 text-sm font-semibold text-white shadow-sm sm:w-full ${isComplete ? 'bg-[#0D831E] hover:bg-[#0D831E]' : 'bg-[#9C9C9C] hover:bg-[#9C9C9C]'}`}>
  Verify</button>
  </form>
    </div>

</div>



  </>
  }
  </div>
  </div>
  




    
    </div>
  </div>
  </div>


    </div>
  )
}
