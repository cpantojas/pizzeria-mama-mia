import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatCurrencyCLP } from '../../helpers/formatters';
import { FaPizzaSlice,FaEye,FaShoppingCart } from "react-icons/fa";
import { Button } from 'react-bootstrap';

export default function CardPizza({ desc,id,img,ingredients,name,price }) {
  return (
    <>
        <Card style={{ minWidth: '17rem'}} className="card-pizza" key={id}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title><strong>Pizza {name}</strong></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ height: '14rem',fontSize: '0.8rem' }}>
                    <p>Descripción: </p>
                    <p>{desc}</p>       
                </ListGroup.Item>
                <ListGroup.Item style={{ height: '9.5rem',fontSize: '0.8rem',textAlign: 'center' }}>
                    <p><FaPizzaSlice /> Ingredientes:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {ingredients.map((ingredient, index) => (                      
                            <li key={index}>-{ingredient}</li>
                        ))}
                    </ul> 
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
