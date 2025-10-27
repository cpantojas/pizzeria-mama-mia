import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/HomeComponent';  
import NavbarComponent from './components/nav/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';

function App() {
  return (
    <div className='mainContainer'>
      <nav className="nav">
          <NavbarComponent />
      </nav>  
      <main className="home">
          <HomeComponent />
      </main>
      <footer className="footer">
          <FooterComponent />
      </footer>
    </div>
  )
}

export default App
