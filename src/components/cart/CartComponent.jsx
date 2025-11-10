import { useState } from "react"
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { pizzaCart } from "../../assets/pizzas"
import "./cartComponent.css"

export default function CartComponent() {
    const [cart, setCart] = useState(pizzaCart);

    const addItem = (id) =>{
        const updatedCart = cart
        .map(cartItem => 
            cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem        
        );
        setCart(updatedCart);
    }

    const decreaseItem = (id) =>{
        const updatedCart = cart
        .map(cartItem => 
            cartItem.id === id ? { ...cartItem, count: cartItem.count - 1 } : cartItem        
        )
        .filter((cartItem) => cartItem.count > 0);
        setCart(updatedCart);
    }

    let sumatotal =0;
    cart.forEach((item) => {
        sumatotal += item.price * item.count;
    });


    return (
        <>
            <Container className="order-details-container p-4">
                <h3 className="mb-4">Detalles del pedido:</h3>

                {cart.map((pizza) => (
                    <Row key={pizza.id} className="align-items-center mb-3 order-item">
                        <Col>
                            <Image src={pizza.img} className="product-image" />
                        </Col>
                        <Col>
                            <span className="product-name">{pizza.name}</span>
                        </Col>
                        <Col className="text-end">
                            <span className="product-price">${pizza.price.toLocaleString('es-CL')}</span>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <Button variant="danger" size="sm" className="quantity-btn me-1" onClick={() => decreaseItem(pizza.id)}>-</Button>
                            <span className="quantity-display mx-1">{pizza.count}</span>
                            <Button variant="primary" size="sm" className="quantity-btn ms-1" onClick={() => addItem(pizza.id)}>+</Button>
                        </Col>
                    </Row>
                ))}

                <hr className="my-4" />

                <Row className="align-items-center mb-4">
                    <Col>
                    <h2 className="total-text">Total: ${sumatotal.toLocaleString('es-CL')}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Button variant="dark" size="lg" className="pay-button w-100">Pagar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
