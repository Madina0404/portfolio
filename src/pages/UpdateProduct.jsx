import { useMutation, useQuery, useQueryClient } from "react-query";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ProductServices from "../services/ProductSevices";

export default function UpdateProduct() {
  const params = useParams();
  const navigate = useNavigate()

  // Usually I use query for GET Requests
  const productData = useQuery({
    queryKey: ["getOneProduct", params.id], //nomi va argument
    queryFn: ProductServices.getOne, //funksiya
    enabled: !!params.id, //klyuchatel
  });

  // Usually Developers use mutation for POST/PUT/DELETE requests
  const mutation = useMutation({
    mutationFn: ProductServices.updateOne,
    onSuccess: data => {
      console.log(data);  
      navigate("/Contact")
    },
    
  });

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();

    const payload = {
      id: params.id,
      product: {
        name: e.target.name.value,
        image: e.target.image.value,
        amount: e.target.price.value,
        rating: e.target.rating.value,
      },
    };

    mutation.mutate(payload)
  };

  return (
    <div className="container">
      {!productData.isLoading ? (
        <form
          className="flex flex-col mt-5 gap-4 max-w-[600px] mx-auto"
          onSubmit={submitHandler}
        >
          <h3 className="text-center text-2xl">Update Product ✌</h3>
          <input
            className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold"
            type="text"
            defaultValue={productData.data.item.name}
            placeholder="Add Title"
            name="name"
          />
          <input
            className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold"
            type="text"
            placeholder="Add image"
            defaultValue={productData.data.item.image}
            name="image"
          />
          <input
            className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold"
            type="number"
            placeholder="Price"
            defaultValue={
              productData.data.item.price
                ? Number(productData.data.item.price)
                : 0
            }
            name="price"
          />
          <input
            className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold"
            type="number"
            placeholder="Rating"
            min={0}
            max={5}
            defaultValue={Number(productData.data.item.rating)}
            name="rating"
          />
          <button
            type="submit"
            className="w-full bg-green-500 p-2 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
