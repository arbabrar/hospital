import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import usePostPetition from '../../hooks/usePostPetition';

const PersonaForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const isAuthenticated = !!localStorage.getItem('token');
  const { data, error, loading, postRequest } = usePostPetition('/api/personas', isAuthenticated);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (formData) => {
    await postRequest(formData);
    if (!error) {
      setSuccessMessage('¡Persona registrada con éxito!');
      reset();
    } else {
      setSuccessMessage(null);
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Registrar Persona</h2>
        </Card.Header>
        <Card.Body>
          {successMessage && (
            <Alert variant="success" className="mt-3">
              {successMessage}
            </Alert>
          )}

          {error && (
            <Alert variant="danger" className="mt-3">
              {error.general ? error.general[0] : 'Error al registrar la persona'}
            </Alert>
          )}

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            {/* Campo Nombre */}
            <Form.Group controlId="nombre" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                {...register('nombre', { required: 'El nombre es requerido', maxLength: { value: 100, message: 'Máximo 100 caracteres' } })}
              />
              {errors.nombre && <Alert variant="danger" className="mt-2">{errors.nombre.message}</Alert>}
            </Form.Group>

            {/* Campo Apaterno */}
            <Form.Group controlId="apaterno" className="mb-3">
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el apellido paterno"
                {...register('apaterno', { maxLength: { value: 100, message: 'Máximo 100 caracteres' } })}
              />
              {errors.apaterno && <Alert variant="danger" className="mt-2">{errors.apaterno.message}</Alert>}
            </Form.Group>

            {/* Campo Amaterno */}
            <Form.Group controlId="amaterno" className="mb-3">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el apellido materno"
                {...register('amaterno', { maxLength: { value: 100, message: 'Máximo 100 caracteres' } })}
              />
              {errors.amaterno && <Alert variant="danger" className="mt-2">{errors.amaterno.message}</Alert>}
            </Form.Group>

            {/* Campo Número de Documento */}
            <Form.Group controlId="nrodocumento" className="mb-3">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el número de documento"
                {...register('nrodocumento', { required: 'El número de documento es requerido', maxLength: { value: 20, message: 'Máximo 20 caracteres' } })}
              />
              {errors.nrodocumento && <Alert variant="danger" className="mt-2">{errors.nrodocumento.message}</Alert>}
            </Form.Group>

            {/* Campo Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese el email"
                {...register('email', { 
                  pattern: { value: /^\S+@\S+$/i, message: 'Ingrese un email válido' },
                  maxLength: { value: 150, message: 'Máximo 150 caracteres' }
                })}
              />
              {errors.email && <Alert variant="danger" className="mt-2">{errors.email.message}</Alert>}
            </Form.Group>

            {/* Campo Teléfono */}
            <Form.Group controlId="telefono" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el teléfono"
                {...register('telefono', { maxLength: { value: 20, message: 'Máximo 20 caracteres' } })}
              />
              {errors.telefono && <Alert variant="danger" className="mt-2">{errors.telefono.message}</Alert>}
            </Form.Group>

            {/* Campo Domicilio */}
            <Form.Group controlId="domicilio" className="mb-3">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el domicilio"
                {...register('domicilio', { maxLength: { value: 255, message: 'Máximo 255 caracteres' } })}
              />
              {errors.domicilio && <Alert variant="danger" className="mt-2">{errors.domicilio.message}</Alert>}
            </Form.Group>

            {/* Campo Fecha de Nacimiento */}
            <Form.Group controlId="fecha_nacimiento" className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                {...register('fecha_nacimiento', { required: 'La fecha de nacimiento es requerida' })}
              />
              {errors.fecha_nacimiento && <Alert variant="danger" className="mt-2">{errors.fecha_nacimiento.message}</Alert>}
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

export default PersonaForm;
