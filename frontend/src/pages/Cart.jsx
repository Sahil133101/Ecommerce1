import React, { useContext, useState, useEffect } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from './../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(Shopcontext);
  const [cartData, setcartData] = useState([]);

  // Sync cartItems with local state cartData
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size]
          });
        }
      }
    }
    setcartData(tempData);
  }, [cartItems]);

  // Handle quantity change for specific item and size
  const handleQuantityChange = (itemId, size, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (!quantity || quantity < 1) return; // Prevents zero or blank values
    updateQuantity(itemId, size, quantity); // Call updateQuantity with itemId, size, and quantity
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            if (!productData) return null; // Skip if no product found

            return (
              <div key={`${item._id}-${item.size}`} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img 
                    className='w-16 sm:w-20' 
                    src={productData.image && productData.image[0] ? productData.image[0] : '/default-image.jpg'} 
                    alt={productData.name} 
                  />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'> {productData.name} - Size: {item.size}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p> {currency}{productData.price}</p>
                    </div>
                  </div>
                </div>

                <input  
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                  type='number' 
                  min={1} 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)} 
                />

                <img 
                  onClick={() => updateQuantity(item._id, item.size, 0)} 
                  className='w-4 mr-4 cursor-pointer' 
                  src={assets.bin_icon} 
                  alt='Remove item' 
                />
              </div>
            );
          })
        }
      </div>
      <div className='flex-justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>

        </div>

      </div>
    </div>
  );
}

export default Cart;
