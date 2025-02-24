import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge,
    InputGroup,
    Form,
    Table,
} from "react-bootstrap";
import { RiInfoCardLine } from "react-icons/ri";
import { FaMailBulk } from "react-icons/fa";
const AdminDashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [temperature, setTemperature] = useState("25°C"); // Valor estático; se puede actualizar dinámicamente

    // Actualiza la hora cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => date.toLocaleTimeString();

    return (
        <Container className="container-margintop">
            {/* Fila con tres cards */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card bg={"primary"} text="white">
                        <Card.Body>
                            <Card.Title>
                                Gestión de Clientes y Usuarios
                            </Card.Title>
                            <Card.Text>
                                Administra y gestiona la información de tus
                                clientes y usuarios.
                            </Card.Text>
                            <Button variant="secondary">Ir a Gestión</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg={"light"} text="dark">
                        <Card.Body>
                            <Card.Title>
                                Gestión de Categorías y Medicamentos
                            </Card.Title>
                            <Card.Text>
                                Controla y organiza las categorías y
                                medicamentos disponibles.
                            </Card.Text>
                            <Button variant="secondary">Ir a Gestión</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg={"success"} text="white">
                        <Card.Body>
                            <Card.Title>Gestión y Control de Ventas</Card.Title>
                            <Card.Text>
                                Supervisa y gestiona el proceso de ventas y su
                                control.
                            </Card.Text>
                            <Button variant="secondary">Ir a Gestión</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Fila inferior con la hora actual y temperatura */}
            <Row className="mb-4">
                <Col md={7}>
                    <Card
                        bg={"dark"}
                        text="white"
                        className="w-100 text-center "
                    >
                        <Card.Body>
                            <Card.Text className="text-time">
                                <h1>{formatTime(currentTime)}</h1>
                            </Card.Text>
                            <Card.Link
                                href="https://www.accuweather.com/es/bo/santa-cruz-de-la-sierra/36300/daily-weather-forecast/36300"
                                className="text-warning"
                            >
                                Ver Temperatura
                            </Card.Link>
                            <Card.Link
                                href="https://eldeber.com.bo/"
                                className="text-white"
                            >
                                Ver Noricias
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Card bg={"secondary"} text="white" className="w-100">
                        <Card.Body>
                            <Card.Text className="text-time">
                                <h2>Notificaciones</h2>
                            </Card.Text>
                            <Card.Link className="text-warning">
                                <h5>
                                    <FaMailBulk />
                                    <Badge bg="secondary">18</Badge>
                                </h5>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card bg={"light"} text="dark" className="w-100 custom-heigth">
                        <Card.Body>
                            <Card.Title>Guia Telefonica </Card.Title>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Ingrese Nombre o Apellido"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="primary" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                            <Table responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre y Apellido</th>
                                        <th>Especialidad</th>
                                        <th>Nro Telefono</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>LUIS PEREZ</td>
                                        <td>PEDIATRA</td>
                                        <td>71822336</td>
                                        <td><Button variant="info"><RiInfoCardLine /></Button></td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
