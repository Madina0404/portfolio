import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductSevices";


const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  
  // const products = useQuery({
  //   queryKey: ["getProducts", ],
  //   queryFn: ProductServices.getProducts
  // })

  const products = useQuery({
    queryKey: ["getProducts", ],
    queryFn: ProductServices.getProducts
  })

  const onDelete = (id) => {
    
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
        {!products.isLoading ? (
        products &&
        products.data &&
        products.data.items &&
        products.data.items.map((item) => (
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
                variant="primary"
                onClick={() => setModalShow(true)}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Delete
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
