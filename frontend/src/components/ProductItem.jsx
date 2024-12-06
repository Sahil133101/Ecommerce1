import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom';
import Product from './../pages/Product';
const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(Shopcontext);
  return (
<Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
<div className='overflow-hidden'> 
    <img className="w-43 h-43 hover:scale-110 transition ease-in-out border-4 rounded border-gray-400" src={image[0]}/>
    
</div>
<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm font-medium'>{currency}{price}</p>
</Link>
  )
}

export default ProductItem