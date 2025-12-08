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

  const { token } = useContext(UserContext);


  return (
    <div className='mainContainer'>
      <NavbarComponent />
      <main className="home">
          {/* NOTA PARA EL REVISOR: Se debe pasar por el login para pasar el token a true 
          (solamente con ingresar email y password que pasen validacion: email no vacio y password minimo 6 caracteres). 
          Se tuvo que hacer esto para cumplir con la proteccion a la ruta profile, pues si se dejaba por defecto 
          el token en true, al ingresar directo a profile desde la barra de navegacion (haciendo logout para dejar token en false),
          se recargaba la pagina,el token se pasaba a true y permitia el acceso*/}
          <Routes>
            <Route path='/' element={<HomeComponent/>} />
            <Route path='/register' element={!token ? <RegisterComponent/> : <Navigate to="/" />} />
            <Route path='/login' element={!token ? <LoginComponent/> : <Navigate to="/" />} />
            <Route path='/cart' element={<CartComponent />} />
            <Route path='/pizzas/:id' element={<PizzaComponent/>} />
            <Route path='/profile' element={token ? <ProfileComponent /> : <Navigate to="/login" />} />
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
