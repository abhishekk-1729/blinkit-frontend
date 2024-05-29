// import React, { useEffect, useState } from 'react'
// import { useAuth } from '../store/auth'
// import { Link } from 'react-router-dom';

// export default function Address() {

//     const {phone} = useAuth();

//     const [addresses,setAddresses] = useState([]);

//     const fetchAddress = async() => {
//         try {
//             console.log(phone);
//             const response = await fetch(`https://abhishek.nssiitd.in/ecommerce//api/address/getAddressPhone/${phone}`,{
//                 method:"GET",

                
//             });

//             const res_data = await response.json();
//             if (response.ok){
//                 setAddresses(res_data);
//             }
            
//         } catch (error) {
//             console.log(error)
//         }

    
//     }

//     useEffect(()=>{
//         fetchAddress();
//     },[])

//     const handleDeleteUser = async (id) =>{

//         console.log(id);
//         try {
//             const response = await fetch(`https://abhishek.nssiitd.in/ecommerce//api/address/deleteAddress`,{
//                 method: "DELETE",
//                 headers:{'Content-Type':'application/json'},
//                 body: JSON.stringify({_id:id})
//             })

//             const res_data = await response.json();
//             if(response.ok){
//                 console.log(res_data);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
 
//   return (
//     <div>
// <table class="table-auto">

//     <thead>
//     <tr>
//         <th>Name</th>
//         <th>Address</th>
//         <th>Phone</th>
//         <th>Edit</th>
//         <th>Delete</th>
//     </tr>
//     </thead>

//     <tbody>
//     {addresses.map((cur)=>{
//         return(
//             <>
//                 <tr>
//                     <td>{cur.name}</td>
//                     <td>{cur.address}</td>
//                     <td>{cur.phoneNumber}</td>
//                     <td><Link to ="/address/edit">Edit</Link></td>
//                     <td><button onClick={()=>handleDeleteUser(cur._id)}>Delete</button></td>
//                 </tr>
//                 {/* // by id update */}
//         </>
//         )
//     })}

//     </tbody>
// </table>


//     </div>
//   )
// }

