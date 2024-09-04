import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { BasketContext } from "../context/BasketContext";

const Contact = () => {
  const { items, Update, isLoading } = useContext(ProductsContext);
  const { getBasketData } = useContext(BasketContext);
  console.log(isLoading);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
      {!isLoading ? (
        items &&
        items.items &&
        items.items.map((item) => (
          <div
            className="shadow-lg p-2 rounded-md shadow-blue-500/50 m-auto "
            key={item.id}
          >
            <Link to={`/contact/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <div>
                <h1>{item.name}</h1>
                <b>{item.price}</b>
              </div>
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => Update(item.id)}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => getBasketData(item)}
                className="bg-green-500 p-2 rounded-md text-white"
              >
                Basket
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contact;
