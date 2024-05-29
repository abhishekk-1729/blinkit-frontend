
import {React,useState} from 'react'
import "../App.css"
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';


export default function Addresses() {

    const [phoneAddress, setPhoneAddress] = useState();
    const [addressAddress, setAddressAddress] = useState();
    const [nameAddress, setNameAddress] = useState();
    const {addresses,phone,token} = useAuth();
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
  
        const data = {phone:phone,address:addressAddress,phoneNumber:phoneAddress,name:nameAddress};
            try {
  
              const response = await fetch(`http://localhost:8000/api/address/addAddressPhone`,{
                  method:"POST",
                  headers:{
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(data)
  
              });
  
              const res_data = await response.json();
              
              if (response.ok){
                  console.log("yay");
              }
              
              
            } catch (error) {
              console.log(error)
            }
      }
  
      const handleInput1 = (e) => {
            setNameAddress(e.target.value);
      }
      const handleInput2 = (e) => {
        setAddressAddress(e.target.value);
      }
      const handleInput3 = (e) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
          setPhoneAddress(input);
          setIsComplete(input.length === 10);
        }
      };
  


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
    <div className='w-3/4 '>
      <div  className='w-full p-6 flex flex-col'>
{token?<>

<div>

<form onSubmit={handleSubmit} className='flex flex-col gap-1'>


                <input type="text"
                name = "nameAddress"
                placeholder="Enter Name"
                id="nameAddress"
                required
                autoComplete="on"
                value={nameAddress}
                onChange={handleInput1}
                className='bg-gray-100 w-full border-2 outline-none rounded-xl p-2'
                 />


                <input type="text"
                name = "addressAddress"
                placeholder="Enter Address"
                id="addressAddress"
                required
                autoComplete="on"
                value={addressAddress}
                onChange={handleInput2}
                className='bg-gray-100 w-full border-2 outline-none rounded-xl p-2'
                 />

<div className='flex justify-center items-center bg-gray-100 w-full border-2   rounded-xl gap-2'>
               <div className='mx-2'>
                +91
               </div>
                <input type="phone"
                name = "phoneAddress"
                placeholder="Enter Phone Number"
                id="phoneAddress"
                required
                autoComplete="on"
                value={phoneAddress}
                onChange={handleInput3}
                className='bg-gray-100 w-full border-none outline-none rounded-xl p-2'
                 />
</div>

      
                <button onClick={()=>{}} className={`mt-2 inline-flex w-full justify-center rounded-xl p-4 text-sm font-semibold text-white shadow-sm sm:w-full bg-[#0D831E] hover:bg-[#0D831E]' `}>
  Add Address
</button>
</form>



<div className='mt-2'>My addresses</div>


<div className='flex flex-col overflow-y-auto h-60'>
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
</>:<>Please Login</>}

</div>

    </div>
  )
}
