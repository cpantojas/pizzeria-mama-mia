import { createContext, useState } from "react";
import { pizzaCart } from "../assets/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(pizzaCart);

      const addItem = (id, desc = "", img = "", ingredients = [], name = "", price = 0) => {
        const itemInCart = cart.find((cartItem) => cartItem.id === id);
        if (itemInCart) {
          const updatedCart = cart.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, { id, desc, img, ingredients, name, price, count: 1 }]);
        }
          
      };

      // const increaseItem = (id) =>{
      //   console.log(id);
      //     const updatedCart = cart
      //     .map(cartItem => 
      //         cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem        
      //     );
      //     setCart(updatedCart);
      // }
  
      const decreaseItem = (id) =>{
          const updatedCart = cart
          .map(cartItem => 
              cartItem.id === id ? { ...cartItem, count: cartItem.count - 1 } : cartItem        
          )
          .filter((cartItem) => cartItem.count > 0);
          setCart(updatedCart);
      }
  
      const calculateTotal = (cart) => {
          let sumatotal =0;
          cart.forEach((item) => {
          sumatotal += item.price * item.count;
          });
          return sumatotal;
      }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, decreaseItem, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;