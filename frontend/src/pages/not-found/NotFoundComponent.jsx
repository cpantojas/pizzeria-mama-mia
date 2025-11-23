import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import './NotFoundComponent.css';

export default function NotFoundComponent() {
  return (
    <>
        <div className="notfound-container">
            <h1>La página solicitada no existe.</h1>
            <p>La URL que estas buscando no existe o fue eliminada.</p>
            <img src="./404.jpg" alt="Página no existe" className='img-notfound' />
        </div>
        <Button as={Link} to="/" variant="dark" className='return-home-btn'>Volver al Inicio</Button>
    </>
  )
}
