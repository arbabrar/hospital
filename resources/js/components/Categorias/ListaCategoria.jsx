import React, { useEffect, useState, useCallback } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import FieldSearch from "../Utilitarios/FieldSearch";
import usePetitionGet from "../../hooks/useGetPetition";
import usePostPetition from "../../hooks/usePostPetition";
import Loading from "../Utilitarios/Loading";
import CategoriaForm from "./CategoriaForm";

const ListaCategoria = () => {
  const [categoria, setCategoria] = useState([]);
  const [rutaCategoria, setRutaCategoria] = useState("admin/categoria");
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(0);

  // Hook para registrar nueva categoría.
  const { respuesta, cargando, error, iniciarSolicitud, setDatos } = usePostPetition(
    "admin/categoria",
    {},
    true
  );

  // Hook para obtener la lista de categorías, se actualiza al cambiar "rutaCategoria" o "refresh"
  const { dato: categoriaData, cargando: categoriaCargando } = usePetitionGet({
    ruta: `${rutaCategoria}?refresh=${refresh}`,
    islogged: true,
  });

  // Alterna la visibilidad del formulario.
  const showForm = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  // Cuando se recibe respuesta del POST, muestra mensaje, oculta el formulario y fuerza la recarga.
  useEffect(() => {
    if (respuesta) {
      alert("Categoría registrada exitosamente");
      setVisible(false);
      setRefresh((prev) => prev + 1); // Incrementa el contador para refrescar la lista
    }
  }, [respuesta]);

  // Actualiza el estado de 'categoria' cuando llegan nuevos datos.
  useEffect(() => {
    if (categoriaData) {
      setCategoria(categoriaData.data || []);
    }
  }, [categoriaData]);

  // Función de búsqueda que actualiza la ruta según el término ingresado.
  const handleDataSearch = useCallback((searchTerm) => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      setRutaCategoria(`admin/categoria/buscar/${trimmed}`);
    } else {
      setRutaCategoria("admin/categoria");
    }
  }, []);

  // Callback para registrar la categoría. Se transforma la descripción a mayúsculas.
  const handleRegister = useCallback(
    (formData) => {
      const transformedData = {
        ...formData,
        nombre: formData.descripcion.toUpperCase(),
      };
      console.log("Datos transformados:", transformedData);
      setDatos(transformedData);
      iniciarSolicitud();
    },
    [iniciarSolicitud, setDatos]
  );

  return (
    <Container className="container-margintop">
      <Row className="mb-3">
        <Col md={6}>
          <h2 className="text-white mb-3">Listado de Categoría de Medicamento</h2>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="warning" onClick={showForm}>
            Nueva Categoría
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <FieldSearch
          placeholder="Ingrese el nombre de la categoría"
          getData={handleDataSearch}
        />
      </Row>
      <Row>
        <Col md={visible ? 7 : 12}>
          {categoriaCargando || cargando ? (
            <Loading />
          ) : (
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {categoria.length === 0 ? (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No se encontraron resultados.
                    </td>
                  </tr>
                ) : (
                  categoria.map((cat, index) => (
                    <tr key={cat.id}>
                      <td>{index + 1}</td>
                      <td>{cat.descripcion}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </Col>
        {visible && (
          <Col md={5}>
            <CategoriaForm onRegister={handleRegister} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ListaCategoria;
