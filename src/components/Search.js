import React from 'react'
import { useAuth } from '../store/auth'
import ProductDesc from './ProductDesc';



export default function Search() {

    const {input,productInfo,selectedProducts,setSelectedProducts} = useAuth();
    return (
        <div className='m-20 min-h-[30rem]'>
        {input?
        <div className="grid grid-cols-6 gap-2 p-2">
        {productInfo.filter(product => product.productName.toLowerCase().includes(input.toLowerCase())).map(product => (
                    
                    
        <ProductDesc _id={product._id} name={product.productName} price = {product.price} description={product.quantity} picture={product.productImage}
        addToWhat={selectedProducts} setAddToWhat={setSelectedProducts}
        />
        ))}
        </div>
        :
        <div className='flex justify-center items-center p-20 m-10'>
            <img src="/utils/no_results.jpg" height="500px" width="500px" alt="" />
        </div>}

       
        </div>
  )
}
