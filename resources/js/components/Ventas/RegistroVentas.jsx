import React, { useEffect, useState, useCallback } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import FieldSearch from "../Utilitarios/FieldSearch";
import usePetitionGet from "../../hooks/useGetPetition";
import Loading from "../Utilitarios/Loading";

const RegistroVentas = () => {
    const [rutaDato, setRutaDato] = useState("admin/categoria");
    const [categoria, setCategoria] = useState([]);

    // Hook para obtener las categorías desde la API
    const { dato: datos, cargando: datosCargando } = usePetitionGet({
        ruta: rutaDato,
        islogged: true,
    });

    // Actualiza el estado de 'categoria' cuando llegan nuevos datos
    useEffect(() => {
        if (datos) {
            setCategoria(datos.data || []);
        }
    }, [datos]);

    const [rutaPersona, setRutaPersona] = useState(null);
    const [persona, setPersona] = useState([]);
    const { dato: personaData, cargando: personaCargando } = usePetitionGet({
      ruta: rutaPersona,
      islogged: true,
    });

    useEffect(() => {
        if (personaData) {
            console.log(personaData)
          setPersona(personaData.data || []);
        }
      }, [personaData]);
    
      // Función para manejar la búsqueda de cliente.
      // Cuando se ingresa un término, se actualiza la ruta para buscar al cliente.
      const handleDataCliente = useCallback((searchTerm) => {
        const trimmed = searchTerm.trim();
        if (trimmed) {
          setRutaPersona(`admin/buscarPersona/${trimmed}`);
        } else {
          setRutaPersona(null);
        }
      }, []);

   

    // Función para manejar la búsqueda de medicamento
    const handleDataMedicamento = useCallback((data) => {
        console.log("Buscar Medicamento:", data);
    }, []);

    return (
        <>
            {datosCargando ? (
                <Loading />
            ) : (
                <Container className="container-margintop">
                    <Card variant="light">
                        <Card.Body>
                            <Card.Title>
                                Registro de ventas de farmacia
                            </Card.Title>
                            <Row>
                                <Col md={4}>
                                    <h2>Buscar Cliente</h2>
                                    <FieldSearch
                                        placeholder="Ingrese Nro NIT o Apellido"
                                        getData={handleDataCliente}
                                    />
                                    {personaCargando && <Loading />}
                                </Col>
                                <Col md={8}>
                                    <h2>Buscar Medicamento</h2>
                                    <Form.Select
                                        aria-label="Seleccione la categoría"
                                        className="mb-2"
                                    >
                                        <option>Selecciona la categoría</option>
                                        {categoria.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.descripcion}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <FieldSearch
                                        placeholder="Ingrese Nombre del medicamento"
                                        getData={handleDataMedicamento}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </>
    );
};

export default RegistroVentas;
