import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Karzinka = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div>
      <h2>karzinka</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
        {basket.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.thumbnail} alt="" />
              <h2>{item.title}</h2>
              <b>{item.price}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Karzinka;
