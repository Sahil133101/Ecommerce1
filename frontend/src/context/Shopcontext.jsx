import { createContext, useState } from "react";
import { products } from "../assets/assets";
 export const Shopcontext = createContext();

 const ShopcontextProvider = (props)=>{
    const currecny = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
    const[showseach , setshowseach] = useState(true);

    const value ={
products , currecny , delivery_fee,
search , setsearch, showseach, setshowseach
 
    }
return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
 
)
 }
 export default ShopcontextProvider;
