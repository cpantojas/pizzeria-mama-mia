import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatCurrencyCLP } from '../../helpers/formatters';
import { FaPizzaSlice,FaEye,FaShoppingCart } from "react-icons/fa";
import { Button } from 'react-bootstrap';

export default function CardComponent({ name, price, ingredients, img }) {
  return (
    <>
        <Card style={{ width: '18rem'}} className="card-pizza">
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title><strong>Pizza {name}</strong></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ height: '6rem',fontSize: '0.8rem' }}>
                    <p>Ingredientes: </p>
                    <FaPizzaSlice /> {ingredients.join(', ')}        
                </ListGroup.Item>
                <ListGroup.Item><strong><h5>Precio: {formatCurrencyCLP(price)}</h5></strong></ListGroup.Item>
                <ListGroup.Item>
                    <div className="button-group-card">
                        <Button variant="light" className="button-card">
                        Ver Más  <FaEye className="button-icon-card" /> 
                        </Button>
                        <Button variant="dark" className="button-card">
                            Añadir  <FaShoppingCart className="button-icon-card" />
                        </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </>
  )
}
