import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { BasketContext } from "../context/BasketContext";

const Contact = () => {
  const { items, Update } = useContext(ProductsContext);
  const {getBasketData} = useContext(BasketContext)
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
      {items.map((item) => {
        return (
          <div
            className="shadow-lg p-2 rounded-md shadow-pink-500/50 m-auto "
            key={item.id}
          >
            <Link to={`/contact/${item.id}`}>
              <img src={item.thumbnail} alt="" />
              <div>
                <h1>{item.title}</h1>
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
              <button onClick={()=> getBasketData(item)} className="bg-green-500 p-2 rounded-md text-white">
                Basket
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
