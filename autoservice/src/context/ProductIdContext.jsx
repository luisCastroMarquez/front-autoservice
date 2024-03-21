import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const ProductIdContext = createContext();

// Hook personalizado para utilizar el contexto
export const useProductIdContext = () => useContext(ProductIdContext);

export const ProductIdProvider = ({ children }) => {
  const [productId, setProductId] = useState(0);

  const setProductIdValue = (id) => {
    setProductId(id);
  };

  useEffect(() => {
    console.log("ID de producto seleccionado:", productId);
  }, [productId]);

  return (
    <ProductIdContext.Provider value={{ productId, setProductIdValue }}>
      {children}
    </ProductIdContext.Provider>
  );
};

export default ProductIdContext;
