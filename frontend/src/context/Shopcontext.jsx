import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
    const currecny = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(location.pathname.includes('collection'));
    const [cartItems, setcartItems] = useState({});

    const addToCart = async (itemid, size) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemid]) {
            if (cartData[itemid][size]) {
                cartData[itemid][size]++;
            } else {
                cartData[itemid][size] = 1;
            }
        } else {
            cartData[itemid] = {};
            cartData[itemid][size] = 1;
        }
        setcartItems(cartData);
    };

    const getCartCount = () => {
        let totalcount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalcount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalcount;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]); // Added dependency to avoid infinite re-renders

    const value = {
        products,
        currecny,
        delivery_fee,
        search,
        setsearch,
        showsearch,
        setshowsearch,
        cartItems,
        addToCart,
        getCartCount
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
