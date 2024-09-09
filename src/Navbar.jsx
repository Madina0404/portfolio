
import { NavLink } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <nav className='flex gap-3 mx-[20px] my-5 text-[20px] border-b-2 border-gray-500 py-3'>
      <NavLink className={'border-b-2 border-transparent'} to={"/"}>Home</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={"/About"}>About</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={"/Contact"}>Product</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={"/add-product"}>Add product</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={'/Karzinka'}>karzinka</NavLink>
    </nav>
  )
}

export default Navbar