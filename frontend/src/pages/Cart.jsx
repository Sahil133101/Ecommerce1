import React from 'react'
import { Shopcontext } from '../context/Shopcontext'

const Cart = () => {

  const {products, currency, cartItems} = useContext(Shopcontext);

  const [cartData, setcartData] = useState([]);

  useEffect(()=>{
const tempData = [];
for(const items in cartItems){
  for(const item in cartItems[items]){
    if(cartItems[items][item]>0){
      tempData.push({
        _id: items,
        size : items,
        quantity: cartItems[items][item]
      })

    }
  }
  console.log(tempData)
}
  },[cartItems])
  return (
    <div>Cart</div>
  )
}

export default Cart