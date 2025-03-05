import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Se asume que la información del usuario se guarda como JSON en localStorage bajo la clave "user"
  const storedUser = localStorage.getItem("appCredential");
  const user = storedUser ? JSON.parse(storedUser) : null;
  console.log(!allowedRoles.includes(user.role))

  // Si no hay usuario o el rol del usuario no está permitido, redirige a /login
  if (!user || !allowedRoles.includes(user.role)) {
    console.log('dad')
    return <Navigate to="/NotAuthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
