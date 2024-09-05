import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    let api = "http://localhost:3000/clothes";
    try {
      const response = await axios.get(api);
      setItems(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const Deleted = (id) => {
    const NewData = items.filter((value) => {
      value.id !== id;
    });
    setItems(NewData);
  };

  const Update = async (product) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/clothes/" + product.id,
        product
      );
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProductsContext.Provider value={{ items, Update, Deleted, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
