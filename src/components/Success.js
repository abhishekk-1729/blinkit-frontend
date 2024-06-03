import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function Success() {

  const params = useParams();
  const navigate = useNavigate();
  const [downloadState, setDownloadState] = useState("Download Invoice");

  const [t, setT] = useState(300); // 10 minutes in seconds
  const [timeText, setTimeText] = useState('');

  useEffect(() => {
      if (t > 0) {
          const timer = setInterval(() => {
              setT(prevT => prevT - 1);
          }, 1000);

          return () => clearInterval(timer); // Clear interval on component unmount
      } else {
          setTimeText('Order coming in 0 seconds');
        

      }
  }, [t]);

  useEffect(() => {
      if (t > 0) {
          const minutes = Math.floor(t / 60);
          const seconds = t % 60;
          setTimeText(`Order coming in ${minutes} minutes and ${seconds} seconds`);
      }
  }, [t]);

  const downloadInvoice = () => {
    setDownloadState("Downloading...");
    axios
        .get(`https://abhishek.nssiitd.in/ecommerce/download/${params.id}`, { responseType: "blob" })
        .then((res) => {
            // console.log(res);
            const url = window.URL.createObjectURL(
                new Blob([res.data], { type: "application/pdf" })
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                "Invoice"
            );
            link.click();
            setDownloadState("Downloaded Successfully!");
            setTimeout(() => {
                setDownloadState("Invoice Downloaded");
            }, 5000);
        })
        .catch((err) => {
            console.log(err);
            alert("Error in downloading invoice");
            setDownloadState("Download Invoice");
        });
};



const changeStatus = async(data)=>{

 
  try {

    const response = await fetch(`https://abhishek.nssiitd.in/ecommerce/api/order/edit/${params.id}`,{
        method:"PUT",
        headers:{
          'Content-Type':"application/json"
      },
      body: JSON.stringify({status:data})

    });

    const res_data = await response.json();
    
    if (response.ok){
        // console.log("yay");
    }
  }
     
    catch (error) {
    // console.log("ni hua");
  }
}
useState(()=>{

  changeStatus("PLACED");
},[])


  return (
    <div className='flex flex-col justify-center items-center h-screen gap-20'>
      <di className='text-[#328515] text-6xl'>
      {timeText}
      </di>
      {/* {params.id} */}
      <div>
      <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl" onClick={downloadInvoice}>{downloadState}</button>
      </div>
    </div>
  )
}


// {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Limca Lime 'N' Lemon Soft Drink 750 ml - Pack of 2",
//   "quantity": "2 x 750 ml",
//   "price": 75,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Thums Up Soft Drink (750 ml) - Pack of 2",
//   "quantity": "2 x 750 ml",
//   "price": 75,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Sprite Lime Flavored Soft Drink 750 ml - Pack of 2",
//   "quantity": "2 x 750 ml",
//   "price": 75,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Coca-Cola Soft Drink (750 ml) - Pack of 2",
//   "quantity": "2 x 750 ml",
//   "price": 75,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Coca-Cola Zero Sugar Soft Drink",
//   "quantity": "300 ml",
//   "price": 38,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Appy Fizz Sparkling Drink (Apple Flavoured)",
//   "quantity": "600 ml",
//   "price": 33,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Coca-Cola Diet Coke Soft Drink - Pack of 6",
//   "quantity": "6 x 300 ml",
//   "price": 238,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Coca-Cola Soft Drink (300 ml)",
//   "quantity": "300 ml",
//   "price": 40,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Tipsy Tiger Ginger Ale (Made with Real Ginger)",
//   "quantity": "250 ml",
//   "price": 89,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Frooti Mango Drink - Pack of 10",
//   "quantity": "10 x 125 ml",
//   "price": 92,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Pepsi Swag Soft Drink - Pack of 4",
//   "quantity": "4 x 250 ml",
//   "price": 100,
//   "location": "temp"
//  },
//  {
//   "category": "Cold Drink & Juices",
//   "subCategory": "Soft Drinks",
//   "productName": "Red Bull Energy Drink (Sugar Free) - 250 ml",
//   "quantity": "250 ml",
//   "price": 125,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Hookah Flavor",
//   "productName": "Chief Commissioner Herbal Hookah Flavor (Tobacco Free) by Soex",
//   "quantity": "50 g",
//   "price": 100,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Hookah Flavor",
//   "productName": "Paan Raas Herbal Hookah Flavor (Tobacco Free) by Soex",
//   "quantity": "50 g",
//   "price": 100,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Hookah Flavor",
//   "productName": "Watermelon Herbal Hookah Flavor (Tobacco Free) by Soex",
//   "quantity": "50 g",
//   "price": 100,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Hookah Flavor",
//   "productName": "Bombay Paan Masala Herbal Hookah Flavor (Tobacco Free) by Soex",
//   "quantity": "50 g",
//   "price": 100,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Paan Masala & Tobacco",
//   "productName": "Baba Nauratan Pan Masala",
//   "quantity": "100 g",
//   "price": 250,
//   "location": "temp"
//  },
//  {
//   "category": "Paan Corner",
//   "subCategory": "Paan Masala & Tobacco",
//   "productName": "LIT Premium Rolling Cut Tobacco",
//   "quantity": "1 pack",
//   "price": 449,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Masks & Sanitizers",
//   "productName": "Dettol Hand Sanitizer",
//   "quantity": "1 x 50 ml",
//   "price": 24,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Masks & Sanitizers",
//   "productName": "Dettol Original Alcohol Based Hand Sanitizer",
//   "quantity": "1 x 200 ml",
//   "price": 95,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Masks & Sanitizers",
//   "productName": "Filixtrue Disposable Surgical 3 Ply Mask",
//   "quantity": "1 pack (100 pcs)",
//   "price": 388,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Masks & Sanitizers",
//   "productName": "3M 9513 Respirator K N95 Mask",
//   "quantity": "1 unit",
//   "price": 84,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Antiseptic Liquid",
//   "productName": "Dettol Antiseptic Liquid",
//   "quantity": "1 x 500ml",
//   "price": 235,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Antiseptic Liquid",
//   "productName": "Dettol Surface Disinfection & Personal Hygiene Antiseptic Liquid",
//   "quantity": "1 x 125ml",
//   "price": 80,
//   "location": "temp"
//  },
//  {
//   "category": "Pharma & Wellness",
//   "subCategory": "Antiseptic Liquid",
//   "productName": "Savlon Disinfectant Antiseptic Liquid",
//   "quantity": "1 x 500ml",
//   "price": 177,
//   "location": "temp"
//  }