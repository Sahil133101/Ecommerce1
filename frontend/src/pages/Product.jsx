import React from 'react'
import { Shopcontext } from '../context/Shopcontext';
import { useContext, useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const Product = () => {
  
  const {productId} = useParams();
  const {products,currecny} = useContext(Shopcontext);
  const [productData, setproductData]= useState(false);
  const [image, setimage]= useState('');

const fetchProductData = async() =>{
products.map((item)=>{
  if(item._id === productId){
    setproductData(item);
    setimage(item.image);
    
    return null;
  }
 
})
}

useEffect(()=>{
  fetchProductData();

},[productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
{/* product images */}
        <div className='flex-1 flex flex-col-reserve gap-3 sm:flex-row w-45 h-45'>
          {/* <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>


          </div> */}
<div className=' sm:w-[50%]'>
  <img className='w-25 h-25' src={image} />

</div>
{/* product info */}
<div className='flex-1'>
  <h1 className='font-medium text-2xl mt-2'>
    {productData.name}
</h1>
<div className="flex items-center gap-1 mt-2 ">
  <img src={assets.star_icon} alt="" className="w-3 5" />
  <img src={assets.star_icon} alt="" className="w-3 5" />
  <img src={assets.star_icon} alt="" className="w-3 5" />
  <img src={assets.star_icon} alt="" className="w-3 5" />
  <img src={assets.star_dull_icon} alt="" className="w-3 5" />

  
</div>
<p className='mt-5 text-3xl font-medium'> {currecny}{productData.price}</p>
<p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>

<button className='bg-black text-white mt-5  px-8 py-3 text-sm active:bg-gray-700'>
ADD TO CART
</button>
<hr className='text-sm text-gray-500 mt-5 flex flex-col gap-1'/>
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
<p>100% Original Product</p>
<p>Cash on delivery is available for this product</p>
<p>Easy Return and Exchange policy with in 7 Days.</p>
</div>


</div>
        </div>
      </div>

    </div>
  ) : <div className='opacity-0'> 

  </div>
}

export default Product