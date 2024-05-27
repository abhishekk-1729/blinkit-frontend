import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='m-5 p-5'>

        <div className='flex justify-start gap-8'>

             <Link to ={"/admin/addProduct"}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Add Product</button></Link>
            <Link to ="/admin/addCategory"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Add Category</button></Link>
            <Link to ="/admin/addSubCategory"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Add Sub Category</button></Link>
             

        </div>
      <Outlet/>
    </div>
  )
}
