import {React,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from '../store/auth';

export default function OtpVerify() {

    const [otp,setOtp] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const {storeTokenInLS,setPhone} = useAuth();

    const handleOtpVerify = (e) => {

        
        const phone = location.state?.phone;
        const OTP = location.state?.OTP; // Accessing passed state
        const token = location.state?.token; // Accessing passed state
        
        e.preventDefault();
        console.log(OTP);
        if(otp===OTP){
            console.log("same");
            storeTokenInLS(token);
            setPhone(phone);
            //token system will be there
            
            navigate("/");
        }
        else{
            console.log("different")
        }
        
    }

    const handleInput = (e) => {
        setOtp(e.target.value);
    }

  return (

  
    <div>
      Insert the otp
      <input type="otp"
        name = "otp"
        placeholder="otp"
        id="otp"
        required
        autoComplete="off"
        value={otp}
        onChange={handleInput} />
      <button onClick={handleOtpVerify}> Verify </button>
      <button>Resend Code</button>
    </div>
  )
}
