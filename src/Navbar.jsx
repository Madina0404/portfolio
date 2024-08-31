
import { Link, NavLink } from 'react-router-dom'
import './index.css'
import { ProductsContext } from './context/ProductsContext';
import { useContext } from 'react';
import { BasketContext } from './context/BasketContext';

const Navbar = () => {
  const {basket} = useContext(BasketContext)
  return (
    <nav className='flex gap-3 mx-[20px] my-5 text-[20px] border-b-2 border-gray-500 py-3'>
      <NavLink className={'border-b-2 border-transparent'} to={"/"}>Home</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={"/About"}>About</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={"/Contact"}>Product</NavLink>
      <NavLink className={'border-b-2 border-transparent'} to={'/Karzinka'}>karzinka: {basket.length}</NavLink>
    </nav>
  )
}

export default Navbar