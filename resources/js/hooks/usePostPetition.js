import { useState } from 'react';
import axios from 'axios';

const usePostPetition = (ruta, isAuthenticated) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const postRequest = async (payload) => {
    setLoading(true);
    try {
      const headers = {};

      // Si el usuario está autenticado, se añade el token a los headers
      if (isAuthenticated) {
        // Aquí se asume que el token se encuentra en localStorage con la clave 'token'
        const token = localStorage.getItem('token');
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      // Se realiza la petición POST a la ruta indicada con los headers correspondientes
      const response = await axios.post(ruta, payload, { headers });
      setData(response.data);
      setError(null);
    } catch (err) {
      // Se maneja el error, se verifica si hay respuesta del servidor
      setError(err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postRequest };
};

export default usePostPetition;
