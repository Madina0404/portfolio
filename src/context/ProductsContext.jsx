import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    let api = "https://dummyjson.com/products";
    try {
      const response = await axios.get(api);
      setItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // const Deleted = (id)=>{
  //   const NewData = items.filter((value)=>{value.id !== id})
  //   setItems(NewData)
  // }

  const Update = async (id) => {
    try {
      const response = await axios.put("/api/products/" + id, {
      });
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProductsContext.Provider value={{ items, Update }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
