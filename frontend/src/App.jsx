import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router';
import HomeComponent from './pages/home/HomeComponent.jsx';  
import NavbarComponent from './components/nav/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import RegisterComponent from './pages/register/RegisterComponent.jsx';
import LoginComponent from './pages/login/LoginComponent.jsx';
import CartComponent from './pages/cart/CartComponent.jsx';
import PizzaComponent from './pages/pizzaviewer/pizzaComponent.jsx';
import NotFoundComponent from './pages/not-found/NotFoundComponent.jsx';
import ProfileComponent from './pages/profile/ProfileComponent.jsx';
import { useContext } from "react"
import { UserContext } from './context/UserContext.jsx';

function App() {

  const { isAuthenticated } = useContext(UserContext);
  console.log("isAuthenticated in App.jsx:", isAuthenticated);

  return (
    <div className='mainContainer'>
      <NavbarComponent />
      <main className="home">
          <Routes>
            <Route path='/' element={<HomeComponent/>} />
            <Route path='/register' element={!isAuthenticated ? <RegisterComponent/> : <Navigate to="/" />} />
            <Route path='/login' element={!isAuthenticated ? <LoginComponent/> : <Navigate to="/" />} />
            <Route path='/cart' element={<CartComponent />} />
            <Route path='/pizzas/:id' element={<PizzaComponent/>} />
            <Route path='/profile' element={isAuthenticated ? <ProfileComponent /> : <Navigate to="/login" />} />
            <Route path='/404' element={<NotFoundComponent/>} />
            <Route path="*" element={<Navigate to="/404" replace />} />        
          </Routes>
      </main>
      <footer className="footer">
          <FooterComponent />
      </footer>
    </div>
  )
}

export default App
