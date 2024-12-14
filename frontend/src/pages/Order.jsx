import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from '../components/Title';
const Order = () => {
  const{products,currency} = useContext(Shopcontext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
<Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div className=''>
        {
          products.slice(1,4).map((item,index)=>(
            <div ley={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-4'>
              <div className='flex flex-start gap-6 text-sm'>
                <img  className='w-16 sm:w-20'src={item.image[0]} />
                <div>
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                </div>
              </div>
              </div>
          ) 
          )
        }

      </div>
    </div>
  )
}

export default Order