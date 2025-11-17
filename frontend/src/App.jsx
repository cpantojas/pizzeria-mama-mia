import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/HomeComponent';  
import NavbarComponent from './components/nav/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import RegisterComponent from './components/register/RegisterComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import CartComponent from './components/cart/CartComponent.jsx';
import PizzaComponent from './components/pizzaviewer/pizzaComponent.jsx';

function App() {
  return (
    <div className='mainContainer'>
      <NavbarComponent />
      <main className="home">
          {/*NOTA: se debe comentar o descomentar el componente necesario para su revisión/> */}
          {/* <HomeComponent/> */}
          {/* <RegisterComponent /> */}
          {/* <LoginComponent/> */}
          {/* <CartComponent /> */}
          <PizzaComponent/>
      </main>
      <footer className="footer">
          <FooterComponent />
      </footer>
    </div>
  )
}

export default App
