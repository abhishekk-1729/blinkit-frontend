import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [selectedProducts, setSelectedProducts] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [phone, setPhone] = useState("");
      
    const getAllProducts = async()=> {
        try {
            const response = await fetch("http://localhost:8000/api/products/getAllProducts",{ 
            method:"GET"
          });
    
          if(response.ok){
            const res_data = await response.json();
            setProductInfo(res_data);
            console.log(res_data);
          }
        } catch (error) {
          console.log(error);
        }
      }
        
      const categoriesName = [...new Set(productInfo.map(p=>p.category))];
      console.log({categoriesName});
    
      useEffect(()=>{
        getAllProducts();
      },[])

    const fetchAddress = async() => {
        try {
            console.log(phone);
            const response = await fetch(`http://localhost:8000/api/address/getAddressPhone/${phone}`,{
                method:"GET",

                
            });

            const res_data = await response.json();
            if (response.ok){
                setAddresses(res_data);
            }
            
        } catch (error) {
            console.log(error)
        }

    
    }

    useEffect(()=>{
        fetchAddress();
    },[])
    
    return <AuthContext.Provider value={{selectedProducts,setSelectedProducts,productInfo,setProductInfo,addresses,setAddresses,phone,setPhone}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {

    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of provider")
    }
    return authContextValue;
}