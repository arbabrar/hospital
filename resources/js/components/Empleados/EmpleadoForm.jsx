import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import axios from 'axios';

const EmpleadoForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [serverErrors, setServerErrors] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/empleados', data);
      setSuccessMessage('Empleado registrado exitosamente');
      setServerErrors(null);
      reset();
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setServerErrors(error.response.data.errors);
      } else {
        setServerErrors({ general: 'Error al registrar el empleado' });
      }
    }
    setLoading(false);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Registrar Empleado</h2>
        </Card.Header>
        <Card.Body>
          {successMessage && (
            <Alert variant="success" className="mt-3">
              {successMessage}
            </Alert>
          )}
          {serverErrors && serverErrors.general && (
            <Alert variant="danger" className="mt-3">
              {serverErrors.general}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            {/* Campo Persona ID */}
            <Form.Group controlId="persona_id" className="mb-3">
              <Form.Label>ID de Persona</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el ID de la persona"
                {...register('persona_id', { required: 'El ID de persona es requerido' })}
              />
              {errors.persona_id && (
                <Alert variant="danger" className="mt-2">
                  {errors.persona_id.message}
                </Alert>
              )}
              {serverErrors && serverErrors.persona_id && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.persona_id[0]}
                </Alert>
              )}
            </Form.Group>

            {/* Campo Rol */}
            <Form.Group controlId="rol" className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el rol"
                {...register('rol', { required: 'El rol es requerido' })}
              />
              {errors.rol && (
                <Alert variant="danger" className="mt-2">
                  {errors.rol.message}
                </Alert>
              )}
              {serverErrors && serverErrors.rol && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.rol[0]}
                </Alert>
              )}
            </Form.Group>

            {/* Campo Fecha de Contrato */}
            <Form.Group controlId="fecha_contrato" className="mb-3">
              <Form.Label>Fecha de Contrato</Form.Label>
              <Form.Control
                type="date"
                {...register('fecha_contrato', { required: 'La fecha de contrato es requerida' })}
              />
              {errors.fecha_contrato && (
                <Alert variant="danger" className="mt-2">
                  {errors.fecha_contrato.message}
                </Alert>
              )}
              {serverErrors && serverErrors.fecha_contrato && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.fecha_contrato[0]}
                </Alert>
              )}
            </Form.Group>

            {/* Campo Fecha de Registro */}
            <Form.Group controlId="fecha_registro" className="mb-3">
              <Form.Label>Fecha de Registro</Form.Label>
              <Form.Control
                type="date"
                {...register('fecha_registro', { required: 'La fecha de registro es requerida' })}
              />
              {errors.fecha_registro && (
                <Alert variant="danger" className="mt-2">
                  {errors.fecha_registro.message}
                </Alert>
              )}
              {serverErrors && serverErrors.fecha_registro && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.fecha_registro[0]}
                </Alert>
              )}
            </Form.Group>

            {/* Campo Salario */}
            <Form.Group controlId="salario" className="mb-3">
              <Form.Label>Salario</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Ingrese el salario"
                {...register('salario', { required: 'El salario es requerido' })}
              />
              {errors.salario && (
                <Alert variant="danger" className="mt-2">
                  {errors.salario.message}
                </Alert>
              )}
              {serverErrors && serverErrors.salario && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.salario[0]}
                </Alert>
              )}
            </Form.Group>

            {/* Campo Puesto */}
            <Form.Group controlId="puesto" className="mb-3">
              <Form.Label>Puesto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el puesto"
                {...register('puesto', { required: 'El puesto es requerido' })}
              />
              {errors.puesto && (
                <Alert variant="danger" className="mt-2">
                  {errors.puesto.message}
                </Alert>
              )}
              {serverErrors && serverErrors.puesto && (
                <Alert variant="danger" className="mt-2">
                  {serverErrors.puesto[0]}
                </Alert>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmpleadoForm;
