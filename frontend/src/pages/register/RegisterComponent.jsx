import { useState } from "react"
import { Form, Button } from 'react-bootstrap';
import './RegisterComponent.css';

export default function RegisterComponent() {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onEmailChange({target}){
        setEmail(target.value)
    }
    function onPasswordChange({target}){
        setPassword(target.value)
    }
    function onConfirmPasswordChange({target}){
        setConfirmPassword(target.value)
    }

    function validateForm(){
        //campos vacios
        if(!email || !password || !confirmPassword){
            return "Todos los campos son obligatorios"; 
        }   
        //passwords minimo 6 caracteres
        if(password.length < 6 || confirmPassword.length < 6){
            return "La contraseña debe tener al menos 6 caracteres";
        }
        //passwords iguales
        if(password !== confirmPassword){
            return "La contraseña y la confirmación de la contraseña deben ser iguales";
        }
        return ""; //si no hay errores
    }

    const onSubmitHandler = (event)=>{
        event.preventDefault()
        const errorMessage = validateForm();
        if(errorMessage===""){
            setError(errorMessage);
            alert("Los datos de registro son válidos!");
        }else{
            setError(errorMessage);
        }
    }


  return (
    <div className="formRegister">
      <h5 className="mb-4">Formulario de Registro</h5>
      <Form onSubmit={onSubmitHandler}>
        {error!==""? <p className="error">{error}</p> :null}
        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control 
                type="email" 
                placeholder="Ingrese su email" 
                value={email}
                onChange={onEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={onPasswordChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control 
                type="password" 
                placeholder="Repita su contraseña" 
                value={confirmPassword}
                onChange={onConfirmPasswordChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}
