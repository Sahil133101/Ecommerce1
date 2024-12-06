import { createContext } from "react";
import { products } from "../assets/assets";
 export const Shopcontext = createContext();

 const ShopcontextProvider = (props)=>{
    const currecny = '₹';
    const delivery_fee = 50;


    const value ={
products , currecny , delivery_fee

    }
return (
    <Shopcontext.Provider value={value}>
        {props.children}
    </Shopcontext.Provider>
 
)
 }
 export default ShopcontextProvider;
