import React, { useEffect, useState } from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    const [token,setToken] = useState(localStorage.getItem("token"));
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [user,setUser] = useState("");
    const [currentAddress,setCurrentAddress] = useState("ABC");
    const storeTokenInLS = (serverToken) => {
      setToken(serverToken);
      return localStorage.setItem("token",serverToken);
  }

  let isLoggedIn = !!token;

  const LogoutUser = () => {
      setToken("");
      setPhone("");
      return localStorage.removeItem("token");
  }
  
    const [productInfo, setProductInfo] = useState([
    //     {
    //       "_id": "6654eb5d0fb9f02d444dadae",
    //       "productId": "0405001UP",
    //       "productImage": "1.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "7UP Nimbooz with Lemon Juice",
    //       "productCount": 1,
    //       "quantity": "250 ml",
    //       "price": 25,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadb3",
    //       "productId": "0405002LI",
    //       "productImage": "2.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Limca Lime 'N' Lemon Soft Drink 750 ml - Pack of 2",
    //       "productCount": 2,
    //       "quantity": "2 x 750 ml",
    //       "price": 75,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadb8",
    //       "productId": "0405003TH",
    //       "productImage": "3.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Thums Up Soft Drink (750 ml) - Pack of 2",
    //       "productCount": 3,
    //       "quantity": "2 x 750 ml",
    //       "price": 75,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadbd",
    //       "productId": "0405004SP",
    //       "productImage": "4.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Sprite Lime Flavored Soft Drink 750 ml - Pack of 2",
    //       "productCount": 4,
    //       "quantity": "2 x 750 ml",
    //       "price": 75,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadc2",
    //       "productId": "0405005CO",
    //       "productImage": "5.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Coca-Cola Soft Drink (750 ml) - Pack of 2",
    //       "productCount": 5,
    //       "quantity": "2 x 750 ml",
    //       "price": 75,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadc7",
    //       "productId": "0405006CO",
    //       "productImage": "6.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Coca-Cola Zero Sugar Soft Drink",
    //       "productCount": 6,
    //       "quantity": "300 ml",
    //       "price": 38,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5e0fb9f02d444dadcc",
    //       "productId": "0405007AP",
    //       "productImage": "7.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Appy Fizz Sparkling Drink (Apple Flavoured)",
    //       "productCount": 7,
    //       "quantity": "600 ml",
    //       "price": 33,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444dadd1",
    //       "productId": "0405008CO",
    //       "productImage": "8.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Coca-Cola Diet Coke Soft Drink - Pack of 6",
    //       "productCount": 8,
    //       "quantity": "6 x 300 ml",
    //       "price": 238,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444dadd6",
    //       "productId": "0405009CO",
    //       "productImage": "9.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Coca-Cola Soft Drink (300 ml)",
    //       "productCount": 9,
    //       "quantity": "300 ml",
    //       "price": 40,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444daddb",
    //       "productId": "0405010TI",
    //       "productImage": "10.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Tipsy Tiger Ginger Ale (Made with Real Ginger)",
    //       "productCount": 10,
    //       "quantity": "250 ml",
    //       "price": 89,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444dade0",
    //       "productId": "0405011FR",
    //       "productImage": "11.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Frooti Mango Drink - Pack of 10",
    //       "productCount": 11,
    //       "quantity": "10 x 125 ml",
    //       "price": 92,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444dade5",
    //       "productId": "0405012PE",
    //       "productImage": "12.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Pepsi Swag Soft Drink - Pack of 4",
    //       "productCount": 12,
    //       "quantity": "4 x 250 ml",
    //       "price": 100,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5f0fb9f02d444dadea",
    //       "productId": "0405013RE",
    //       "productImage": "13.png",
    //       "category": "Cold Drink & Juices",
    //       "subCategory": "Soft Drinks",
    //       "categoryNumber": 4,
    //       "subCategoryNumber": 5,
    //       "productName": "Red Bull Energy Drink (Sugar Free) - 250 ml",
    //       "productCount": 13,
    //       "quantity": "250 ml",
    //       "price": 125,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dadef",
    //       "productId": "0104014CH",
    //       "productImage": "14.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Hookah Flavor",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 4,
    //       "productName": "Chief Commissioner Herbal Hookah Flavor (Tobacco Free) by Soex",
    //       "productCount": 14,
    //       "quantity": "50 g",
    //       "price": 100,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dadf4",
    //       "productId": "0104015PA",
    //       "productImage": "15.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Hookah Flavor",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 4,
    //       "productName": "Paan Raas Herbal Hookah Flavor (Tobacco Free) by Soex",
    //       "productCount": 15,
    //       "quantity": "50 g",
    //       "price": 100,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dadf9",
    //       "productId": "0104016WA",
    //       "productImage": "16.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Hookah Flavor",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 4,
    //       "productName": "Watermelon Herbal Hookah Flavor (Tobacco Free) by Soex",
    //       "productCount": 16,
    //       "quantity": "50 g",
    //       "price": 100,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dadfe",
    //       "productId": "0104017BO",
    //       "productImage": "17.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Hookah Flavor",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 4,
    //       "productName": "Bombay Paan Masala Herbal Hookah Flavor (Tobacco Free) by Soex",
    //       "productCount": 17,
    //       "quantity": "50 g",
    //       "price": 100,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dae03",
    //       "productId": "0101018BA",
    //       "productImage": "18.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Paan Masala & Tobacco",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 1,
    //       "productName": "Baba Nauratan Pan Masala",
    //       "productCount": 18,
    //       "quantity": "100 g",
    //       "price": 250,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dae08",
    //       "productId": "0101019LI",
    //       "productImage": "19.png",
    //       "category": "Paan Corner",
    //       "subCategory": "Paan Masala & Tobacco",
    //       "categoryNumber": 1,
    //       "subCategoryNumber": 1,
    //       "productName": "LIT Premium Rolling Cut Tobacco",
    //       "productCount": 19,
    //       "quantity": "1 pack",
    //       "price": 449,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb600fb9f02d444dae0d",
    //       "productId": "1507020DE",
    //       "productImage": "20.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Masks & Sanitizers",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 7,
    //       "productName": "Dettol Hand Sanitizer",
    //       "productCount": 20,
    //       "quantity": "1 x 50 ml",
    //       "price": 24,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae12",
    //       "productId": "1507021DE",
    //       "productImage": "21.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Masks & Sanitizers",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 7,
    //       "productName": "Dettol Original Alcohol Based Hand Sanitizer",
    //       "productCount": 21,
    //       "quantity": "1 x 200 ml",
    //       "price": 95,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae17",
    //       "productId": "1507022FI",
    //       "productImage": "22.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Masks & Sanitizers",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 7,
    //       "productName": "Filixtrue Disposable Surgical 3 Ply Mask",
    //       "productCount": 22,
    //       "quantity": "1 pack (100 pcs)",
    //       "price": 388,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae1c",
    //       "productId": "1507023MR",
    //       "productImage": "23.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Masks & Sanitizers",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 7,
    //       "productName": "3M 9513 Respirator K N95 Mask",
    //       "productCount": 23,
    //       "quantity": "1 unit",
    //       "price": 84,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae21",
    //       "productId": "1506024DE",
    //       "productImage": "24.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Antiseptic Liquid",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 6,
    //       "productName": "Dettol Antiseptic Liquid",
    //       "productCount": 24,
    //       "quantity": "1 x 500ml",
    //       "price": 235,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae26",
    //       "productId": "1506025DE",
    //       "productImage": "25.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Antiseptic Liquid",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 6,
    //       "productName": "Dettol Surface Disinfection & Personal Hygiene Antiseptic Liquid",
    //       "productCount": 25,
    //       "quantity": "1 x 125ml",
    //       "price": 80,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb610fb9f02d444dae2b",
    //       "productId": "1506026SA",
    //       "productImage": "26.png",
    //       "category": "Pharma & Wellness",
    //       "subCategory": "Antiseptic Liquid",
    //       "categoryNumber": 15,
    //       "subCategoryNumber": 6,
    //       "productName": "Savlon Disinfectant Antiseptic Liquid",
    //       "productCount": 26,
    //       "quantity": "1 x 500ml",
    //       "price": 177,
    //       "location": "temp",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654ed0d0fb9f02d444dae47",
    //       "productId": "0508027BI",
    //       "productImage": "27.png",
    //       "category": "Snacks & Munchies",
    //       "subCategory": "Chips & Crisps",
    //       "categoryNumber": 5,
    //       "subCategoryNumber": 8,
    //       "productName": "Bingo Hashtags Spicy Masala Potato Chips - Pack of 2",
    //       "productCount": 27,
    //       "quantity": "2 x 58 g",
    //       "price": 40,
    //       "location": "temp",
    //       "__v": 0
    //     }
      ]);
    const [categoryInfo, setCategoryInfo] = useState([
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad7f",
    //       "categoryNumber": 2,
    //       "category": "Dairy, Bread & Eggs",
    //       "categoryImage": "2.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad80",
    //       "categoryNumber": 3,
    //       "category": "Fruits & Vegetables",
    //       "categoryImage": "3.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad7e",
    //       "categoryNumber": 1,
    //       "category": "Paan Corner",
    //       "categoryImage": "1.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad83",
    //       "categoryNumber": 6,
    //       "category": "Breakfast & Instant Food",
    //       "categoryImage": "6.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad85",
    //       "categoryNumber": 8,
    //       "category": "Bakery & Biscuits",
    //       "categoryImage": "8.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad84",
    //       "categoryNumber": 7,
    //       "category": "Sweet Tooth",
    //       "categoryImage": "7.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad86",
    //       "categoryNumber": 9,
    //       "category": "Tea, Coffee & Health Drink",
    //       "categoryImage": "9.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad88",
    //       "categoryNumber": 11,
    //       "category": "Masala, Oil & More",
    //       "categoryImage": "11.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad87",
    //       "categoryNumber": 10,
    //       "category": "Atta, Rice & Dal",
    //       "categoryImage": "10.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad89",
    //       "categoryNumber": 12,
    //       "category": "Sauces & Spreads",
    //       "categoryImage": "12.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad8a",
    //       "categoryNumber": 13,
    //       "category": "Chicken, Meat & Fish",
    //       "categoryImage": "13.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad8b",
    //       "categoryNumber": 14,
    //       "category": "Organic & Health Living",
    //       "categoryImage": "14.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad8c",
    //       "categoryNumber": 15,
    //       "category": "Pharma & Wellness",
    //       "categoryImage": "15.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad82",
    //       "categoryNumber": 5,
    //       "category": "Snacks & Munchies",
    //       "categoryImage": "5.png",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "6654eb5a0fb9f02d444dad81",
    //       "categoryNumber": 4,
    //       "category": "Cold Drink & Juices",
    //       "categoryImage": "4.png",
    //       "__v": 0
    //     }
      ]);
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


    return <AuthContext.Provider value={{currentAddress,setCurrentAddress,token,isLoggedIn,LogoutUser,storeTokenInLS, selectedProducts,setSelectedProducts,productInfo,setProductInfo,addresses,setAddresses,phone,setPhone,categoryInfo}}>
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