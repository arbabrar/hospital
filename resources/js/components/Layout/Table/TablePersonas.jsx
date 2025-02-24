import React from "react";
import { Table, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TablePersonas = ({ persona= [], onEdit, onDelete }) => {
    const navigate = useNavigate();
    const personasArray = Array.isArray(persona) ? persona : [];
  return (
    <Table responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre y Apellido</th>
          <th>Especialidad</th>
          <th>Nro Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {personasArray.length === 0 ? (
          <tr>
            <td colSpan="5">
              <Alert variant="info" className="mb-0">
                <Button variant="primary" size="sm"
                  onClick={() => navigate('/')} >Registrar</Button>
              </Alert>
            </td>
          </tr>
        ) : (
            personasArray.map((p, index) => (
            <tr key={p.id || index}>
              <td>{index + 1}</td>
              <td>{p.nombreApellido}</td>
              <td>{p.especialidad}</td>
              <td>{p.telefono}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => onEdit && onEdit(p.id)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete && onDelete(p.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default TablePersonas;

