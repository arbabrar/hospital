import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import usePetitionGet from "../../../hooks/useGetPetition";
import ErrorMessage from "../../Utilitarios/Error/ErrorMessage";
import Loading from "../../Utilitarios/Loading";
import CardPersona from "../Card/CardPersona";
import usePostPetition from "../../../hooks/usePostPetition";
import CardEmpleado from "../Card/CardEmpleado";
import UserRegisterForm from "../../Empleados/UserRegisterForm";

const HolderCrearUsuario = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [empleado, setEmpleado] = useState(null);
  const [empleadoID, setEmpleadoID] = useState(0);
  const navigate = useNavigate();

  // Obtener los datos de la persona y el empleado asociado
  const { dato: personalData, cargando: personalCargando, error: errorGet } = usePetitionGet({
    ruta: `admin/PersonaEmpleado/${id}`,
    islogged: true,
  });
  
  // Hook para registrar el usuario
  const { respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition("auth/register", {}, true);

  // Cuando se reciba respuesta del POST, muestra el mensaje y redirige.
  useEffect(() => {
    if (respuesta) {
      alert(respuesta.mensaje);
      navigate("/updsHospital/ListPersona");
    }
  }, [respuesta, navigate]);

  // Actualiza el estado de 'persona', 'empleado' y 'empleadoID' cuando llega nueva data.
  useEffect(() => {
    if (personalData) {
      setPersona(personalData.persona);
      setEmpleado(personalData.empleado);
      // Se asume que la propiedad "empleado" existe y contiene el id
      setEmpleadoID(personalData.empleado.id);
    }
  }, [personalData]);

  // Función para transformar y enviar los datos del formulario de registro de usuario.
  const handleData = useCallback(
    (formData) => {
      const transformedData = {
        ...formData,
        empleado_id: empleadoID, // Aseguramos enviar el id del empleado
      };
      console.log("Datos transformados:", transformedData);
      setDatos(transformedData);
      iniciarSolicitud();
    },
    [empleadoID, iniciarSolicitud, setDatos]
  );

  return (
    <Container className="container-margintop">
      {errorGet && <ErrorMessage mensaje={errorGet.message} />}
      {error && <ErrorMessage mensaje={error.message} />}
      {(personalCargando || cargando) && <Loading />}
      {!personalCargando && persona && (
        <>
          <Row className="mb-3">
            <Col md={6}>
              <CardPersona persona={persona} />
            </Col>
            <Col md={6}>
              <CardEmpleado empleado={empleado} />
            </Col>
          </Row>
          <Row>
            <UserRegisterForm onRegister={handleData} />
          </Row>
        </>
      )}
    </Container>
  );
};

export default HolderCrearUsuario;
