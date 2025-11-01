import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/HomeComponent';  
import NavbarComponent from './components/nav/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import RegisterComponent from './components/register/RegisterComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';

function App() {
  return (
    <div className='mainContainer'>
      <nav className="nav">
          <NavbarComponent />
      </nav>  
      <main className="home">
          {/* <HomeComponent/> */}
          {/*NOTA: se debe comentar o descomentar el componente necesario para su revisión/> */}
          {/* <RegisterComponent /> */}
          <LoginComponent />
      </main>
      <footer className="footer">
          <FooterComponent />
      </footer>
    </div>
  )
}

export default App
