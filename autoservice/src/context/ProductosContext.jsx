import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Crear el Contexto que tenemos que consumir
const ProductosContext = createContext();

// . Crear el
export const useProductosContext = () => {
  return useContext(ProductosContext);
};

// 2. Crear el Provider nos provee de aceso al contexto
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
      const response = await axios.get(
        "https://back-autoservice.onrender.com/productos"
      );
      setDataProductos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToCart = (producto) => {
    if (producto && producto.id) {
      setDataCart((prevCart) => [...prevCart, producto]);
      setTotalCart((prevTotal) => prevTotal + producto.precio);
      setProductosQuantities((prevQuantities) => ({
        ...prevQuantities,
        [producto.id]: (prevQuantities[producto.id] || 0) + 1,
      }));
    } else {
      console.error(
        "El producto no tiene la propiedad 'id' definida correctamente."
      );
    }
  };

  const removeFromCart = (producto) => {
    // Si la cantidad de esta producto es mayor que uno, simplemente disminuimos la cantidad
    if (productosQuantities[producto.id] > 1) {
      setProductosQuantities((prevQuantities) => ({
        ...prevQuantities,
        [producto.id]: prevQuantities[producto.id] - 1,
      }));
      setTotalCart((prevTotal) => prevTotal - producto.precio);
    } else {
      // Si la cantidad es 1 o menos, eliminamos la producto completa
      setDataCart((prevCart) =>
        prevCart.filter((item) => item.id !== producto.id)
      );
      setTotalCart((prevTotal) => prevTotal - producto.precio);
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
