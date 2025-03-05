import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FarmaciaDashboard = () => {
  const navigate = useNavigate();

  const handleRealizarVenta = () => {
    // Redirige a la página donde se procesa la venta
    navigate('/updsFarmacia/sale');
  };

  return (
    <Container className="container-margintop">
      <Row className="mb-4">
        <Col>
          <Card bg="info" text="white" className="text-center">
            <Card.Header>
              <h2>Farmacia UPDS</h2>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Bienvenido al panel de control de la farmacia. Aquí podrás visualizar
                las estadísticas y gestionar las ventas.
              </Card.Text>
              <Button variant="light" onClick={handleRealizarVenta}>
                Realizar Venta
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Estadísticas</Card.Title>
              <Card.Text>
                Aquí se mostrarán estadísticas de ventas, inventarios y otros datos relevantes.
              </Card.Text>
              {/* Puedes agregar gráficos o más información aquí */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FarmaciaDashboard;
