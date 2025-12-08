import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatCurrencyCLP } from '../../helpers/formatters';
import { FaPizzaSlice,FaEye,FaShoppingCart } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import { useNavigate } from 'react-router';

export default function CardPizza({ desc,id,img,ingredients,name,price }) {

    // Inicializamos la función de navegación
    const navigate = useNavigate();

    const {addItem} = useContext(CartContext);

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
                        <Button variant="light" className="button-card" onClick={() => { 
                                navigate('/pizzas/' + id); 
                            }}>
                        Ver Más  <FaEye className="button-icon-card" /> 
                        </Button>
                        <Button variant="dark" className="button-card" onClick={() => { 
                                addItem(id, desc, img, ingredients, name, price); 
                                navigate('/cart'); 
                            }}
                        >
                            Añadir  <FaShoppingCart className="button-icon-card" />
                        </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </>
  )
}
