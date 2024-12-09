import { createContext, useState } from "react";
import { products } from "../assets/assets";
 export const Shopcontext = createContext();

 const ShopcontextProvider = (props)=>{
    const currecny = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
      const [showsearch, setshowsearch] = useState(location.pathname.includes('collection'));

    const value ={
products , currecny , delivery_fee,
search , setsearch, showsearch, setshowsearch
 
    }
return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
 
)
 }
 export default ShopcontextProvider;
