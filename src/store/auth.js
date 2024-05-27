import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    const [token,setToken] = useState(localStorage.getItem("token"));
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [user,setUser] = useState("");
    const [productInfo, setProductInfo] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [phone, setPhone] = useState("");

    const userAuthentication= async()=>{
        if(token){
            try {
                const response = await fetch('http://localhost:8000/api/auth/user',{
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                
                if(response.ok){
                    const res_data = await response.json();
                    console.log(res_data.userData);
                    setPhone(res_data.userData);
                    // setIsLoading(false);

                }
                // else{
                //     setIsLoading(false);
                // }
            } catch (error) {
                console.log(error)
            }
        }
    }
      
    useEffect(()=>{
        userAuthentication();
    },[])


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

    const getAllCategory = async()=> {
        try {
            const response = await fetch("http://localhost:8000/api/products/getAllCategory",{ 
            method:"GET"
          });
    
          if(response.ok){
            const res_data = await response.json();
            setCategoryInfo(res_data);
            console.log("ca",res_data);
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        getAllCategory();
      },[])

    const fetchAddress = async() => {
        try {
            console.log(phone);
            const response = await fetch(`http://localhost:8000/api/address/getAddressPhone/${phone}`,{
                method:"GET",
            });

            const res_data = await response.json();
            console.log(res_data);
            if (response.ok){
                setAddresses(res_data);
            }
            
        } catch (error) {
            console.log(error)
        }

    
    }

    useEffect(()=>{
        fetchAddress();
    },[phone])

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }
    
    return <AuthContext.Provider value={{isLoggedIn,LogoutUser,storeTokenInLS, selectedProducts,setSelectedProducts,productInfo,setProductInfo,addresses,setAddresses,phone,setPhone,categoryInfo}}>
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