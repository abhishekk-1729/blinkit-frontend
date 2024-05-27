import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../store/auth';


export default function AddProduct() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const {productInfo} = useAuth();
  return (
    <div>
        <h1>Number of Products: {productInfo} </h1>
<div className="bg-gray-100 py-10 flex justify-center">
   
  <form onSubmit={handleSubmit} class="bg-white p-6 rounded-md shadow-md w-full max-w-md">
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <input type="text" id="category" name="category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="subcategory" class="block text-sm font-medium text-gray-700">SubCategory</label>
      <input type="text" id="subcategory" name="subcategory" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="productName" class="block text-sm font-medium text-gray-700">Product Name</label>
      <input type="text" id="productName" name="productName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
      <input type="text" id="quantity" name="quantity" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
      <input type="number" id="price" name="price" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
      <input type="text" id="location" name="location" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="productImage" class="block text-sm font-medium text-gray-700">Product Image</label>
      <input type="file" id="productImage" name="productImage" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"></input>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
    </div>
  </form>
</div>
</div>
  )
}
