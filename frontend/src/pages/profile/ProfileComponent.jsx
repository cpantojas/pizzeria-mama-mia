import { Button } from 'react-bootstrap';
import {FaSignOutAlt } from 'react-icons/fa';
import './ProfileComponent.css';

export default function ProfileComponent() {
  return (
    <div className="profile-container">
        <div className='profile-left'>
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className="profile-right">
            <h4>Datos del Perfil</h4>
            <p className='name-text'>Cristian Pantoja</p>
            <p className='email-text'>cpsalazar@gmail.com</p>
            <Button variant="dark" className="nav-button">
                <FaSignOutAlt className="button-icon" /> Cerrar Sesión
            </Button>
        </div>
    </div>
  )
}
