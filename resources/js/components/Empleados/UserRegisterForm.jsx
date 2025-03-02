import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import ErrorMessage from "../Utilitarios/Error/ErrorMessage";

const UserRegisterForm = ({ onRegister }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  // Observar el valor del campo password para validación en confirmPassword.
  const password = watch("password", "");

  const onSubmit = (data) => {
    // Se elimina el campo confirmPassword antes de enviar los datos.
    const { confirmPassword, ...userData } = data;
    onRegister(userData);
    
    reset();
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="text-center">
          <h2>Registro de Usuario</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese la contraseña"
                    {...register("password", {
                      required: "La contraseña es requerida",
                      minLength: {
                        value: 6,
                        message: "La contraseña debe tener al menos 6 caracteres",
                      },
                    })}
                  />
                  {errors.password && (
                    <ErrorMessage mensaje={errors.password.message} />
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme la contraseña"
                    {...register("confirmPassword", {
                      required: "Por favor confirme la contraseña",
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                  />
                  {errors.confirmPassword && (
                    <ErrorMessage mensaje={errors.confirmPassword.message} />
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group controlId="role" className="mb-3">
                  <Form.Label>Rol</Form.Label>
                  <Form.Select
                    {...register("role", { required: "El rol es requerido" })}
                  >
                    <option value="">Seleccione un rol</option>
                    <option value="admin">Admin</option>
                    <option value="empleado">Empleado</option>
                    <option value="transcriptor">Transcriptor</option>
                  </Form.Select>
                  {errors.role && (
                    <ErrorMessage mensaje={errors.role.message} />
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Registrar Usuario
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserRegisterForm;
