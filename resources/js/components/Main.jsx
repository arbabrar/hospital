import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';

function Main() {
  // Obtenemos el token de autenticación del localStorage
  const token = localStorage.getItem("UPDSHospital");

  // Si no existe el token, redirigimos al login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si el token existe, mostramos la estructura de la aplicación
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
