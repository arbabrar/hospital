import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Card } from "react-bootstrap";
import ErrorMessage from "../Utilitarios/Error/ErrorMessage";

const CategoriaForm = ({ onRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Envía los datos al callback recibido y luego resetea el formulario.
    onRegister(data);
    console.log("Datos a enviar:", data);
    reset();
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="text-center">
          <h2>Registro de Categoría</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="descripcion" className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción de la categoría"
                {...register("descripcion", {
                  required: "La descripción es requerida",
                })}
              />
              {errors.descripcion && (
                <ErrorMessage mensaje={errors.descripcion.message} />
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrar Categoría
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CategoriaForm;
