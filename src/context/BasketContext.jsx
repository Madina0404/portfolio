import { createContext, useState } from "react";

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const getBasketData = (data) => {
    const isExist = basket.some((item) => item.id === data.id);
    if (!isExist) {
      setBasket([...basket, data]);
    }
  };

  const DeleteProduct = (data) => {
    const newBasket = basket.filter((item) => item.id !== data.id);
    setBasket(newBasket);
    console.log("deleted");
  };

  return (
    <BasketContext.Provider value={{ getBasketData, basket, DeleteProduct }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketProvider;
