import React from 'react';
import { Container, Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from './../../../../image/logo.png'

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '600px' }}>
        <Row className="g-0">
          {/* Columna izquierda: Logo */}
          <Col md={6} className="d-flex justify-content-center align-items-center bg-light">
            <Image 
              src={Logo}
              alt="Logo" 
              fluid 
              style={{ maxHeight: '200px' }} 
            />
          </Col>
          {/* Columna derecha: Mensaje y botón */}
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-4">
            <Card.Body className="text-center">
              <Card.Title><h2>Error 404</h2></Card.Title>
              <Card.Text>
                La página que buscas no existe.
              </Card.Text>
              <Button variant="primary" onClick={handleGoHome}>
                Ir al inicio
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default NotFound;
