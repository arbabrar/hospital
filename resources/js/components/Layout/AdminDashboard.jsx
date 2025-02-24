import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import FieldSearch from "../Utilitarios/FieldSearch";
import TablePersonas from "./Table/TablePersonas";
import usePetitionGet from "../../hooks/useGetPetition";
import Loading from "../Utilitarios/Loading";

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [personas, setPersonas] = useState([]);
  const [rutaPersona, setRutaPersona] = useState(""); // Inicializamos como cadena vacía

  // Hook para obtener personas, solo se activa cuando rutaPersona no es vacía
  const { dato: personaData, cargando: personaCargando } = usePetitionGet({
    ruta: rutaPersona,
    islogged: true,
  });

  // Actualiza la hora cada segundo
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Función para manejar la búsqueda
  const onsubmitSearch = useCallback((searchTerm) => {
    if (searchTerm.trim()) {
      setRutaPersona(`auth/searchPersonas/${searchTerm}`);
    }
  }, []);

  // Actualiza el estado de personas cuando llega nueva data
  useEffect(() => {
    if (personaData) {
      setPersonas(personaData);
    }
  }, [personaData]);

  const formatTime = (date) => date.toLocaleTimeString();

  return (
    <Container className="container-margintop">
      {/* Fila con tres cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>Gestión de Clientes y Usuarios</Card.Title>
              <Card.Text>
                Administra y gestiona la información de tus clientes y usuarios.
              </Card.Text>
              <Button variant="secondary">Ir a Gestión</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="light" text="dark">
            <Card.Body>
              <Card.Title>Gestión de Categorías y Medicamentos</Card.Title>
              <Card.Text>
                Controla y organiza las categorías y medicamentos disponibles.
              </Card.Text>
              <Button variant="secondary">Ir a Gestión</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Gestión y Control de Ventas</Card.Title>
              <Card.Text>
                Supervisa y gestiona el proceso de ventas y su control.
              </Card.Text>
              <Button variant="secondary">Ir a Gestión</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Fila inferior con la hora actual, clima y notificaciones */}
      <Row className="mb-4">
        <Col md={7}>
          <Card bg="dark" text="white" className="card-info">
            <Card.Body>
              <Card.Text className="text-time">
                {formatTime(currentTime)}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
              <Button
                variant="outline-warning"
                href="https://www.accuweather.com/es/bo/santa-cruz-de-la-sierra/36300/daily-weather-forecast/36300"
              >
                Ver Clima
              </Button>
              <Button variant="outline-light" href="https://eldeber.com.bo/">
                Ver Noticias
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={5}>
          <Card bg="secondary" text="white" className="card-info">
            <Card.Body>
              <Card.Text className="text-time">Notificaciones</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
              <div className="d-flex align-items-center">
                <FaMailBulk className="me-1" />
                <Badge bg="secondary">18</Badge>
              </div>
              <div className="d-flex align-items-center">
                <MdSpeakerNotes className="me-1" />
                <Badge bg="secondary">5</Badge>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* Tabla de personas y búsqueda */}
      <Row>
        <Col>
          <Card bg="light" text="dark" className="w-100 custom-heigth">
            <Card.Body>
              <Card.Title>Guía Telefónica</Card.Title>
              <FieldSearch
                placeholder="Ingrese Nombre o Apellido"
                getData={onsubmitSearch}
              />
              {personaCargando ? <Loading /> : <TablePersonas persona={personas} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
