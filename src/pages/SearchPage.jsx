import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom/dist";
const SearchPage = () => {
  const { search } = useLocation();
  const [state, setState] = useState([]);
  const Data = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search${search}`
      );
      setState(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Data();
  }, [search]);
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {state.map((item) => (
          <li key={item.id}>
            <Link  to={`/contact/${item.id}`}>
              <img src={item.thumbnail} alt="" />
              <div>
                <h2>{item.title}</h2>
                <b>{item.price}</b>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
