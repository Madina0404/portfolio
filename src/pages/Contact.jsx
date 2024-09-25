import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import ProductServices from "../services/ProductSevices";

const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: products, isLoading, isError, error } = useQuery(
    ["getProducts"],
    ProductServices.getProducts
  );

  const deleteMutation = useMutation(
    (id) => ProductServices.deleteProduct(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getProducts"]);
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    }
  );

  const onDelete = (id) => {
    setSelectedProductId(id);
    setModalShow(true);
  };

  const Update = (id) => {
    setSelectedProductId(id);
    setUpdateModal(true);
  };

  const confirmDelete = () => {
    if (selectedProductId) {
      deleteMutation.mutate(selectedProductId);
      setModalShow(false);
    }
  };

  useEffect(() => {
    if (products?.items) {
      const timeouts = products.items.map((_, index) =>
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200) 
      );

      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }
  }, [products]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto max-w-[1200px]">
      {products?.items?.map((item, index) => (
        <div
          className={`shadow-lg p-2 rounded-md shadow-purple-500/50 m-auto w-[100%] h-[100%] card ${
            visibleCards.includes(index) ? "visible" : ""
          }`}
          key={item.id}
        >
          <Link to={`/contact/${item.id}`}>
            <img
              src={item.image}
              className="w-[100%] h-[250px] box-border"
              alt={item.name}
            />
            <div>
              <h1>{item.name}</h1>
              <b>{item.price}</b>
            </div>
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/update/${item.id}`)}
              className="bg-purple-500 text-white p-2 rounded-md"
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
      ))}

      {modalShow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setModalShow(false)}
                className="bg-gray-500 text-white p-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
