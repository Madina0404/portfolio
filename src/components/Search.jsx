import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import React, { useContext } from "react";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigator = useNavigate();
  const { search } = useLocation();
  const Default = search.slice(3);
  const handleSearch = (e) => {
    e.preventDefault();
    const info = e.target.poisc.value;
    setSearchParams({ search: info });
    navigator(`/search?q=${info}`);
  };
  return (
    <form autoComplate="off" onSubmit={handleSearch} className="my-4">
      <input
        placeholder="text"
        className="w-[1000px] px-10 py-1 rounded-sm border-2 outline-none text-purple-700 border-purple-700"
        type="text"
        name="poisc"
        defaultValue={Default}
      />
      <button className="border px-[60px] py-1 rounded-sm border-purple-700 text-purple-700">
        search
      </button>
    </form>
  );
};

export default Search;
