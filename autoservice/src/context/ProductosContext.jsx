import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductosContext = createContext();

export const useProductosContext = () => {
  return useContext(ProductosContext);
};

export const ProductoProvider = ({ children }) => {
  const [dataProductos, setDataProductos] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const [productosQuantities, setProductosQuantities] = useState({});
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productos");
      setDataProductos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = (producto) => {
    setDataCart((prevCart) => [...prevCart, producto]);
    setTotalCart((prevTotal) => prevTotal + producto.price);
    setProductosQuantities((prevQuantities) => ({
      ...prevQuantities,
      [producto.id]: (prevQuantities[producto.id] || 0) + 1,
    }));
  };

  const removeFromCart = (producto) => {
    // Si la cantidad de esta producto es mayor que uno, simplemente disminuimos la cantidad
    if (productosQuantities[producto.id] > 1) {
      setProductosQuantities((prevQuantities) => ({
        ...prevQuantities,
        [producto.id]: prevQuantities[producto.id] - 1,
      }));
      setTotalCart((prevTotal) => prevTotal - producto.price);
    } else {
      // Si la cantidad es 1 o menos, eliminamos la producto completa
      setDataCart((prevCart) =>
        prevCart.filter((item) => item.id !== producto.id)
      );
      setTotalCart((prevTotal) => prevTotal - producto.price);
      setProductosQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[producto.id];
        return updatedQuantities;
      });
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        dataProductos,
        dataCart,
        productosQuantities,
        totalCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosContext;
