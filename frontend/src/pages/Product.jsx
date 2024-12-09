import React from 'react'
import { Shopcontext } from '../context/Shopcontext';
import { useContext, useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

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
      {/* Product review and description */}
      <div className=' mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>
            Description

          </b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam temporibus dignissimos officiis nulla adipisci nam necessitatibus hic autem, nesciunt soluta, id architecto. Vero rerum minus consequuntur impedit non nostrum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla accusantium explicabo, in totam magnam hic ipsa et consequatur est vitae cumque, numquam laborum dolore voluptatum voluptatibus, facilis ex tempore.</p>

        </div>

      </div>
      {/* display related products */}
      {/* <RelatedProducts category={productData.category}/> */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


    </div>
  ) : <div className='opacity-0'> 

  </div>
}

export default Product