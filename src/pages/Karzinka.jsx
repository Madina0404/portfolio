import React, { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";

const Karzinka = () => {
  const { basket, DeleteProduct } = useContext(BasketContext);
  const [name] = useState();

  return (
    <div>
      {name === true && <div>Karzinka bo'sh payida</div>}
      {name === false && (
        <div>
          <h2>karzinka</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
            {basket.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.thumbnail} alt="" />
                  <h2>{item.title}</h2>
                  <div className="flex justify-between p-2 gap-4 items-center">
                    <b>{item.price}</b>
                    <button
                      onClick={() => DeleteProduct(item)}
                      className="bg-red-500 text-white p-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Karzinka;
