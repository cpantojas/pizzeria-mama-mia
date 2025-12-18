import { useContext, useEffect } from "react"
import { Button } from 'react-bootstrap';
import {FaSignOutAlt } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext.jsx';
import './ProfileComponent.css';

export default function ProfileComponent() {

  const { token, user, getProfileInfo, logOut } = useContext(UserContext);

   useEffect(() => {
      if (token !== null) {
          getProfileInfo(token);
      }
    }, []);

  return (
    <div className="profile-container">
        <div className='profile-left'>
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className="profile-right">
            <h4>Datos del Perfil</h4>
            <p className='email-text'>{user}</p>
            <Button variant="dark" className="nav-button" onClick={logOut}>
                <FaSignOutAlt className="button-icon" /> Cerrar Sesión
            </Button>
        </div>
    </div>
  )
}
