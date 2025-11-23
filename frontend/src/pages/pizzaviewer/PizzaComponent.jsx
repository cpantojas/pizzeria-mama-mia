import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import { formatCurrencyCLP } from '../../helpers/formatters';
import { FaPizzaSlice,FaShoppingCart } from "react-icons/fa";
import './pizzaComponent.css';

export default function PizzaComponent() {
    const [pizza, setPizzas] = useState([]);
    //leyendo .env para obtener URL de la API
    const urlAPI = import.meta.env.VITE_API_URL;
  
    //funcion patra obtener datos de la API
    async function fetchPizza(idpizza) {
      try {
        const response = await fetch(urlAPI + '/' + idpizza);
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Se produjo un error al obtener datos de la API:', error);
      }
    }
  
    //llamada a funcion para cargar las pizzas en el montaje del componente
    useEffect(() => {
      fetchPizza('p001');
    }, []);
    

  return (
    <>
      <div className='pizzadetail-container'>
        <Container className="my-5">
            <Row>
                {/* Columna de la Imagen */}
                <Col className="mb-3 mb-md-0">
                <Image 
                    src={pizza.img} 
                    alt={pizza.name}
                    rounded // Añade las esquinas redondeadas
                    fluid   // Hace que la imagen sea responsive (se ajuste al ancho del contenedor)
                />
                </Col>

                {/* Columna del Contenido */}
                <Col className="ps-md-4 text-start">
                
                {/* Título */}
                <h3 className="fw-bold">Pizza {pizza.name}</h3>
                
                {/* Precio */}
                <h4 className="fw-bold text-dark my-3">{formatCurrencyCLP(pizza.price)}</h4>
                
                {/* Ingredientes */}
                <div className="mb-3 d-flex align-items-left">
                    <div>
                    <strong className="me-1"><FaPizzaSlice /> Ingredientes:</strong>
                    <span>{pizza?.ingredients?.join(", ")}</span>
                    </div>
                </div>

                {/* Descripción */}
                <h5 className="fw-bold mt-4 mb-2">Descripción</h5>
                <p>
                    {pizza.desc}
                </p>
                
                {/* Botón de Añadir */}
                <Button variant="dark" className="button-card">
                    Añadir  <FaShoppingCart className="button-icon-card" />
                </Button>

                </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}
