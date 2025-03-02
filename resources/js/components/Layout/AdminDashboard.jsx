import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card, Button, Badge, DropdownButton, Dropdown } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import FieldSearch from "../Utilitarios/FieldSearch";
import TablePersonas from "./Table/TablePersonas";
import usePetitionGet from "../../hooks/useGetPetition";
import Loading from "../Utilitarios/Loading";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [personas, setPersonas] = useState([]);
  // Inicializamos la ruta en null para no consumir la API hasta realizar una búsqueda.
  const [rutaPersona, setRutaPersona] = useState(null);
  const [mensaje, setMensaje] = useState();
  const navigate = useNavigate();

  // Memoriza la función de navegación.
  const handlerClickNav = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  // El hook se activa solo si 'rutaPersona' no es null.
  const { dato: personaData, cargando: personaCargando } = usePetitionGet({
    ruta: rutaPersona,
    islogged: true,
  });

  // Actualiza la hora cada segundo.
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Función de búsqueda: solo se actualiza la ruta si hay un término de búsqueda.
  const onsubmitSearch = useCallback((searchTerm) => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      setRutaPersona(`admin/buscarEmpleado/${trimmed}`);
    }
  }, []);

  // Actualiza el estado de 'personas' y 'mensaje' cuando cambia la data recibida.
  useEffect(() => {
    if (personaData) {
      // Se asume que la respuesta puede venir como arreglo o como objeto con propiedad 'persona'
      const data = Array.isArray(personaData) ? personaData : (personaData.persona || []);
      if (data.length === 0) {
        setMensaje("No se encontraron datos de acuerdo al criterio de búsqueda");
      } else {
        setMensaje(null);
      }
      setPersonas(data);
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
              <Button variant="outline-light"  onClick={() => handlerClickNav('/updsHospital/ListPersona')}>Gestión de Clientes y Usuarios</Button>
              
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
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-dark"
                title="Gestión de Categorias y Medicamentos"
              >
                <Dropdown.Item onClick={() => handlerClickNav('/updsHospital/ListarCategoria')}>
                  Ver o Registrar Categoria
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handlerClickNav('/updsHospital/registroMeicamento')}>
                  Registro Medicamento
                </Dropdown.Item>
              </DropdownButton>
              
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
              <Card.Text className="text-time">{formatTime(currentTime)}</Card.Text>
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
              <FieldSearch placeholder="Ingrese Nombre o Apellido" getData={onsubmitSearch} />
              {personaCargando ? <Loading /> : <TablePersonas persona={personas} mensaje={mensaje} />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
