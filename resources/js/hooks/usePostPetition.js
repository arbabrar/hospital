import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePostPetition = (ruta, data, autoStart = false) => {
  const URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("UPDSHospital");
  const [datos, setDatos] = useState(data); // Datos que se envían
  const [respuesta, setRespuesta] = useState(null); // Respuesta del servidor
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(autoStart);
  const navigate = useNavigate();

  const iniciarSolicitud = useCallback(() => {
    setStart(true);
  }, []);

  useEffect(() => {
    if (!start) return;

    const fetchData = async () => {
      setCargando(true);
      setError(null);
      let response;
      try {
        if (ruta === "auth/login") {
          response = await axios.post(`${URL}${ruta}`, datos);
        } else {
          response = await axios.post(`${URL}${ruta}`, datos, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        }
        
        setRespuesta(response.data); // Guardar la respuesta en el estado respuesta
      } catch (err) {
        console.log(err)
        if (err.response) {
          // Manejar error 422 de validación
          //console.log(error.response)
          if (err.response.status === 422) {
          
            const validationErrors = err.response.data.errors;
            setError(validationErrors);
          }
          // Manejar error 401 de autenticación
          else if (err.response.status === 401 && ruta !== "auth/login") {
            localStorage.removeItem("UPDSHospital");
            localStorage.removeItem("user");
            navigate("/login"); // Redirigir a la página de login
          }
          // Manejar otros errores del servidor
          else {
            //console.log(err)
            const errorMessage = err.response.data.message;
            setError({ message: errorMessage });
          }
        }
        // Manejar errores sin respuesta del servidor (problemas de red, etc.)
        else {
          setError({ message: "Ocurrió un error al enviar la solicitud" });
        }
      } finally {
        setCargando(false);
        setStart(false);
      }
    };

    fetchData();
  }, [start, URL, ruta, datos, token, navigate]);

  return { respuesta, cargando, error, iniciarSolicitud, setDatos };
};

export default usePostPetition;
