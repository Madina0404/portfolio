import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DynamicPage from './pages/DynamicPage'
import Search from './components/Search'
import SearchPage from './pages/SearchPage'
import Karzinka from './pages/Karzinka'
import AddProduct from './pages/AddProduct'
const App = () => {


  return (
    <div className='max-w-[1200px] m-auto'>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact/:id' element={<DynamicPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/karzinka' element={<Karzinka/>}/>
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='*' element={<h1 className='text-red-600 text-[40px] ml-[500px]'>Page not found!</h1>}/>
      </Routes>
    </div>
  )
}

export default App