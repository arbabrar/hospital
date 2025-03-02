import React, { useMemo } from "react";
import { Table, Alert, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TablePersonas = ({ persona = [], onEdit, onDelete, isSearch = true, mensaje }) => {
  // Usamos useMemo para asegurarnos de que personasArray se recalcula solo cuando cambie la prop "persona"
  const personasArray = useMemo(() => (Array.isArray(persona) ? persona : []), [persona]);

  // Calcula el número de columnas según el valor de isSearch.
  const colSpanValue = isSearch ? 4 : 5;

  return (
    <Table responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre y Apellido</th>
          <th>Especialidad</th>
          <th>Nro Teléfono</th>
          {!isSearch && <th>Acción</th>}
        </tr>
      </thead>
      <tbody>
        {personasArray.length === 0 ? (
          <tr>
            <td colSpan={colSpanValue}>
              <Alert variant="info" className="mb-0">
                {mensaje || "Ingrese algún dato para realizar la búsqueda"}
              </Alert>
            </td>
          </tr>
        ) : (
          personasArray.map((p, index) => (
            <tr key={p.id || index}>
              <td>{index + 1}</td>
              <td>{p.nombre_completo}</td>
              <td>{p.cargo}</td>
              <td>{p.telefono}</td>
              {!isSearch && (
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    aria-label={`Editar persona ${p.nombre_completo}`}
                    onClick={() => onEdit && onEdit(p.id)}
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    aria-label={`Eliminar persona ${p.nombre_completo}`}
                    onClick={() => onDelete && onDelete(p.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

TablePersonas.propTypes = {
  persona: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  isSearch: PropTypes.bool,
  mensaje: PropTypes.string,
};

export default TablePersonas;
