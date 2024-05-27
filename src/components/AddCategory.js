import React from 'react'
import { useAuth } from '../store/auth';

export default function AddCategory() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const {productInfo} = useAuth();


  return (
    <div>
         <h1>Number of Categories: {productInfo} </h1>
<div class="py-10 flex justify-center">
  <form onsubmit= {handleSubmit} class="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
    <div class="mb-4">
      <label for="category-name" class="block text-sm font-medium text-gray-700">Category Name</label>
      <input type="text" id="category-name" name="category-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></input>
    </div>
    <div class="mb-4">
      <label for="category-image" class="block text-sm font-medium text-gray-700">Category Image</label>
      <input type="file" id="category-image" name="category-image" accept="image/*" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"></input>
    </div>
    <div class="flex justify-end">
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
    </div>
  </form>
</div>
</div>

  
  )
}
