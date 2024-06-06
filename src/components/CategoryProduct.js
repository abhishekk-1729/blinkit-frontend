import {React,useEffect,useState} from 'react'
import { Link, useParams ,useLocation,useNavigate} from 'react-router-dom'
import ProductDesc from "./ProductDesc";
import { useAuth } from '../store/auth';


export default function CategoryProduct() {


    const categories = ["Paan Corner","Cold Drink & Juices","Snacks & Munchies","Breakfast & Instant Food","Sweet Tooth","Vegetable & Fruits","Pharma & Wellness"];

    const params = useParams();
    const {productInfo,setProductInfo} = useAuth();
    const [subCat, setSubCat] = useState([...new Set(productInfo.filter(p => p.category === params.id).map(p => p.subCategory))][0]);

    const {selectedProducts,setSelectedProducts} = useAuth();


  return (
    <>

<div  className='border-b-2 border-black-5'>
      <div class="mx-16 my-3 flex justify-between ">

      {categories.map(cur => (
                  
        <Link to={{pathname: `/allProduct/${cur}`
      }} ><button onClick={()=>{setSubCat([...new Set(productInfo.filter(p => p.category === cur).map(p => p.subCategory))][0]);}}>
          {cur}
          </button></Link>
          
      ))}
        <div>
        More
        </div>


      </div>
    </div>

    <div className='flex justify-center border-l-2 border-b-2 border-r-2  mx-16'>
    <div className='flex flex-col pt-2 w-1/5 border-black-5'>
      {[...new Set(productInfo.filter(p => p.category === params.id).map(p => p.subCategory))].map(cur=>{
        
        const product = productInfo.find(p => p.subCategory === cur);

        return (
          <>

            <button onClick={()=>{setSubCat(cur);}} className={(subCat==cur)?'flex p-2 items-center gap-1 border-l-4 border-[#23963F] bg-[#EBFEEF]':"flex p-2 items-center gap-1"}>
              <div className='rounded-xl bg-[#F6FEF8]'>
                <img src={`/production/subCategory/${product.subCategoryNumber}.png`} height={"10px"} width={"40px"}alt="" />
                </div>
                <div>{cur}</div>
            </button>
          </>
        )
      })}
    </div>

    <div className='flex flex-col w-4/5 border-l-2  border-black-5'>
        <div className='p-2'>
              Buy {subCat} online
        </div>
    <div className=' bg-[#EFF2F7]'>
      
      <div className="grid grid-cols-5 gap-2 p-2">
      {productInfo.filter(p => p.subCategory === subCat).map(product => (
                 
                   
      <ProductDesc _id={product._id} name={product.productName} price = {product.price} description={product.quantity} picture={product.productImage}
      addToWhat={selectedProducts} setAddToWhat={setSelectedProducts}
      />
      ))}

      </div>
      </div>
      </div>
   </div>
    </>
  )
}

