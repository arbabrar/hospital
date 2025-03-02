import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CardPersona = ({ persona }) => {
  if (!persona) {
    return null;
  }

  const {
    nombre,
    apaterno,
    amaterno,
    nrodocumento,
    email,
    telefono,
    domicilio,
    fecha_nacimiento,
  } = persona;

  return (
    <Card className="mb-3">
      <Card.Header>
        {nombre} {apaterno} {amaterno}
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Número de Documento:</strong> {nrodocumento}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Teléfono:</strong> {telefono}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Domicilio:</strong> {domicilio}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de Nacimiento:</strong> {fecha_nacimiento}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardPersona;
