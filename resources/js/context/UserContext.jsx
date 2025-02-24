import React, { createContext, useEffect, useState } from "react";

// Valor por defecto en el contexto para evitar problemas al consumirlo sin Provider
const UserContext = createContext({
  usuario: null,
  setUsuario: () => {}
});

const UserContextProvider = ({ children }) => {
  // Inicializa el estado leyendo del localStorage de forma segura
  const [usuario, setUsuario] = useState(() => {
    try {
      const storedUser = localStorage.getItem("appCredential");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error al parsear appCredential del localStorage:", error);
      return null;
    }
  });

  // Efecto opcional: actualiza el localStorage cuando cambia el usuario
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("appCredential", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("appCredential");
    }
  }, [usuario]);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
