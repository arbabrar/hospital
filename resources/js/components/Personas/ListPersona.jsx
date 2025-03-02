import React, { useEffect, useState } from "react";
import {
    Container,
    Alert,
    Table,
    Spinner,
    Badge,
    Button,
} from "react-bootstrap";
import FieldSearch from "../Utilitarios/FieldSearch";
import usePetitionGet from "../../hooks/useGetPetition";
import { useNavigate } from "react-router-dom";

const ListPersona = () => {
    const [ruta, setRuta] = useState("");
    const [persona, setPersona] = useState([]);
    const navigate = useNavigate();
    const {
        dato: personalData,
        cargando: personalCargando,
        error: errorGet,
    } = usePetitionGet({
        ruta: ruta,
        islogged: true,
    });
    const handlerClickNav = (path) => {
        navigate(path);
    };

    const handleDataSearch = (data) => {
        // Actualiza la ruta de búsqueda
        setRuta(`admin/buscarPersona/${data}`);
    };

    useEffect(() => {
        if (personalData) {
            // Se asume que la respuesta tiene la propiedad "persona" que es un arreglo
            console.log(personalData.persona);
            setPersona(personalData.persona || []);
        }
    }, [personalData]);

    return (
        <Container className="container-margintop">
            <FieldSearch
                placeholder="Ingrese Apellido o Nro de Documento"
                getData={handleDataSearch}
            />

            {personalCargando && (
                <div className="text-center my-3">
                    <Spinner animation="border" variant="primary" />
                    <p>Cargando...</p>
                </div>
            )}

            {errorGet && (
                <Alert variant="danger" className="my-3">
                    {errorGet}
                </Alert>
            )}

            {!personalCargando && !errorGet && persona.length > 0 && (
                <Table striped bordered hover responsive className="mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Nro Documento</th>
                            <th>Teléfono</th>
                            <th>Empleado</th>
                            <th>Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persona.map((p) => (
                            
                            <tr key={p.idpersona}>
                                <td>{p.idpersona}</td>
                                <td>{p.nombre_completo}</td>
                                <td>{p.nrodocumento}</td>
                                <td>{p.telefono}</td>
                                <td>
                                    {p.empleado === true ||
                                    p.empleado === "true" ? (
                                        <Badge bg="success">Si</Badge>
                                    ) : (
                                        <Badge bg="danger">No</Badge>
                                    )}
                                </td>
                                <td>
                                    {p.usuario === true ||
                                    p.usuario === "true" ? (
                                        <Badge bg="success">Si</Badge>
                                    ) : (
                                        <Badge bg="danger">No</Badge>
                                    )}
                                </td>
                                <td>
                                    {(p.usuario === true ||
                                        p.usuario === "true") &&
                                        (p.empleado === true ||
                                            p.empleado === "true") && (
                                            <Button variant="primary" onClick={()=>handlerClickNav(`/updsHospital/EditPersona/${p.idpersona}`)}>
                                                Editar
                                            </Button>
                                        )}
                                    {(p.usuario === false ||
                                        p.usuario === "false") &&
                                        (p.empleado === true ||
                                            p.empleado === "true") && (
                                            <Button variant="success" onClick={()=>handlerClickNav(`/updsHospital/CrearUsuario/${p.idpersona}`)}>
                                                Crear Usuario
                                            </Button>
                                        )}
                                    {(p.usuario === false ||
                                        p.usuario === "false") &&
                                        (p.empleado === false ||
                                            p.empleado === "false") && (
                                            <Button variant="warning" onClick={()=>handlerClickNav(`/updsHospital/AsociarPersona/${p.idpersona}`)}>
                                                Asociar
                                            </Button>
                                        )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {!personalCargando && !errorGet && ruta && persona.length === 0 && (
                <Alert
                    variant="info"
                    className="mt-3 d-flex justify-content-between align-items-center"
                >
                    <span>No se encontraron resultados.</span>
                    <Button variant={"warning"}
                        onClick={() =>
                            handlerClickNav("/updsHospital/registroPersona")
                        }
                    >
                        Registrar
                    </Button>
                </Alert>
            )}
        </Container>
    );
};

export default ListPersona;
