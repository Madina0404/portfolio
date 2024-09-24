import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className=" w-[100%] bg-purple-500">
      <div className="max-w-[1200px] mx-auto p-4 flex justify-between items-center">
        <img src="https://cdn1.iconfinder.com/data/icons/Blend-png/512/Document-Generic-white.png" className="w-[50px]" alt="" />
        <nav className="flex gap-3 text-[20px] border-b-2 border-purple-500">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white text-decoration-underline"
                : "border-b-2 border-transparent"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white text-decoration-underline"
                : "border-b-2 border-transparent"
            }
            to={"/About"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white text-decoration-underline"
                : "border-b-2 border-transparent"
            }
            to={"/Contact"}
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white text-decoration-underline"
                : "border-b-2 border-transparent"
            }
            to={"/add-product"}
          >
            Add product
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white text-white text-decoration-underline"
                : "border-b-2 border-transparent "
            }
            to={"/Karzinka"}
          >
            karzinka
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
