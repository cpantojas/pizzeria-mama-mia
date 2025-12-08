import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    {/* NOTA PARA EL REVISOR: Se debe pasar por el login para pasar el token a true 
    (solamente con ingresar email y password que pasen validacion: email no vacio y password minimo 6 caracteres). 
    Se tuvo que hacer esto para cumplir con la proteccion a la ruta profile, pues si se dejaba por defecto 
    el token en true, al ingresar directo a profile desde la barra de navegacion (haciendo logout para dejar token en false),
    se recargaba la pagina,el token se pasaba a true y permitia el acceso*/}

    // Intentamos obtener el token guardado (en localstorage se guarda como string)
    const rawSavedToken = localStorage.getItem('token');
    const savedToken = rawSavedToken === 'true' ? true : false;
  
    const [token, setToken] = useState(savedToken);

    const logOut = () =>{       
            setToken(false);
            localStorage.setItem('token', false);
        }
    
    const logIn = () =>{       
            setToken(true);
            localStorage.setItem('token', true);
        }

    return (
        <UserContext.Provider value={{ token, setToken, logOut, logIn }}>
        {children}
        </UserContext.Provider>
    );

};

export default UserProvider;