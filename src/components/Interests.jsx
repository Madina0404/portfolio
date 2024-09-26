import BtnLogo from '../assets/logos/BtnLogo.svg'
import React from 'react'
import Right from '../assets/logos/Right.svg'
import Photo from '../assets/images/photo.svg' 
import Photo2 from '../assets/images/Photo2.svg'
const Interests = () => {
  return (
    <div>
        <div className='flex justify-between max-w-[1200px] mx-auto items-center mt-[50px]'>
        <img 
                className='relative photo top-[40px] transition-transform duration-500 ease-in-out scale-110' 
                src={Photo} 
                alt="" 
            />
            <img src={Photo2} className='relative photo top-[200px] transition-transform duration-500 ease-in-out scale-110'  alt="" />
        </div>
        <div className='max-w-[1200px] mt-[100px] mx-auto p-5 flex flex-col items-center justify-center'>
            <h1 className='text-[40px] font-bold w-[600px] text-center'>Hand-crafted styles for every brand & use-case</h1>
            <p >With new styles being added constantly</p>
            <button className='mt-[20px] flex items-center gap-4 bg-purple-400 text-white p-2 rounded-[20px] hover:bg-white hover:text-purple-400 hover:border-2 hover:border-purple-400 transition-all'>
                <img src={BtnLogo} alt="" />
                <p>Find the perfect illustration</p>
                <img src={Right} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Interests 
