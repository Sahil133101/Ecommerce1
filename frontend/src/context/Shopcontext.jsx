import { createContext } from "react";
import { products } from "../assets/assets";
 export const ShopContext = createContext();

 const ShopContextProvider = (props)=>{
    const currecny = '₹';
    const delivery_fee = 50;


    const value ={
products , currecny , delivery_fee

    }
return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
 
)
 }
 export default ShopContextProvider;
