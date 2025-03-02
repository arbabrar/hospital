import React, { useEffect, useState, useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import usePetitionGet from "../../../hooks/useGetPetition";
import ErrorMessage from "../../Utilitarios/Error/ErrorMessage";
import Loading from "../../Utilitarios/Loading";
import CardPersona from "../Card/CardPersona";
import EmpleadoForm from "../../Empleados/EmpleadoForm";
import usePostPetition from "../../../hooks/usePostPetition";

const HolderAsociarPersonal = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();

  const { dato: personalData, cargando: personalCargando, error: errorGet } = usePetitionGet({
    ruta: `admin/getPersonaByID/${id}`,
    islogged: true,
  });
  
  const { respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition("admin/empleados", {}, true);

  // Cuando se reciba respuesta de la API de POST, muestra el mensaje y redirige.
  useEffect(() => {
    if (respuesta) {
      alert(respuesta.mensaje);
      navigate("/updsHospital/ListPersona");
    }
  }, [respuesta, navigate]);

  // Actualiza el estado de 'persona' cuando llega nueva data.
  useEffect(() => {
    if (personalData) {
      // Se asume que la respuesta contiene la data en la propiedad "data"
      setPersona(personalData.data);
    }
  }, [personalData]);

  // Memoriza la función para transformar y enviar los datos del formulario.
  const handleData = useCallback(
    (formData) => {
      const transformedData = {
        ...formData,
        puesto: formData.puesto.toUpperCase(),
        rol: formData.rol.toUpperCase(),
        persona_id: id,
      };
      setDatos(transformedData);
      iniciarSolicitud();
    },
    [id, iniciarSolicitud, setDatos]
  );

  return (
    <Container className="container-margintop">
      {errorGet && <ErrorMessage mensaje={errorGet.message} />}
      {error && <ErrorMessage mensaje={error.message} />}
      {(personalCargando || cargando) && <Loading />}
      {!personalCargando && persona && (
        <>
          <Row className="mb-3">
            <CardPersona persona={persona} />
          </Row>
          <Row>
            <EmpleadoForm onSendData={handleData} />
          </Row>
        </>
      )}
    </Container>
  );
};

export default HolderAsociarPersonal;
