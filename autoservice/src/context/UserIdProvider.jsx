import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const UserIdContext = createContext();

// Hook personalizado para utilizar el contexto
export const useUserId = () => useContext(UserIdContext);

// Componente proveedor del contexto
export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(109);

  useEffect(() => {
    // Obtener el userId de donde sea que lo tengas (localStorage, cookies, etc.)
    const userIdFromStorage = localStorage.getItem("userId");
    if (userIdFromStorage) {
      setUserId(parseInt(userIdFromStorage));
    }
  }, []);

  // Función para generar un nuevo ID de usuario
  const generateNewUserId = () => {
    const newUserId = userId + 1; // Incrementa el ID actual en 1
    setUserId(newUserId);
    localStorage.setItem("userId", newUserId); // Guarda el nuevo ID en el almacenamiento local
  };

  return (
    <UserIdContext.Provider value={{ userId, generateNewUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
