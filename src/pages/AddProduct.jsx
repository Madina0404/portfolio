import axios from "axios";

export default function AddProduct() {
    const submitHandler = async e => {
        const payload = {
            name: e.target[0].value,
            image: e.target[1].value,
            amount: e.target[2].value,
            rating: e.target[3].value
        } 
        e.preventDefault();
        console.log(payload);

        try {
            const res = await axios.post("http://localhost:3000/clothes", payload)
            console.log(res);
            alert("submitted")
        } catch (error) {
            console.log("Error while submitting: ",error);
        }
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
