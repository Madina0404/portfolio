import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import ProductServices from "../services/ProductSevices";
const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery(["getProducts"], ProductServices.getProducts);

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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;


  

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 m-auto">
      {products?.items?.map((item) => (
        <div
          className="shadow-lg p-2 rounded-md shadow-blue-500/50 m-auto"
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

      {updateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <div className="flex justify-end gap-2 mt-4">
              <p className=" text-center text-purple-500 text-[30px]">Update</p>
              <button
                onClick={() => setUpdateModal(false)}
                className="bg-purple-500 text-white p-2 rounded-md"
              >
                Cancel
              </button>
            </div>
            <div className=" mt-3 flex flex-col gap-5">
              <div className=" flex gap-3">
                <input
                  className=" text-purple-500 text-[18px] p-2 border-2 rounded-lg outline-none border-purple-700 "
                  type="text"
                  placeholder="image"
                  name=""
                  id=""
                />
                <input
                  className=" text-purple-500 text-[18px] p-2 border-2 rounded-lg outline-none border-purple-700 "
                  type="text"
                  placeholder="Title"
                  name=""
                  id=""
                />
              </div>
              <div className=" flex gap-3">
                <input
                  className=" text-purple-500 text-[18px] p-2 border-2 rounded-lg outline-none border-purple-700 "
                  type="text"
                  placeholder="raiting"
                  name=""
                  id=""
                />
                <input
                  className=" text-purple-500 text-[18px] p-2 border-2 rounded-lg outline-none border-purple-700 "
                  type="text"
                  placeholder="price"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
