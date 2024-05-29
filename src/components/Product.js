import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {

    const [data,setData] = useState({});
    const params = useParams();
    const id=params.id;

    const getProductInfo = async() => {
        const response = await fetch(`https://abhishek.nssiitd.in/ecommerce//api/products/getAllProductsById/${id}`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            },
        });

        const res_data = await response.json();
        if(response.ok){
            console.log(res_data[0]);
            setData(res_data[0]);
        }
        else{
            console.log("tmkc")
        }

    }

    useEffect(()=>{
        getProductInfo();
    },[])
  return (
    <div>
        {data.imgage}

      <div class="bg-black-100 light:bg-black-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-white-200 light:bg-white-500 mb-4">
                    <img class="w-full h-full object-cover" src={data.picture} alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-black-900 dark:bg-black-600 text-black py-2 px-4 rounded-full font-bold hover:bg-black-800 dark:hover:bg-black-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-black-800 dark:text-black mb-2">{data.name}</h2>
                <p class="text-black-600 dark:text-black-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-black-700 dark:text-black-300">Price:</span>
                        <span class="text-black-600 dark:text-black-300">${data.price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-black-700 dark:text-black-300">Availability:</span>
                        <span class="text-black-600 dark:text-black-300">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-black-700 dark:text-black-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-black-800 dark:bg-black-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-black-700 dark:text-black-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-black-300 dark:bg-black-700 text-black-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-black-400 dark:hover:bg-black-600">S</button>
                        <button class="bg-black-300 dark:bg-black-700 text-black-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-black-400 dark:hover:bg-black-600">M</button>
                        <button class="bg-black-300 dark:bg-black-700 text-black-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-black-400 dark:hover:bg-black-600">L</button>
                        <button class="bg-black-300 dark:bg-black-700 text-black-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-black-400 dark:hover:bg-black-600">XL</button>
                        <button class="bg-black-300 dark:bg-black-700 text-black-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-black-400 dark:hover:bg-black-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-black-700 dark:text-black-300">Product Description:</span>
                    <p class="text-black-600 dark:text-black-300 text-sm mt-2">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}
