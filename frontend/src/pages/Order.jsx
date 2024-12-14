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
            <div ley={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-4 items-center'>
              <div className='flex flex-start gap-6 text-sm'>
                <img  className='w-16 sm:w-20'src={item.image[0]} />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity:1</p>

                  </div>
                  <p className='mt-2'> Date: <span className='text-gray-400' >xyz </span> </p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-600 '></p>
                  <p className='text-sm md:text-base'> Ready To Ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                    Track Order
                  </button>
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