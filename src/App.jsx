import React, { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DynamicPage from "./pages/DynamicPage";
import Search from "./components/Search";
import SearchPage from "./pages/SearchPage";
import Karzinka from "./pages/Karzinka";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import { useForm } from "react-hook-form";

const App = () => {
  const [open, setOpen] = useState(); 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null); 

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <div className="max-w-[1200px] m-auto">
      {!open && ( 
        <>
          <Navbar />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<DynamicPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/karzinka" element={<Karzinka />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route
              path="*"
              element={
                <h1 className="text-red-600 text-[40px] ml-[500px]">
                  Page not found!
                </h1>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
