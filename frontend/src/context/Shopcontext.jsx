import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 50;
    const [search, setsearch] = useState('');
    const [showsearch, setshowsearch] = useState(location.pathname.includes('collection'));
    const [cartItems, setcartItems] = useState({});
const navigate = useNavigate();
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
// const getCartAmount = () => {
//     let totalAmount = 0;
//     console.log('Cart Items:', cartItems);  

//     // Iterate through each item in the cart
//     for (const items in cartItems) {
//         // Find the product by matching the id, ensure we convert `items` to a number if it's a string
//         let iteminfo = products.find((product) => product.id === product._id === items);

//         // If the product is found and iteminfo is not undefined
       
//             // Iterate through sizes in cartItems[items]
//             for (const item in cartItems[items]) {
//                 try {
//                     // Ensure the quantity is greater than 0 before adding the amount
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += iteminfo.price * cartItems[items][item];
//                     }
//                 } catch (err) {
//                     console.error('Error in getCartAmount:', err);
//                 }
//             }
        
    
//     }

//     return totalAmount;
// };
const getCartAmount = () => {
    let totalAmount = 0;

    // Log cart items and products for debugging

    // Iterate through each item in the cart
    for (const items in cartItems) {
        // Find the product by ID
        let iteminfo = products.find((product) => product._id === items);

        // If the product is not found, log the error and skip the iteration
        if (!iteminfo) {
           
            continue;  // Skip this item if it's not found
        }

        // Iterate through sizes in cartItems[items]
        for (const size in cartItems[items]) {
            try {
                // Ensure the quantity is greater than 0 before adding the amount
                if (cartItems[items][size] > 0) {
                    totalAmount += iteminfo.price * cartItems[items][size];
                }
            } catch (err) {
                console.error('Error in getCartAmount:', err);
            }
        }
    }

    return totalAmount;
};


    // Logging cart items for debugging
    useEffect(() => {
      
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
        getCartAmount, navigate // New function to get cart amount
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
