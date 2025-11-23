import { Button } from 'react-bootstrap';
import { FaHome, FaUser, FaShoppingCart,FaFileSignature,FaSignOutAlt } from 'react-icons/fa';
import { formatCurrencyCLP } from '../../helpers/formatters';
import { Link } from 'react-router';

export default function NavbarComponent() {
    const total = 25000;
    const token = true;

    const unLoggedUserMenu = (
        <>  
            <Button as={Link} to="/login" variant="dark" className="nav-button">
                <FaUser className="button-icon" /> Login
            </Button>
            <Button as={Link} to="/register" variant="dark" className="nav-button">
                <FaFileSignature className="button-icon" /> Register
            </Button>
        </>
        
    )

    const LoggedUserMenu = (
        <>  
            <Button as={Link} to="/profile" variant="dark" className="nav-button">
                <FaUser className="button-icon" /> Profile
            </Button>
            <Button as={Link} to="/login" variant="dark" className="nav-button">
                <FaSignOutAlt className="button-icon" /> Logout
            </Button>
        </>
        
    )

    return (
        <>
            <div className="navbar-container">
                <div className="navbar-left">
                    <img src="/pizza-logo.png" alt="Pizzería Mamma Mía" className='logo'/>
                    <span className="navbar-brand">Pizzería Mamma Mia!</span>
                    <div className="button-group">
                    <Button as={Link} to="/" variant="dark" className="nav-button">
                        <FaHome className="button-icon" /> Home
                    </Button>
                    { token ? LoggedUserMenu : unLoggedUserMenu }
                    </div>
                </div>
                <div className="navbar-right">
                    <Button as={Link} to="/cart" variant="dark" className="cart-total">
                        <FaShoppingCart className="cart-icon" /> Total: {formatCurrencyCLP(total)}
                    </Button>
                </div>
            </div>
        </>
    )
}
