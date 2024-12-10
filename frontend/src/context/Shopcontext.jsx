import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
 export const Shopcontext = createContext();

 const ShopcontextProvider = (props)=>{
    const currecny = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
      const [showsearch, setshowsearch] = useState(location.pathname.includes('collection'));
const [cartItems, setcartItems] = useState({});

const addToCart = async (itemid, size) =>{

    let cartData = structuredClone(cartItems);

    if(cartData[itemid]){
        if(cartData[itemid][size]){
            cartData[itemid][size]++;

        }
        else {
            cartData[itemid][size] = 1;
        }

    }
    else {
        cartData[itemid] = {};
        cartData[itemid][size] = 1;

    }
    setcartItems(cartData);


}

useEffect (() =>{
    console.log(cartItems);
})
    const value ={

products , currecny , delivery_fee,
search , setsearch, showsearch, setshowsearch,
cartItems , addToCart
 
    }
return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
 
)
 }
 export default ShopcontextProvider;
