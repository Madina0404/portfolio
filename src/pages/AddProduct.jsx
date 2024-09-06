import axios from "axios";
import { useMutation } from "react-query";
import ProductServices from "../services/ProductSevices";
import { data } from "autoprefixer";

export default function AddProduct() {
    const mutation = useMutation({
        mutationFn: ProductServices.addProduct,
        onSuccess: data => {
            console.log(data);
            alert("success")
        },
        onError: err => {
            console.log(err);
            alert("Error")
        }
    })

    const submitHandler = async e => {
        const payload = {
            name: e.target[0].value,
            image: e.target[1].value,
            amount: e.target[2].value,
            rating: e.target[3].value
        } 
        e.preventDefault();
        console.log(payload);

        mutation.mutate(payload)
    }
  return (
    <div className="container">
        <form className="flex flex-col mt-5 gap-4 max-w-[600px] mx-auto" onSubmit={e => submitHandler(e)}>
            <h3 className="text-center text-2xl">Add product</h3>
            <input className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold " type="text" placeholder="Add Title" name="name" />
            <input className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold " type="text" placeholder="Add image" name="image" />
            <input className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold " type="number" placeholder="Price" name="price" />
            <input className="w-full border border-1 p-2 rounded-lg border-purple-500 text-purple-600 outline-none font-bold " type="number" placeholder="Rating" min={0} max={5} name="rating" />
            <button type="submit" className="w-full bg-green-500 p-2 rounded-md text-white">Submit</button>
        </form>
    </div>
  )
}
