import { useState } from "react"
import { Form, Button } from 'react-bootstrap';
import './LoginComponent.css';

export default function LoginComponent() {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChange({target}){
        setEmail(target.value)
    }
    function onPasswordChange({target}){
        setPassword(target.value)
    }

    function validateForm(){
        //campos vacios
        if(!email || !password){
            return "Todos los campos son obligatorios"; 
        }   
        //passwords minimo 6 caracteres
        if(password.length < 6){
            return "La contraseña debe tener al menos 6 caracteres";
        }
        return ""; //si no hay errores
    }

    const onSubmitHandler = (event)=>{
        event.preventDefault()
        const errorMessage = validateForm();
        if(errorMessage===""){
            setError(errorMessage);
            alert("Los datos de Login son válidos!");
        }else{
            setError(errorMessage);
        }
    }


  return (
    <div className="formLogin">
      <h5 className="mb-4">Login</h5>
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
          <Form.Label>Password</Form.Label>
          <Form.Control 
                type="password" 
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={onPasswordChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}
