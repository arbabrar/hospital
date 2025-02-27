import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Alert, Container, Card, Row, Col } from "react-bootstrap";
import usePostPetition from "../../hooks/usePostPetition";
import ErrorMessage from "../Utilitarios/Error/ErrorMessage";
import Loading from "../Utilitarios/Loading";
import { useNavigate } from "react-router-dom";

const PersonaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition("admin/persona",{}, true);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (formData) => {
    // Transformar a mayúsculas todos los campos de texto excepto el email
    const transformedData = {
      ...formData,
      nombre: formData.nombre.toUpperCase(),
      apaterno: formData.apaterno.toUpperCase(),
      amaterno: formData.amaterno.toUpperCase(),
      nrodocumento: formData.nrodocumento.toUpperCase(),
      telefono: formData.telefono.toUpperCase(),
      domicilio: formData.domicilio.toUpperCase(),
      // email y fecha_nacimiento se mantienen sin cambios
    };

    setDatos(transformedData);
    iniciarSolicitud();
  };

  useEffect(()=>{
      if(respuesta){
        setSuccessMessage("¡Persona registrada con éxito!");
        navigate("/updsHospital");
      }
  },[respuesta])

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card style={{ width: "800px" }}>
        <Card.Header className="text-center">
          <h2>Registrar Persona</h2>
        </Card.Header>
        <Card.Body>
          {successMessage && (
            <Alert variant="success" className="mt-3">
              {successMessage}
            </Alert>
          )}

          {error && (
            <ErrorMessage mensaje={error.general ? error.general[0] : "Error al registrar la persona"} />
          )}

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            <Row>
              <Col md={6}>
                {/* Campo Nombre */}
                <Form.Group controlId="nombre" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre"
                    {...register("nombre", {
                      required: "El nombre es requerido",
                      maxLength: { value: 100, message: "Máximo 100 caracteres" },
                    })}
                  />
                  {errors.nombre && <ErrorMessage mensaje={errors.nombre.message} />}
                </Form.Group>
              </Col>
              <Col md={6}>
                {/* Campo Apellido Paterno */}
                <Form.Group controlId="apaterno" className="mb-3">
                  <Form.Label>Apellido Paterno</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el apellido paterno"
                    {...register("apaterno", {
                      required: "El apellido paterno es requerido",
                      maxLength: { value: 100, message: "Máximo 100 caracteres" },
                    })}
                  />
                  {errors.apaterno && <ErrorMessage mensaje={errors.apaterno.message} />}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                {/* Campo Apellido Materno */}
                <Form.Group controlId="amaterno" className="mb-3">
                  <Form.Label>Apellido Materno</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el apellido materno"
                    {...register("amaterno", {
                      required: "El apellido materno es requerido",
                      maxLength: { value: 100, message: "Máximo 100 caracteres" },
                    })}
                  />
                  {errors.amaterno && <ErrorMessage mensaje={errors.amaterno.message} />}
                </Form.Group>
              </Col>
              <Col md={6}>
                {/* Campo Número de Documento */}
                <Form.Group controlId="nrodocumento" className="mb-3">
                  <Form.Label>Número de Documento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el número de documento"
                    {...register("nrodocumento", {
                      required: "El número de documento es requerido",
                      maxLength: { value: 20, message: "Máximo 20 caracteres" },
                    })}
                  />
                  {errors.nrodocumento && <ErrorMessage mensaje={errors.nrodocumento.message} />}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                {/* Campo Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese el email"
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: { value: /^\S+@\S+$/i, message: "Ingrese un email válido" },
                      maxLength: { value: 150, message: "Máximo 150 caracteres" },
                    })}
                  />
                  {errors.email && <ErrorMessage mensaje={errors.email.message} />}
                </Form.Group>
              </Col>
              <Col md={6}>
                {/* Campo Teléfono */}
                <Form.Group controlId="telefono" className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el teléfono"
                    {...register("telefono", {
                      required: "El teléfono es requerido",
                      maxLength: { value: 20, message: "Máximo 20 caracteres" },
                    })}
                  />
                  {errors.telefono && <ErrorMessage mensaje={errors.telefono.message} />}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                {/* Campo Domicilio */}
                <Form.Group controlId="domicilio" className="mb-3">
                  <Form.Label>Domicilio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el domicilio"
                    {...register("domicilio", {
                      required: "El domicilio es requerido",
                      maxLength: { value: 255, message: "Máximo 255 caracteres" },
                    })}
                  />
                  {errors.domicilio && <ErrorMessage mensaje={errors.domicilio.message} />}
                </Form.Group>
              </Col>
              <Col md={6}>
                {/* Campo Fecha de Nacimiento */}
                <Form.Group controlId="fecha_nacimiento" className="mb-3">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    {...register("fecha_nacimiento", {
                      required: "La fecha de nacimiento es requerida",
                    })}
                  />
                  {errors.fecha_nacimiento && <ErrorMessage mensaje={errors.fecha_nacimiento.message} />}
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" disabled={cargando}>
              {cargando ? "Registrando..." : "Registrar"}
            </Button>
            {cargando && <Loading />}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PersonaForm;
