import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Card, Form, Button, Image } from "react-bootstrap";
import Logo from "../../image/logo.png";
import Loading from "./Utilitarios/Loading";
import usePostPetition from "../hooks/usePostPetition";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./Utilitarios/Error/ErrorMessage";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({ email: '', password: '' });
    const {respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition('auth/login', inputData, false);
    const onSubmit = (data) => {
        setDatos(data);
        iniciarSolicitud();
    };
    useEffect(() => {
        if (respuesta) {
          // Guardar token y usuario en localStorage
          localStorage.setItem("UPDSHospital", respuesta.token);
          const usuario = respuesta.user || {};
          localStorage.setItem("appCredential", JSON.stringify(usuario));
          navigate("/updsHospital");
        }
      }, [respuesta, navigate]);


    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="w-75">
                <Card.Body>
                    {/* Logo centrado */}
                    <div className="text-center mb-4">
                        <Image
                            src={Logo}
                            alt="Logo"
                            fluid
                            className="mb-3 logo-login"
                        />
                    </div>
                    {
                        error && <ErrorMessage mensaje={error.message}/>
                    }
                    {/* Formulario de login */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su email"
                                {...register("email", {
                                    required: "El email es requerido",
                                })}
                            />
                            {errors.email && (
                                <ErrorMessage mensaje={errors.email.message} />
                            )}
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                {...register("password", {
                                    required: "La contraseña es requerida",
                                })}
                            />
                            {errors.password && (
                                <ErrorMessage
                                    mensaje={errors.password.message}
                                />
                            )}
                        </Form.Group>
                        {cargando && <Loading />}
                        {!cargando && (
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100"
                            >
                                Login
                            </Button>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
