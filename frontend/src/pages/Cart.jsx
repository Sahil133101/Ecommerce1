import React from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useContext, useState, useEffect} from 'react';
import Title from '../components/Title';

const Cart = () => {

  const { products, currecny, cartItems } = useContext(Shopcontext);

  const [cartData, setcartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: items,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setcartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            // Check if the productData exists
            if (!productData) return null;  // Skip if no product found

            return (
              <div key={index} className='pay-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  {/* Fallback image if productData.image[0] is not available */}
                  <img className='w-16 sm:w-20' src={productData.image && productData.image[0] ? productData.image[0] : '/default-image.jpg'} alt={productData.name}/>
                </div>
                <p className='text-xs sm:text-lg font-medium'> {productData.name}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Cart;
