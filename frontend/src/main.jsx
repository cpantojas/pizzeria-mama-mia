import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'
import CartProvider from './context/CartContext.jsx'
import PizzaProvider from './context/PizzaContext.jsx'
import UserProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <PizzaProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  </StrictMode>,
)
