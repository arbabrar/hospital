import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const CardEmpleado = ({ empleado }) => {
  if (!empleado) return null;

  const { rol, fecha_contrato, fecha_registro, salario, puesto } = empleado;

  return (
    <Card className="mb-3">
      <Card.Header>Datos del Empleado</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Rol:</strong> {rol}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de Contrato:</strong> {fecha_contrato}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de Registro:</strong> {fecha_registro}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Salario:</strong> {salario}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Puesto:</strong> {puesto}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CardEmpleado;
