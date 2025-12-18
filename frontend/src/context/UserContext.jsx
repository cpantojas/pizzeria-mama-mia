import { createContext, useState} from "react";
import Swal from 'sweetalert2'

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    // Inicialización (leyendo localStorage)
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    // Si hay token, asumimos true inicialmente
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const logOut = () =>{       
            localStorage.clear();
            setToken(null);
            setUser(null);
            setIsAuthenticated(false);
        }
    
    const logIn = async (jsonUser) =>{    

        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: jsonUser
            });

            //console.log("Request sent with body:", jsonUser);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            //console.log("Login successful:", data);

            if (data.token) {
                setToken(data.token);
                setUser(data.email);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.email);

                setIsAuthenticated(true);

                Swal.fire({
                    title: 'Login exitoso!',
                })
            }

        } catch (error) {
            console.error("Error during login:", error);
            Swal.fire({
                title: 'Error al intentar iniciar sesión!',
            })
            throw error
        }
        
    }

    const register = async (jsonUser) =>{    

        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: jsonUser
            });

            //console.log("Request sent with body:", jsonUser);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            //console.log("Register successful:", data); 

            if (data.token) {
                setToken(data.token);
                setUser(data.email);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.email);

                setIsAuthenticated(true);

                Swal.fire({
                    title: 'Se registró exitósamente!',
                })
            }

        } catch (error) {
            console.error("Error during register:", error);
             Swal.fire({
                title: 'Error al intentar realizar el registro!',
            })
            throw error
        }
        
    }

    const getProfileInfo = async (usertoken) =>{    

        try {
            const res = await fetch('http://localhost:5000/api/auth/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${usertoken}`,
                }
            });

            //console.log("Request sent");
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            //console.log("Profile request OK!:", data);

            if (data.email) {
                setUser(data.email);
                localStorage.setItem('user', data.email);
                console.log("Profile ", isAuthenticated);
            }

        } catch (error) {
            console.error("Error during register:", error);
            throw error
        }
        
    }

    return (
        <UserContext.Provider value={{ token, user, isAuthenticated, logOut, logIn, register, getProfileInfo }}>
        {children}
        </UserContext.Provider>
    );

};

export default UserProvider;