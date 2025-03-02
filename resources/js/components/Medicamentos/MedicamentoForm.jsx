import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import ErrorMessage from "../Utilitarios/Error/ErrorMessage";
import usePetitionGet from "../../hooks/useGetPetition";
import Loading from "../Utilitarios/Loading";
import usePostPetition from "../../hooks/usePostPetition";
import { useNavigate } from "react-router-dom";

const MedicamentoForm = ({ onRegister }) => {
    const navigate = useNavigate()
    const [categoria, setCategoria] = useState([]);
    // Opciones de categorías: puedes reemplazarlas por las obtenidas dinámicamente
    const { dato: categoriaData, cargando: categoriaCargando } = usePetitionGet(
        {
            ruta: "admin/categoria",
            islogged: true,
        }
    );

    useEffect(() => {
        if (categoriaData) {
            //console.log(categoriaData)
            setCategoria(categoriaData.data || []);
        }
    }, [categoriaData]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const { respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition("admin/medicamento",{}, true);

    const onSubmit = (formData) => {
        const transformedData = {
            ...formData,
            nombre: formData.nombre.toUpperCase(),
            descripcion: formData.descripcion.toUpperCase()
          };
        setDatos(transformedData)
        iniciarSolicitud()
        
    };
    useEffect (()=>{
        if(respuesta){
            alert("Medicamento registrado exitosamente")
            navigate('/updsHospital')
        }
    },[respuesta])

    return (
        <Container className="d-flex align-items-center justify-content-center vh-100">
            {categoriaCargando || cargando ? (
                <Loading />
            ) : (
                <Card style={{ width: "800px" }}>
                    <Card.Header className="text-center">
                        <h2>Registro de Medicamento</h2>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            {/* Primera fila: Nombre y Descripción */}
                            <Row>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="nombre"
                                        className="mb-3"
                                    >
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese el nombre"
                                            {...register("nombre", {
                                                required:
                                                    "El nombre es requerido",
                                            })}
                                        />
                                        {errors.nombre && (
                                            <ErrorMessage
                                                mensaje={errors.nombre.message}
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="descripcion"
                                        className="mb-3"
                                    >
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese la descripción"
                                            {...register("descripcion", {
                                                required:
                                                    "La descripción es requerida",
                                            })}
                                        />
                                        {errors.descripcion && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.descripcion.message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Segunda fila: Stock y Fecha de Registro */}
                            <Row>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="stock"
                                        className="mb-3"
                                    >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingrese el stock"
                                            {...register("stock", {
                                                required:
                                                    "El stock es requerido",
                                                valueAsNumber: true,
                                            })}
                                        />
                                        {errors.stock && (
                                            <ErrorMessage
                                                mensaje={errors.stock.message}
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="fecha_registro"
                                        className="mb-3"
                                    >
                                        <Form.Label>
                                            Fecha de Registro
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            {...register("fecha_registro", {
                                                required:
                                                    "La fecha de registro es requerida",
                                            })}
                                        />
                                        {errors.fecha_registro && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.fecha_registro
                                                        .message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Tercera fila: Categoría (select) y Precio de Compra */}
                            <Row>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="categoria_id"
                                        className="mb-3"
                                    >
                                        <Form.Label>Categoría</Form.Label>
                                        <Form.Select
                                            {...register("categoria_id", {
                                                required:
                                                    "La categoría es requerida",
                                            })}
                                        >
                                            <option value="">
                                                Seleccione una categoría
                                            </option>
                                            {categoria.map((cat) => (
                                                <option
                                                    key={cat.id}
                                                    value={cat.id}
                                                >
                                                    {cat.descripcion}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        {errors.categoria_id && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.categoria_id.message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="precio_compra"
                                        className="mb-3"
                                    >
                                        <Form.Label>
                                            Precio de Compra
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            step="0.01"
                                            placeholder="Ingrese el precio de compra"
                                            {...register("precio_compra", {
                                                required:
                                                    "El precio de compra es requerido",
                                                valueAsNumber: true,
                                            })}
                                        />
                                        {errors.precio_compra && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.precio_compra.message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Cuarta fila: Precio de Venta y Fecha de Vencimiento */}
                            <Row>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="precio_venta"
                                        className="mb-3"
                                    >
                                        <Form.Label>Precio de Venta</Form.Label>
                                        <Form.Control
                                            type="number"
                                            step="0.01"
                                            placeholder="Ingrese el precio de venta"
                                            {...register("precio_venta", {
                                                required:
                                                    "El precio de venta es requerido",
                                                valueAsNumber: true,
                                            })}
                                        />
                                        {errors.precio_venta && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.precio_venta.message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group
                                        controlId="fecha_vencimiento"
                                        className="mb-3"
                                    >
                                        <Form.Label>
                                            Fecha de Vencimiento
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            {...register("fecha_vencimiento", {
                                                required:
                                                    "La fecha de vencimiento es requerida",
                                            })}
                                        />
                                        {errors.fecha_vencimiento && (
                                            <ErrorMessage
                                                mensaje={
                                                    errors.fecha_vencimiento
                                                        .message
                                                }
                                            />
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit">
                                Registrar Medicamento
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default MedicamentoForm;
