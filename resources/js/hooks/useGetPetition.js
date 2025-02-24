import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePetitionGet = ({ruta, islogged = true}) =>{
  const URL = import.meta.env.VITE_API_URL;
  const navigate= useNavigate();
  const token = localStorage.getItem('UPDSHospital');
  const [dato, setDato] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
        setCargando(true);
        setError(null);
        const fullUrl = `${URL}${ruta}`;
      
        try {
            let response;
            if(islogged){
                response = await axios.get(fullUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
            }else{
                response = await axios.get(fullUrl); 
            }
            
            setDato(response.data);
        } catch (err) {
            
            setError(err);
            if(err.response.status===401){
                localStorage.removeItem('UPDSHospital');
                localStorage.removeItem('user');
                navigate('/login');
            }
        } finally {
            setCargando(false);
        }
    };

    fetchData();
  },[ruta, URL, token])
  
  return { dato, cargando, error };
}
export default usePetitionGet;