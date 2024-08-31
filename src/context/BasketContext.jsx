import { createContext, useState } from "react";



export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const getBasketData = (data) => {
    const isExist = basket.some((item)=> item.id === data.id)
    if(!isExist){
        setBasket([...basket, data])
    }
  };

  return (
    <BasketContext.Provider value={{ getBasketData, basket }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketProvider;
