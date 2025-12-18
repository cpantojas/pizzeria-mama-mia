import { createContext, useState } from "react";
import { pizzaCart } from "../assets/pizzas";
import Swal from 'sweetalert2'

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

      const checkOut = async (usertoken,usercart) =>{    

        try {
            const res = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${usertoken}`,
                },
                body: JSON.stringify({
                cart: usercart,
                }),
            });

            //console.log("Request sent with body:", usercart);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            //console.log("checkout successful:", data);

            if (data.message === "Checkout successful") {
              Swal.fire({
              title: 'Compra realizada con éxito!',
            })

            }
            
        } catch (error) {
            console.error("Error during checkout:", error);
            throw error
        }
        
    }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, decreaseItem, calculateTotal, checkOut }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;