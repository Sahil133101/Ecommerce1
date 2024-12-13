import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(location.pathname.includes('collection'));
    const [cartItems, setcartItems] = useState({});

    // Function to add items to cart
    const addToCart = (itemid, size) => {
        setcartItems((prevCartItems) => {
            const cartData = { ...prevCartItems };

            if (cartData[itemid]) {
                cartData[itemid][size] = (cartData[itemid][size] || 0) + 1;
            } else {
                cartData[itemid] = { [size]: 1 };
            }

            return cartData;
        });
    };

    // Function to get the total item count in the cart
    const getCartCount = () => {
        let totalcount = 0;

        Object.values(cartItems).forEach((item) => {
            Object.values(item).forEach((quantity) => {
                if (typeof quantity === 'number' && quantity > 0) {
                    totalcount += quantity;
                }
            });
        });

        return totalcount;
    };

    // Function to update quantity in the cart
    const updateQuantity = (itemid, size, quantity) => {
        setcartItems((prevCartItems) => {
            if (quantity <= 0) {
                return removeItemFromCart(prevCartItems, itemid, size);
            }

            const cartData = { ...prevCartItems };

            if (cartData[itemid]) {
                cartData[itemid][size] = quantity;
            } else {
                cartData[itemid] = { [size]: quantity };
            }

            return cartData;
        });
    };

    // Function to remove item from cart
    const removeItemFromCart = (cartData, itemid, size) => {
        const updatedCartData = { ...cartData };

        if (updatedCartData[itemid] && updatedCartData[itemid][size]) {
            delete updatedCartData[itemid][size];

            if (Object.keys(updatedCartData[itemid]).length === 0) {
                delete updatedCartData[itemid];
            }
        }

        return updatedCartData;
    };

    const removeItem = (itemid, size) => {
        setcartItems((prevCartItems) => removeItemFromCart(prevCartItems, itemid, size));
    };

    // Logging cart items for debugging
    useEffect(() => {
        console.log('Cart Items:', cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setsearch,
        showsearch,
        setshowsearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        removeItem, 
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
