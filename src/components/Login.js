import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { Link, useNavigate, Navigate } from "react-router-dom";
import otpVerification from './OtpVerify';


export default function Login() {

    const [phone,setPhone] = useState();

    const handleInput = (e) =>{
        setPhone(e.target.value);
    }
    
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

        navigate("/otp", { state: { OTP: res_result.otp ,token:res_result.token,phone:phone} });
       
    }
  return (
    <>

            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Login or Sign up</h1>
                </div>
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                        {/* <img src="/images/login.png" alt="Please login with your credentials" /> */}
                    </div>
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="phone">Enter phone number</label>
                                <input type="phone"
                                name = "phone"
                                placeholder="phone"
                                id="phone"
                                required
                                autoComplete="off"
                                value={phone}
                                onChange={handleInput} />
                            </div>
                           <div>
                            <button type="submit">
                                Continue
                            </button>
                            </div>
                        </form>
                    </section>
            </div>
    </section>
    </>
  )
}
