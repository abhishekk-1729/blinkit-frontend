import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './Layout';


export default function Foot() {

  const categories = ["Paan_corner","dairyBreadEggs","fruits&veg","Cold Drink And Juices","snacks&munchies","breakfast_instant","sweettooth","bakery_biscuits","teaCoeffe","attaRice","masala","sauces","chicken","organic&health","babyCare","pharma","cleaning","home","personal_care","pet_care"];
  const links = ["About","Careers","Blog","Press","Lead","Value","Privacy","Terms","FAQs","Security","Mobile","Contact","Partner"
  ,"Express"
  ,"Seller"
  ,"Warehouse"
  ,"Deliver"
  ,"Resources"]
  return (
    <Layout>
    <div className=' my-6'>
            <div className='flex '>
              <div className='flex flex-col w-2/6'>
                <div className='my-4'>Useful Links</div>
        
              <div className='grid grid-cols-3 gap-2'>{
              links.map((cur)=>{
                  return (
                    <>
                    <div>{cur}</div>
                    </>
                  )
              })}
            </div>
            </div>
            <div className='flex flex-col w-4/6'>
              <div className='flex gap-2 my-4'>
                <div>Categories</div>
                <div className='text-[#328616]'>see all</div>
              </div>
            <div className='my-2 grid grid-cols-3 gap-2'>{
              categories.map((cur)=>{
                  return (
                    <>
                    <Link to={"/allProduct/"+cur}>
                    <div>{cur}</div>
                    </Link>
                    </>
                  )
              })}
            </div>
            </div>
            </div>

    <div className='flex gap-3 my-6'>
      <div className='w-1/3'>©Quick Mart Commerce Private Limited (formerly known as QuickIt India Private Limited), 2016-2024</div>
      <div className='flex justify-center items-center gap-2 w-1/3'>
        <div>Download App</div>
        <img src="/utils/appstore.png"  height={"40px"} width = {"90px"} alt="" />
        <img src="/utils/playstore.png" height={"40px"} width = {"90px"} alt="" />
      </div>
      <div className='flex justify-center items-center gap-3 ml-5 w-1/3' >
        <img src="/svg/fb.svg" alt="" />
        <img src="/svg/twitter.svg" alt="" />
        <img src="/svg/linkedin.svg" alt="" />
        <img src="/svg/instagram.svg" alt="" />
        <img src="/svg/thread.svg" alt="" />
      
      </div>
    </div>
    <div className='px-2 mb-3'>“Quick Mart” is owned & managed by "Quick Mart Commerce Private Limited" (formerly known as QuickIt India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “QUICKER.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
    </div>
    </div>
    </Layout>
  )

}
