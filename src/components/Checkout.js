import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useAuth } from '../store/auth'
import { Outlet } from 'react-router-dom';


export default function Checkout() {

  const {selectedProducts,setSelectedProducts,currentAddress,phone} = useAuth();
  const [productInfos,setProducstInfos] = useState([]);
  
  const fetchSelectedProducts = async () => {
    try {
        // console.log(selectedProducts);
        const uniqueIds = [... new Set(selectedProducts)];
        const id = uniqueIds.join(",");
        // console.log("id",id);
        const response = await fetch(`https://abhishek.nssiitd.in/ecommerce/api/products/getAllProductsById/${id}`,{method:"GET"});
        if(response.ok){
            const res_data = await response.json();
            // console.log("hi",res_data);
            setProducstInfos(res_data);}
        }
    catch (error) {
        
        console.log(error)
  }
}

  useEffect(()=>{
    fetchSelectedProducts();
  },[selectedProducts])

  function moreOfThisProduct(id) {
    setSelectedProducts(prev => [...prev,id]);
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts( prev => {
        return prev.filter((value,index) => index !== pos);
      });
    }
  }

  const deliveryPrice = 5;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = parseInt(productInfos.find(p => p._id === id)?.price) || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;
  
  const d = new Date();
  const handleSubmit = async(data) => {
    // console.log("data89",data);
    
    try {
        const response = await fetch("https://abhishek.nssiitd.in/ecommerce/api/checkout/final",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({products:data,time:d,phone:phone,address:currentAddress})
        })

        // if (response.status === 303) {
        //   // Redirect to the URL
          
        //   window.location.href = response.data.url;
        // }

        if(response.ok){
        const res_data = await response.json();
        window.location.href = res_data.url;
        // console.log(res_data.url);
        
    }

    } catch (error) {
        console.log(error);
    }
  }
 

  return (
    <Layout>
      {!productInfos.length && (
        <div className='flex w-full justify-center'>No Products added in the cart</div>
      )}
   {productInfos.length!=0 && productInfos.map(productInfo => {
        const amount = selectedProducts.filter(id => id === productInfo._id).length;
        if (amount === 0) return;
        return (
        <div className="flex mb-5 items-center" key={productInfo._id}>
          <div className="bg-gray-100 p-3 rounded-xl shrink-0" style={{boxShadow:'inset 1px 0px 10px 10px rgba(0,0,0,0.1)'}}>
            <img className="w-24" src={`/production/${productInfo.productImage}`} alt=""/>
          </div>
          <div className="pl-4 items-center">
            <h3 className="font-bold text-lg">{productInfo.name}</h3>
            <p className="text-sm leading-4 text-gray-500">{productInfo.description}</p>
            <div className="flex mt-1">
              <div className="grow font-bold">${productInfo.price}</div>
              <div>
                <button onClick={() => lessOfThisProduct(productInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                <span className="px-2">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button onClick={() => moreOfThisProduct(productInfo._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
              </div>
            </div>
          </div>
        </div>
      )})}

      
       {productInfos.length!=0&&<form onSubmit={(e)=>{e.preventDefault(); handleSubmit(selectedProducts.join(','))}}>
        
        <div className="mt-8">
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
            <h3 className="font-bold">${subtotal}</h3>
          </div>
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Delivery:</h3>
            <h3 className="font-bold">${deliveryPrice}</h3>
          </div>
          <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
            <h3 className="grow font-bold text-gray-400">Total:</h3>
            <h3 className="font-bold">${total}</h3>
          </div>
        </div>
        <input type="hidden" name="products" value={selectedProducts.join(',')}/>
        <button type="submit" className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay ${total}</button>
      </form>
      }
      
    </Layout>
  )
}
