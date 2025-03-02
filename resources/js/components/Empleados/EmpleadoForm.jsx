import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import ErrorMessage from "../Utilitarios/Error/ErrorMessage";

const EmpleadoForm = ({ onSendData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Envía los datos al callback provisto por props.
    onSendData(data);
   
    reset();
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="text-center">
          <h2>Registro de Empleado</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Primera fila: Rol y Fecha de Contrato */}
            <Row>
              <Col md={6}>
                <Form.Group controlId="rol" className="mb-3">
                  <Form.Label>Rol</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el rol del empleado"
                    {...register("rol", {
                      required: "El rol es requerido",
                      minLength: {
                        value: 7,
                        message: "El rol debe tener más de 6 caracteres",
                      },
                    })}
                  />
                  {errors.rol && <ErrorMessage mensaje={errors.rol.message} />}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="fecha_contrato" className="mb-3">
                  <Form.Label>Fecha de Contrato</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("fecha_contrato", {
                      required: "La fecha de contrato es requerida",
                    })}
                  />
                  {errors.fecha_contrato && (
                    <ErrorMessage mensaje={errors.fecha_contrato.message} />
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Segunda fila: Fecha de Registro y Salario */}
            <Row>
              <Col md={6}>
                <Form.Group controlId="fecha_registro" className="mb-3">
                  <Form.Label>Fecha de Registro</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("fecha_registro", {
                      required: "La fecha de registro es requerida",
                    })}
                  />
                  {errors.fecha_registro && (
                    <ErrorMessage mensaje={errors.fecha_registro.message} />
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="salario" className="mb-3">
                  <Form.Label>Salario</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Ingrese el salario"
                    {...register("salario", {
                      required: "El salario es requerido",
                    })}
                  />
                  {errors.salario && (
                    <ErrorMessage mensaje={errors.salario.message} />
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Tercera fila: Puesto (ocupa ambas columnas) */}
            <Row>
              <Col md={12}>
                <Form.Group controlId="puesto" className="mb-3">
                  <Form.Label>Puesto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el puesto"
                    {...register("puesto", {
                      required: "El puesto es requerido",
                    })}
                  />
                  {errors.puesto && <ErrorMessage mensaje={errors.puesto.message} />}
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Registrar Empleado
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmpleadoForm;
