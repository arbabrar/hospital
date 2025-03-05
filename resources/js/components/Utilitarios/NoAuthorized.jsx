import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const NoAuthorized = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("appCredential");
  const token = localStorage.getItem("UPDSHospital");

  // Si no existe el token, redirige al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Parseamos el usuario desde localStorage
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleBack = () => {
    // Redirige al usuario según su rol
    if (user && user.role === "admin") {
      navigate("/updsHospital");
    } else {
      navigate("/updsFarmacia");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className="text-center" style={{ minWidth: "300px" }}>
        <Card.Header>
          <h2>Acceso No Autorizado</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Lo sentimos, no tienes permiso para acceder a esta página.
          </Card.Text>
          <Button variant="primary" onClick={handleBack}>
            Regresar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NoAuthorized;
